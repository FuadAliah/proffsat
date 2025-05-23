"use client";
import { usePathname, useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebaseConfig";
import SignOut from "../SignOut";
import { Button } from "../ui";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/utils/translations";
import { Routes } from "@/lib/routes";
import Image from "next/image";
import NotificationBadge from "../NotificationBadge";

export const getActiveClass = (route: string, pathname: string) => {
  return pathname === route ? "text-lime-600" : "";
};

export interface languageProps {
  language: string;
  changeLanguage: (lang: string) => void;
}

const Nav = ({ isScrolled }: { isScrolled: boolean }) => {
  const pathname = usePathname();
  const [user] = useAuthState(auth);
  const { language, changeLanguage }: languageProps = useLanguage();

  const router = useRouter();

  const linkColor = (route: string, pathname: string): string => {
    return pathname !== route && !isScrolled ? "!text-gray-500" : "!text-white";
  };

  return (
    <div className={`flex gap-20 items-center`}>
      <ul
        className={`flex gap-8 ${linkColor("/", pathname)} ${
          isScrolled ? "text-white" : ""
        } text-sm h-full`}
      >
        {user && (
          <li
            className={`hover:text-gray-400 rounded-sm ${
              pathname.includes("dashboard") ? "text-lime-600" : ""
            }`}
          >
            <Link className="flex py-2 px-3" href="/dashboard/products">
              Admin
            </Link>
          </li>
        )}
        <li
          className={`hover:text-gray-400 rounded-sm ${getActiveClass(
            "/",
            pathname
          )}`}
        >
          <Link className="flex py-2 px-3" href={Routes.HOME}>
            {getTranslation("home", language)}
          </Link>
        </li>
        <li
          className={`hover:text-gray-400 rounded-sm ${getActiveClass(
            "/products",
            pathname
          )}`}
        >
          <Link className="flex py-2 px-3" href={Routes.ALL_PRODUCTS}>
            {getTranslation("products", language)}
          </Link>
        </li>
      </ul>
      <div className="flex gap-6">
        {user && (
          <Button
            className="relative !px-2 !py-1 !bg-transparent font-bold text-sm !hover:bg-gray-100"
            onClick={() => router.push(Routes.MESSAGES)}
          >
            <NotificationBadge />
            <Image
              src="/chat.svg"
              alt=""
              width={24}
              height={24}
              className="mix-blend-lighten"
            />
          </Button>
        )}
        <Button
          className={`!px-2 !py-1 !bg-transparent ${linkColor(
            "/",
            pathname
          )} font-bold text-sm`}
          onClick={() => changeLanguage(language === "en" ? "ar" : "en")}
        >
          {getTranslation("ar", language)}
        </Button>
        {!user ? (
          <Link
            href={Routes.LOGIN}
            className="px-4 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700"
          >
            {getTranslation("login", language)}
          </Link>
        ) : (
          <SignOut />
        )}
      </div>
    </div>
  );
};

export default Nav;
