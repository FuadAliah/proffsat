"use client";
import React from "react";
import { useEffect, useState } from "react";
import { ProductType } from "@/@interfaces/product";
import DefualtImage from "@/components/DefualtImage";
import Header from "@/components/core/Header";
import useLoading from "@/hooks/useLoading";
import { getDocument } from "@/lib/http";
import { checkDescription } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/lib/routes";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/utils/translations";
import { checkDate } from "@/utils/Date";

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { language } = useLanguage();

  // const mobile = "962795383168";
  const mobile = "962776968571";

  const getProduct = async () => {
    setIsLoading(true);
    const doc = await getDocument("products", params.id);
    setProduct(doc as ProductType);
    setIsLoading(false);
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.id]);

  const renderDescription = (description: string): React.JSX.Element => {
    const items = checkDescription(description);
    return (
      <ul className='flex flex-col gap-2'>
        {Array.isArray(items) ? (
          items.map((item, index) => (
            <li key={index} className='text-sm text-gray-600'>
              {item}
            </li>
          ))
        ) : (
          <div>{items}</div>
        )}
      </ul>
    );
  };

  return (
    <div className='flex flex-col items-center min-h-screen bg-white'>
      <Header />
      <div className='my-30 relative flex flex-col gap-6'>
        {useLoading(isLoading, "white")}
        <a
          href={Routes.HOME}
          className='!flex gap-1 items-center w-fit px-4 py-2.5 bg-gray-100 text-gray-600 rounded-md'
        >
          <Image
            src={`/${language === "en" ? "back" : "next"}Arrow.svg`}
            alt='arrow'
            width={20}
            height={20}
          />
          <span>{getTranslation("back", language)}</span>
        </a>
        <div className='flex  gap-12 w-5xl '>
          <div className='flex md:w-1/2 w-1/2 h-100 justify-center items-center aspect-square overflow-hidden rounded-2xl p-3 border border-gray-200'>
            {product?.image ? (
              <Image src={product.image} alt='' priority={true} width={500} height={500} />
            ) : (
              <DefualtImage />
            )}
          </div>

          <div className='flex md:w-1/2 w-1/2 flex-col gap-4'>
            {checkDate(product?.createdAt) && (
              <p className='w-fit px-3 sm:py-1.5 py-1 text-[12px] sm:text-sm font-bold tracking-wide text-white uppercase bg-red-500 rounded-full'>
                {getTranslation("new", language)}
              </p>
            )}
            <h3 className='font-bold text-gray-900 text-2xl lg:text-5xl'>
              {language === "en" ? product?.nameEN : product?.nameAR}
            </h3>

            <div className='flex gap-2'>
              <span className='text-gray-500'>Category:</span>
              <span className='text-gray-800 font-bold'>{product?.category}</span>
            </div>

            {product?.category === "TV" && (
              <div className='flex gap-2'>
                <span className='text-gray-500'>Size:</span>
                <span className='text-gray-800 font-bold'>{product?.size}</span>
              </div>
            )}
            {language === "en"
              ? renderDescription(product?.descriptionEN || "")
              : renderDescription(product?.descriptionAR || "")}
            <Link
              target='_blank'
              href={`https://wa.me/${mobile}?text=${encodeURIComponent(
                `I'm interested in your product ${product?.nameEN} (${Number(
                  product?.price
                ).toFixed(2)}) ${product?.image}`
              )}`}
              className='flex p-4 text-white justify-center bg-gray-900 rounded-md shadow-sm hover:bg-indigo-700'
              style={{ background: "#25D366" }}
            >
              <div className='flex gap-3'>
                <Image src='/whatsapp.svg' alt="what's app logo" width={28} height={28} />
                <span className='text-xl'>{getTranslation("whatsapp", language)}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
