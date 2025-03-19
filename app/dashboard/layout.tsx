"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/core/Header";
import SideMenu from "@/components/core/SideMenu/SideMenu";
import initializeFirebase from "@/firebaseConfig";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [firebase, setFirebase] = useState(null);

  useEffect(() => {
    initializeFirebase().then((firebase) => {
      setFirebase(firebase);
    });
  }, []);

  if (!firebase) {
    return <div>Loading...</div>;
  }

  return (
    <div className='root'>
      <Header />
      <SideMenu />
      <main className='relative min-h-screen w-[calc(100vw-240px)] ms-auto px-8 py-8 pt-28'>
        {children}
      </main>
    </div>
  );
}
