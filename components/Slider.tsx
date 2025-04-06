"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { Routes } from "@/lib/routes";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = ({ data }: any) => {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={2}
      pagination={{
        clickable: false,
      }}
      modules={[Navigation, Pagination]}
      className='mySwiper'
    >
      {data.map((slide: any) => (
        <SwiperSlide
          key={slide.id}
          className='odd:bg-indigo-100 even:bg-amber-100 rounded-2xl overflow-hidden'
        >
          <div className='flex w-full h-full justify-between items-center p-6'>
            <div className='flex flex-col gap-6'>
              <h3 className='font-light text-2xl'>{slide.nameEN}</h3>
              <Link
                className='px-6 py-2 bg-black rounded-full w-fit text-white'
                href={Routes.PRODUCT_DETAILS(slide.id)}
              >
                Get it now
              </Link>
            </div>
            <div className='flex items-end w-1/2 h-full'>
              <Image
                className='object-contain'
                src={slide.image}
                alt={slide.nameEN}
                width={300}
                height={300}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
