"use client";
import React, { useEffect, useState } from "react";
import { ProductAPI, ProductType } from "@/@interfaces/product";
import Product from "@/components/Product";
import useLoading from "@/hooks/useLoading";
import { getDocuments } from "@/lib/http";

type Props = {
  pageSize?: number;
};

const ProductsList: React.FC<Props> = ({ pageSize }: Props) => {
  const [products, setProducts] = useState<Omit<ProductType[], "id" | "createdAt">>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await getDocuments("products");
      const formattedProducts = response
        .map((item: ProductAPI) => ({
          id: item.id,
          descriptionEN: item.descriptionEN.stringValue,
          brand: item.brand.stringValue,
          size: item.size.stringValue,
          image: item.image.stringValue,
          nameEN: item.nameEN.stringValue,
          category: item.category.stringValue,
          createdAt: item.createdAt.timestampValue,
          price: item.price.stringValue,
          nameAR: item.nameAR.stringValue,
          descriptionAR: item.descriptionAR.stringValue,
        }))
        .sort((a: { createdAt: string }, b: { createdAt: string }) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });

      setProducts(pageSize ? [...formattedProducts.slice(0, pageSize)] : formattedProducts);
    } catch (error) {
      throw new Error(`Parsing failed: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='grid relative grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 lg:gap-12'>
      {useLoading(loading)}

      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
};

export default ProductsList;
