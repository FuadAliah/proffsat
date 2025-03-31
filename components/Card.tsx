import React from "react";

type Props = {
  title: string;
  children?: React.ReactNode;
  add?: React.ReactNode;
};

const Card = ({ title, children, add }: Props) => {
  return (
    <div className='w-full h-fit bg-white rounded-md border border-gray-100'>
      {/* Header */}
      <div className='flex justify-between items-center rounded-t-md bg-neutral-100 border-b border-gray-100 p-4'>
        <h4 className='font-bold'>{title}</h4>
        <div className='fle'>{add}</div>
      </div>
      {/* Body */}
      <div className='w-full'>{children}</div>
    </div>
  );
};

export default Card;
