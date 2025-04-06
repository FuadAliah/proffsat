import React from "react";
import { SpecialProducts, Contacts, Products } from "@/sections";
import Hero from "@/components/Hero";
import Footer from "@/components/core/Footer";

const Home: React.FC = () => {
  return (
    <main className='flex flex-col'>
      <Hero />
      <SpecialProducts />
      <Products />
      <Contacts />
      <Footer />
    </main>
  );
};

export default Home;
