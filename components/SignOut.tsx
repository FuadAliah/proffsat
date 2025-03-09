"use client";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { Button } from "./ui";
import { useRouter } from "next/navigation";
import { Routes } from "@/lib/routes";

const SignOut: React.FC = () => {
  const router = useRouter();

  return (
    <Button
      text='Logout'
      className='!px-4 !py-2 text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700'
      onClick={async () => {
        await signOut(auth);
        router.push(Routes.HOME);
      }}
    />
  );
};

export default SignOut;
