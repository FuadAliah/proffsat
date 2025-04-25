"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { Routes } from "@/lib/routes";
import { useLanguage } from "@/context/LanguageContext";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getTranslation } from "@/utils/translations";
import { useEffect, useState } from "react";

const Slider = ({ data }: any) => {
  const { language } = useLanguage();
  const [direction, setDirection] = useState("rtl");

  useEffect(() => {
    if (language === "ar") {
      setDirection("rtl");
    } else {
      setDirection("ltr");
    }
  }, [language]);

  return (
    <Swiper
      dir={direction}
      spaceBetween={40}
      slidesPerView={2}
      pagination={{
        clickable: false,
      }}
      modules={[Navigation, Pagination]}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
      className="mySwiper"
    >
      {data.map((slide: any) => (
        <SwiperSlide
          key={slide.id}
          className="odd:bg-indigo-100 even:bg-orange-100 rounded-2xl overflow-hidden"
        >
          <div className="flex w-full h-full justify-between items-center p-6">
            <div className="flex flex-col gap-6">
              <h3 className="font-light text-2xl">{slide.nameEN}</h3>
              <Link
                className="px-6 py-2 bg-black rounded-full w-fit text-white"
                href={Routes.PRODUCT_DETAILS(slide.id)}
              >
                {getTranslation("get_now", language)}
              </Link>
            </div>
            <div className="flex items-end w-1/2 h-full">
              <Image
                className="object-contain"
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
