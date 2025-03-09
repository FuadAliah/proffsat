import Image from "next/image";
import Link from "next/link";
import { checkDate } from "@/utils/Date";
import { Routes } from "@/lib/routes";
import { ProductType } from "@/@interfaces/product";
import { useLanguage } from "@/context/LanguageContext";

const Product = ({ data }: { data: ProductType }) => {
  const { id, image, createdAt, nameEN, nameAR, price } = data;
  const { language } = useLanguage();

  return (
    <div className='relative'>
      <div className='overflow-hidden aspect-square rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300'>
        <a href={Routes.PRODUCT_DETAILS(id)}>
          <Image
            className='object-cover aspect-square overflow-hidden transition-all duration-600 hover:scale-125 w-full cursor-pointer'
            src={image}
            width={300}
            height={300}
            alt={nameEN}
          />
        </a>
      </div>

      <div className='absolute left-3 top-3'>
        {checkDate(createdAt) && (
          <p className='sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-red-500 rounded-full'>
            New
          </p>
        )}
      </div>
      <div className='flex justify-between gap-4 mt-4'>
        <a href={Routes.PRODUCT_DETAILS(id)} className=''>
          <h3 className='font-bold text-gray-900 text-sm md:text-base lg:text-lg'>
            {language === "en" ? nameEN : nameAR}
          </h3>
        </a>
        <span className='text-gray-800 font-bold text-sm md:text-base lg:text-lg'>
          JD {Number(price).toFixed(2)}
        </span>
      </div>

      <Link
        className='flex justify-center py-2.5 px-4 text-white rounded-lg bg-gray-800 hover:bg-gray-900 w-full mt-4'
        href={Routes.PRODUCT_DETAILS(id)}
      >
        View
      </Link>
    </div>
  );
};

export default Product;
