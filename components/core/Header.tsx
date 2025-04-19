"use client";
import Nav from "./Nav";
import { Routes } from "@/lib/routes";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsScrolled(scrollPosition > windowHeight || pathname !== "/");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={`${
        isScrolled ? "bg-gray-900 py-3 px-4" : "bg-transparent py-3"
      } fixed z-40 w-full transition-all duration-300 ease-in-out px-4`}
    >
      <nav
        aria-label="Global"
        className="w-full flex items-center justify-between"
      >
        <div className="flex w-56 items-center">
          <a href={Routes.HOME} className="flex flex-1 items-center">
            <Image
              alt=""
              src="/logo.svg"
              className="h-8 min-w-10 w-auto"
              width={40}
              height={40}
            />
          </a>
        </div>
        <Nav isScrolled={isScrolled} />
      </nav>
    </header>
  );
};

export default Header;
