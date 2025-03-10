import React from "react";
import Image from "next/image";

const DefualtImage: React.FC = () => {
  return (
    <div className='flex w-md h-md justify-center items-center'>
      <Image src='/default.svg' alt='defualt' priority={true} width={200} height={200} />
    </div>
  );
};

export default DefualtImage;
