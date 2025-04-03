"use client";
import React, { useState } from "react";
import { Button, Input, Textarea } from "./ui";
import { getTranslation } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";
import { addDocument } from "@/lib/http";
import { MessageType } from "@/@interfaces/messages";

type UserProps = {
  name: string;
  email: string;
  phone: string;
  message: string;
  readed: boolean;
  createdAt: string;
};

const ContactForm = () => {
  const { language } = useLanguage();
  const [user, setUser] = useState<Omit<UserProps, "id" | "createdAt">>({
    name: "",
    email: "",
    phone: "",
    message: "",
    readed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDocument("messages", { ...user, createdAt: new Date().toISOString() });
    } catch (error) {
      console.log(user);
    } finally {
      setUser({
        name: "",
        email: "",
        phone: "",
        message: "",
        readed: false,
      });
    }
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
