"use client";
import React, { useState } from "react";
import { Button, Input, Textarea } from "./ui";
import { getTranslation } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";
type Props = {};

const ContactForm = (props: Props) => {
  const { language } = useLanguage();
  const [user, setUser] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form className='flex flex-col gap-4' onSubmit={(e) => handleSubmit(e)}>
      <Input
        name='name'
        type='text'
        value={user.name}
        onChange={(e) => handleChange(e)}
        placeholder={getTranslation("name", language)}
        required
      />
      <Input
        name='phone'
        type='text'
        value={user.phone}
        onChange={(e) => handleChange(e)}
        placeholder={getTranslation("phone", language)}
        required
      />
      <Input
        name='email'
        type='email'
        value={user.email}
        onChange={(e) => handleChange(e)}
        placeholder={getTranslation("email", language)}
      />
      <Textarea
        name='message'
        value={user.message}
        onChange={(e) => handleChange(e)}
        placeholder={getTranslation("message", language)}
        required
        error=''
      />
      <Button className='flex w-32 !px-8 justify-center self-end' type='submit'>
        {getTranslation("send", language)}
      </Button>
    </form>
  );
};

export default ContactForm;
