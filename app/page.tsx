import React from "react";
import Hero from "@/components/Hero";
import Products from "@/sections/Products";
import Footer from "@/components/core/Footer";

const Home: React.FC = () => {
  return (
    <main className='flex flex-col'>
      <Hero />
      <Products />
      <Footer />
    </main>
  );
};

export default Home;
