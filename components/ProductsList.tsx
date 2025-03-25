"use client";
import React, { useEffect, useState } from "react";
import { ProductType } from "@/@interfaces/product";
import Product from "@/components/Product";
import useLoading from "@/hooks/useLoading";
import { getDocuments } from "@/lib/http";

type Props = {
  pageSize?: number;
};

const ProductsList: React.FC<Props> = ({ pageSize }: Props) => {
  const [products, setProducts] = useState<Omit<ProductType[], "id">>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const docs = await getDocuments("products");
      setProducts(docs.slice(0, pageSize) as ProductType[]);
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
    <div className='grid relative grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 lg:gap-12'>
      {useLoading(loading)}

      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
};

export default ProductsList;
