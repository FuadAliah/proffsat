"use client";
import React, { useEffect, useState } from "react";
import { ProductType } from "@/@interfaces/product";
import Product from "@/components/Product";
import { getDocuments } from "@/lib/http";
import { getTranslation } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";
import useLoading from "@/hooks/useLoading";

type Props = {
  pageSize?: number;
  showLoadButton?: boolean;
};

const ProductsList: React.FC<Props> = ({ pageSize = 8, showLoadButton = false }) => {
  const { language } = useLanguage();
  const [products, setProducts] = useState<Omit<ProductType[], "id">>([]);
  const [lastVisible, setLastVisible] = useState<any>(null); // To store the last document for pagination
  const [loading, setLoading] = useState<boolean>(true);
  const [noMoreData, setNoMoreData] = useState<boolean>(false);

  const fetchProducts = async (pageStart?: any) => {
    try {
      const { documents, lastVisible: newLastVisible } = await getDocuments(
        "products",
        "createdAt",
        undefined,
        pageStart,
        pageSize
      );

      if (documents.length === 0) {
        setNoMoreData(true);
      } else {
        setProducts((prev: any) => {
          const newProducts = documents.filter(
            (newProduct) =>
              !prev.some((existingProduct: { id: string }) => existingProduct.id === newProduct.id)
          );
          return [...prev, ...newProducts]; // Append the filtered new products
        });
        setLastVisible(newLastVisible);
      }
    } catch (error) {
      console.error(`Failed to fetch products: ${error}`);
    }
    setLoading(false);
  };

  const loadMoreProducts = () => {
    if (!loading && !noMoreData && lastVisible) {
      fetchProducts(lastVisible);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex flex-col relative'>
      {useLoading(loading)}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 lg:gap-12'>
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
      {!loading && !noMoreData && showLoadButton && (
        <button
          onClick={loadMoreProducts}
          className='w-fit flex gap-2 items-center mx-auto bg-gray-50 text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 transition px-6 py-3 rounded-md cursor-pointer'
        >
          <span>{getTranslation("load_more", language)}</span>
        </button>
      )}

      {noMoreData && !loading && showLoadButton && (
        <p className='w-full flex justify-center text-gray-500 font-light text-sm mt-6'>
          {getTranslation("no_more", language)}
        </p>
      )}
    </div>
  );
};

export default ProductsList;
