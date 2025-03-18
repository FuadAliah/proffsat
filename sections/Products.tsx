"use client";
import React from "react";
import ProductsList from "@/components/ProductsList";
import { Routes } from "@/lib/routes";
import Link from "next/link";
import { getTranslation } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";

const Products: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className='bg-gray-50 py-16 min-h-screen'>
      <div className='mx-auto sm:px-6 px-4 max-w-7xl'>
        <div className='mx-auto text-center'>
          <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
            {" "}
            {getTranslation("our_products", language)}
          </h2>
        </div>

        <ProductsList pageSize={8} />
        <div className='flex w-full justify-center'>
          <Link
            href={Routes.ALL_PRODUCTS}
            className='bg-gray-50 text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 transition px-6 py-3 rounded-md'
          >
            {getTranslation("view_all", language)}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
