"use client";
import React, { useState } from "react";
import { Button, Input, Textarea } from "./ui";
import { getTranslation } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";
import { addDocument } from "@/lib/http";

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

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
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
      setLoading(false);
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
      <Button className='flex gap-4 justify-center items-center self-end' type='submit'>
        {loading && <span className='loader'></span>}
        <span>{getTranslation("send", language)}</span>
      </Button>
    </form>
  );
};

export default ContactForm;
