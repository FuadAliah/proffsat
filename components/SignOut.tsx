"use client";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { Button } from "./ui";
import { useRouter } from "next/navigation";
import { Routes } from "@/lib/routes";
import { getTranslation } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";

const SignOut: React.FC = () => {
  const router = useRouter();
  const { language } = useLanguage();

  return (
    <Button
      className='!px-4 !py-2 text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700'
      onClick={async () => {
        await signOut(auth);
        router.push(Routes.HOME);
      }}
    >
      {getTranslation("sign_out", language)}
    </Button>
  );
};

export default SignOut;
