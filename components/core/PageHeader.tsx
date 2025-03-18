"use client";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/utils/translations";
import React from "react";

type Props = {
  children?: React.ReactNode;
  pageTitle: string;
};

const PageHeader = ({ children, pageTitle }: Props) => {
  const { language } = useLanguage();

  return (
    <div className='flex justify-between items-center'>
      <h2 className='text-3xl font-extrabold'>{getTranslation(pageTitle, language)}</h2>
      <div className='flex'>{children}</div>
    </div>
  );
};

export default PageHeader;
