import React from "react";
import Containe from "@/components/core/Containe";
import ProductsList from "@/components/ProductsList";
import PageHeader from "@/components/core/PageHeader";
import Footer from "@/components/core/Footer";

const Products: React.FC = () => {
  return (
    <>
      <Containe>
        <div className='mx-auto sm:px-6 px-4 max-w-7xl'>
          <div className='flex flex-col'>
            <PageHeader pageTitle={"all_products"} />
            <ProductsList showLoadButton={true} />
          </div>
        </div>
      </Containe>
      <Footer />
    </>
  );
};

export default Products;
