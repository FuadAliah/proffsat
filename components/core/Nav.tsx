"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebaseConfig";
import SignOut from "../SignOut";
import { Button } from "../ui";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/utils/translations";
import { Routes } from "@/lib/routes";

export const getActiveClass = (route: string, pathname: string) =>
  pathname === route ? "bg-indigo-50 text-indigo-600" : "";

export interface languageProps {
  language: string;
  changeLanguage: (lang: string) => void;
}

const Nav = () => {
  const pathname = usePathname();
  const [user] = useAuthState(auth);
  const { language, changeLanguage }: languageProps = useLanguage();

  return (
    <div className='flex gap-20 items-center'>
      <ul className='flex gap-4 text-gray-600 text-sm h-full'>
        <li className={`hover:text-indigo-600 rounded-sm ${getActiveClass("/", pathname)}`}>
          <Link className='flex py-2 px-3' href={Routes.HOME}>
            {getTranslation("Home", language)}
          </Link>
        </li>
        <li
          className={`hover:text-indigo-600 rounded-sm ${getActiveClass("/allproducts", pathname)}`}
        >
          <Link className='flex py-2 px-3' href={Routes.ALL_PRODUCTS}>
            Products
          </Link>
        </li>
        <li
          className={`hover:text-indigo-600 rounded-sm ${getActiveClass("/contactus", pathname)}`}
        >
          <Link className='flex py-2 px-3' href={Routes.ALL_PRODUCTS}>
            Contact us
          </Link>
        </li>
      </ul>
      <div className='flex gap-4'>
        <Button
          className='!px-2 !py-1 !bg-white !text-gray-500 font-bold text-sm border border-gray-100 !hover:bg-gray-100'
          onClick={() => changeLanguage(language === "en" ? "ar" : "en")}
        >
          {getTranslation("ar", language)}
        </Button>
        {!user ? (
          <Link
            href={Routes.LOGIN}
            className='px-4 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700'
          >
            Login
          </Link>
        ) : (
          <SignOut />
        )}
      </div>
    </div>
  );
};

export default Nav;
