"use client";
import { getTranslation } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import { ProductType } from "@/@interfaces/product";
import { FilterType } from "@/@interfaces/filteredAPI";
import { getDocuments } from "@/lib/http";
import Slider from "@/components/Slider";
import useLoading from "@/hooks/useLoading";

const SpecialProducts = () => {
  const { language } = useLanguage();
  const [products, setProducts] = useState<Omit<ProductType[], "id">>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters] = useState<FilterType>({ field: "brand", operator: "==", value: "Proffsat" });

  const fetchProducts = async () => {
    try {
      const docs = await getDocuments("products", "createdAt", { ...filters });
      setProducts(docs.documents as ProductType[]);
    } catch (error) {
      throw new Error(`Failed to fetch products ${error}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='relative bg-white py-16 h-auto'>
      {useLoading(loading)}
      <div className='mx-auto sm:px-6 px-4 max-w-7xl'>
        <div className='mx-auto'>
          <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
            {getTranslation("special_products", language)}
          </h2>
        </div>

        <div className='flex w-full justify-center mt-10'>
          <Slider data={products} />
        </div>
      </div>
    </section>
  );
};

export default SpecialProducts;
