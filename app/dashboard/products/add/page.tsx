"use client";
import React, { useEffect, useState } from "react";
import { Button, Dropzone, Select, Textarea, Input } from "@/components/ui";
import { firestore, storage } from "@/firebaseConfig";
import { addDoc, collection } from "@firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import useLoading from "@/hooks/useLoading";
import { resizer } from "@/lib/resizer";
import { useRouter } from "next/navigation";
import { Routes } from "@/lib/routes";
import { ProductType } from "@/@interfaces/product";
import { LookupType } from "@/@interfaces/category";
import { getDocuments } from "@/lib/http";

interface FileProps {
  file: File;
  preview: string;
}

const Page: React.FC = () => {
  const router = useRouter();

  const [file, setFile] = useState<FileProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<LookupType[]>([]);
  const [brands, setBrands] = useState<LookupType[]>([]);
  const [sizes, setSizes] = useState<LookupType[]>([]);
  const [product, setProduct] = useState<Omit<ProductType, "id" | "createdAt">>({
    image: "",
    nameEN: "",
    nameAR: "",
    descriptionEN: "",
    descriptionAR: "",
    price: "",
    category: "",
    brand: "",
    size: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const fetchLookups = async () => {
    try {
      const [categories, brands, sizes] = await Promise.all([
        getDocuments("categories"),
        getDocuments("brands"),
        getDocuments("sizes"),
      ]);

      setCategories(categories.documents as LookupType[]);
      setBrands(brands.documents as LookupType[]);
      setSizes(sizes.documents as LookupType[]);
    } catch (error) {
      console.error("Error fetching lookups:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const resizedImage = await resizer(file[0].file, 500, 500, 100, product.nameEN);
      const storageRef = ref(storage, `products/${product.nameEN}-${Date.now()}.webp`);
      const uploadTask = uploadBytesResumable(storageRef, resizedImage);

      uploadTask.on(
        "state_changed",
        () => {},
        () => {},
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setProduct((prevProduct) => ({ ...prevProduct, image: downloadURL }));
          await addDoc(collection(firestore, "products"), {
            ...product,
            ...(product.category === "TV" && { size: product.size }),
            image: downloadURL,
            createdAt: new Date(),
          });
          setIsLoading(false);
          setFile([]);
          setProduct({
            image: "",
            nameEN: "",
            nameAR: "",
            descriptionEN: "",
            descriptionAR: "",
            price: "",
            category: "",
            brand: "",
            size: "",
          });
          router.push(Routes.PRODUCTS);
        }
      );
    } catch (error) {
      throw new Error(`Parsing failed: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLookups();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        {useLoading(isLoading)}

        <div className='mx-auto max-w-2xl'>
          <div className='w-full grid grid-cols-1 gap-4'>
            <Select
              name='category'
              placeholder='Select category'
              value={product.category}
              onChange={(e) => handleChange(e)}
              required
              error=''
              options={categories}
            />
            <div className='grid grid-cols-2 gap-4 col-span-1'>
              <Input
                name='nameEN'
                placeholder='Name in english'
                type='text'
                value={product.nameEN}
                onChange={(e) => handleChange(e)}
                required
                error=''
              />
              <Input
                name='nameAR'
                placeholder='Name in arabic'
                type='text'
                value={product.nameAR}
                onChange={(e) => handleChange(e)}
                required
                error=''
              />
            </div>
            <div className='grid grid-cols-2 gap-4 col-span-1'>
              <Select
                name='brand'
                placeholder='Select brand'
                value={product.brand}
                onChange={(e) => handleChange(e)}
                required
                error=''
                options={brands}
              />
              <Input
                name='price'
                placeholder='Price'
                type='number'
                value={product.price}
                onChange={(e) => handleChange(e)}
                required
                error=''
              />
            </div>
            {product.category === "TV" && (
              <Select
                name='size'
                placeholder='Select size'
                value={product.size}
                onChange={(e) => handleChange(e)}
                required
                error=''
                options={sizes}
              />
            )}
            <Textarea
              name='descriptionEN'
              placeholder='Description in english'
              value={product.descriptionEN}
              onChange={(e) => handleChange(e)}
              required
              error=''
            />
            <Textarea
              name='descriptionAR'
              placeholder='Description in arabic'
              value={product.descriptionAR}
              onChange={(e) => handleChange(e)}
              required
              error=''
            />
            <Dropzone files={file} setFiles={setFile} />

            <div className='flex gap-4 justify-end'>
              <Button
                className='bg-gray-200 hover:bg-gray-300 !text-gray-800'
                text='Cancel'
                type='button'
                onClick={() => router.push(Routes.PRODUCTS)}
              />
              <Button text='Add' type='submit' />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Page;
