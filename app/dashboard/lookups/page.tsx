"use client";
import { useEffect, useState } from "react";
import { getDocuments } from "@/lib/http";
import { LookupType } from "@/@interfaces/category";
import Categories from "@/components/lookups/Categories";
import Brands from "@/components/lookups/Brands";
import Sizes from "@/components/lookups/Sizes";

const Page: React.FC = () => {
  const [categories, setCategories] = useState<LookupType[]>([]);
  const [brands, setBrands] = useState<LookupType[]>([]);
  const [sizes, setSizes] = useState<LookupType[]>([]);

  const [loadingCategories, setLoadingCategories] = useState<boolean>(false);
  const [loadingBrands, setLoadingBrands] = useState<boolean>(false);
  const [loadingSizes, setLoadingSizes] = useState<boolean>(false);

  const fetchCategories = async () => {
    setLoadingCategories(true);
    try {
      const categories = await getDocuments("categories");
      setCategories(categories.documents as LookupType[]);
    } catch (error) {
      throw new Error(`Failed to fetch categories ${error}`);
    }
    setLoadingCategories(false);
  };

  const fetchBrands = async () => {
    setLoadingBrands(true);
    try {
      const brands = await getDocuments("brands");
      setBrands(brands.documents as LookupType[]);
    } catch (error) {
      throw new Error(`Failed to fetch brands ${error}`);
    }
    setLoadingBrands(false);
  };

  const fetchSizes = async () => {
    setLoadingSizes(true);
    try {
      const sizes = await getDocuments("sizes");
      setSizes(sizes.documents as LookupType[]);
    } catch (error) {
      throw new Error(`Failed to fetch sizes ${error}`);
    }
    setLoadingSizes(false);
  };

  useEffect(() => {
    fetchCategories();
    fetchBrands();
    fetchSizes();
  }, []);

  return (
    <div className='w-full'>
      <div className='grid grid-cols-3 gap-10'>
        <Categories categories={categories} fetch={fetchCategories} loading={loadingCategories} />
        <Brands brands={brands} fetch={fetchBrands} loading={loadingBrands} />
        <Sizes sizes={sizes} fetch={fetchSizes} loading={loadingSizes} />
      </div>
    </div>
  );
};

export default Page;
