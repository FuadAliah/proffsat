"use client";
import React from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { getTranslation } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const Contacts: React.FC = () => {
  const { language } = useLanguage();
  return (
    <section className='py-32 bg-white'>
      <div className='mx-auto sm:px-6 px-4 max-w-7xl'>
        <div className='flex flex-col lg:flex-row gap-6 items-start'>
          <div className='w-full lg:w-1/2'>
            <h2 className='text-3xl font-semibold text-gray-800'>
              {getTranslation("contact_us", language)}
            </h2>
            <p className='text-gray-600 mt-4'>
              We are here to help you with any questions you may have.
              <br />
              Please feel free to contact us.
            </p>
            <div className='flex flex-col gap-6 mt-8'>
              <div className='flex gap-2 items-center'>
                <Image src='/location.svg' alt='' width={24} height={24} />
                <span className='text-sm font-light'>{getTranslation("address", language)}</span>
              </div>
              <div className='flex gap-2 items-center'>
                <Image src='/phone.svg' alt='' width={24} height={24} />
                <span dir='ltr' className='text-sm font-light'>
                  +962 7 9504 7740
                </span>
              </div>
              <div className='flex gap-2 items-center'>
                <Image src='/mail.svg' alt='' width={24} height={24} />
                <Link href='mailto:info@domain.com' className='text-sm font-light hover:underline'>
                  info@domain.com
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
