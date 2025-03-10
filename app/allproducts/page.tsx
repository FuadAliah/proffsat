import React from "react";
import Containe from "@/components/core/Containe";
import ProductsList from "@/components/ProductsList";

const AllProducts: React.FC = () => {
  return (
    <Containe>
      <div className='mx-auto sm:px-6 px-4 max-w-7xl'>
        <div className='flex flex-col'>
          <h2 className='text-3xl font-bold'>All Products</h2>
          <ProductsList />
        </div>
      </div>
    </Containe>
  );
};

export default AllProducts;
