import React from "react";
import Header from "./core/Header";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div>
      <Header />
      <div className='relative insent-0'>
        <div className='absolute w-screen h-screen'>
          <Image
            src='/hero.png'
            alt='people watching tv'
            fill
            style={{ objectFit: "cover", zIndex: 0 }}
            priority
          />
        </div>
        <div className='relative h-screen mx-auto max-w-2xl flex items-center justify-center'>
          <div className='text-center text-white'>
            <h1 className='text-5xl font-semibold text-white sm:text-7xl'>
              Data to enrich your online business
            </h1>
            <p className='mt-8 text-lg font-light text-gray-300 sm:text-xl/8'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
              commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
