import Nav from "./Nav";
import { Routes } from "@/lib/routes";
import Image from "next/image";

const Header = () => {
  return (
    <header className='fixed z-40 w-full p-4 bg-white shadow-xs'>
      <nav aria-label='Global' className='w-full flex items-center justify-between'>
        <div className='flex w-56 items-center'>
          <a href={Routes.HOME} className='flex flex-1 items-center'>
            <Image alt='' src='/logo.svg' className='h-8 min-w-10 w-auto' width={40} height={40} />
          </a>
        </div>
        <Nav />
      </nav>
    </header>
  );
};

export default Header;
