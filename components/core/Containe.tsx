import React from "react";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Containe = ({ children, className }: Props) => {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className={`w-full min-h-screen my-28 ${className}`}>{children}</div>
    </div>
  );
};

export default Containe;
