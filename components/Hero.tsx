import React from "react";
import Header from "./core/Header";

const Hero: React.FC = () => {
  return (
    <div className='bg-white h-screen'>
      <Header />
      <div className='relative h-[calc(100vh-80px)] mt-20'>
        <div className='h-full mx-auto max-w-2xl flex items-center justify-center'>
          <div className='text-center'>
            <h1 className='text-5xl font-semibold text-gray-900 sm:text-7xl'>
              Data to enrich your online business
            </h1>
            <p className='mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>
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
