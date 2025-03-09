"use client";
import { usePathname } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import Nav from "./Nav";
import Link from "next/link";
import { auth } from "@/firebaseConfig";
import { Routes } from "@/lib/routes";

const Header = () => {
  const [user] = useAuthState(auth);
  const pathname = usePathname();

  return (
    <header className='fixed z-40 w-full p-4 bg-white shadow-xs'>
      <nav aria-label='Global' className='w-full flex items-center justify-between'>
        <div className='flex gap-28 items-center'>
          <a href={Routes.HOME} className='flex flex-1 items-center'>
            <img
              alt=''
              src='https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
              className='h-8 min-w-10 w-auto'
            />
          </a>
          <ul className='text-indigo-600 text-sm'>
            {user && (
              <li
                className={`hover:text-indigo-600 rounded-sm ${
                  pathname.includes("dashboard") ? "bg-indigo-50 text-indigo-600" : ""
                }`}
              >
                <Link className='flex py-2 px-3' href='/dashboard/products'>
                  Admin
                </Link>
              </li>
            )}
          </ul>
        </div>
        <Nav />
      </nav>
    </header>
  );
};

export default Header;
