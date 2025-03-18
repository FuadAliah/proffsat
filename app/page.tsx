import React from "react";
import Hero from "@/components/Hero";
import Products from "@/sections/Products";
import Footer from "@/components/core/Footer";
import Contacts from "@/sections/Contacts";

const Home: React.FC = () => {
  return (
    <main className='flex flex-col'>
      <Hero />
      <Products />
      <Contacts />
      <Footer />
    </main>
  );
};

export default Home;
