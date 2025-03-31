"use client";
import React, { useState } from "react";
import { Input, Button } from "@/components/ui";
import useLoading from "@/hooks/useLoading";
import { auth } from "@/firebaseConfig";
import { useRouter } from "next/navigation";
import { Routes } from "@/lib/routes";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      router.push(Routes.HOME);
    } catch (error: any) {
      setErrorMessage(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='px-4 mx-auto w-7xl sm:px-6 lg:px-8'>
        <div className='relative max-w-md mx-auto mt-8 md:mt-16'>
          <div className='overflow-hidden relative bg-white rounded-md shadow-md'>
            {useLoading(loading)}
            <div className='px-4 py-6 sm:px-8 sm:py-7'>
              <div className='max-w-2xl mx-auto text-center mb-6'>
                <h2 className='text-3xl font-bold leading-tight text-black'>Login!</h2>
              </div>
              <form>
                <div className='space-y-5'>
                  <Input
                    name='email'
                    placeholder='Enter your email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <Input
                    name='password'
                    placeholder='Enter your Password'
                    type='email'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {errorMessage != "" && (
                  <span className='text-red-600 text-sm font-medium mb-2 w-full'>
                    {errorMessage}
                  </span>
                )}
                <Button
                  className='w-full bg-blue-500 hover:bg-blue-700  mt-4'
                  type='button'
                  onClick={() => handleLogin()}
                >
                  Login
                </Button>

                <Button
                  className='w-full bg-gray-200 hover:bg-gray-300 !text-gray-800 mt-4'
                  type='button'
                  text='Cancel'
                  onClick={() => router.push(Routes.HOME)}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoginPage;
