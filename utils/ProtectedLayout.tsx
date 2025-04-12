"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebaseConfig";
import { CircleLoading } from "@/components/ui";
import { Routes } from "@/lib/routes";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push(Routes.HOME);
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="bg-gray-50 fixed inset-0">
        <div className="w-screen h-screen">
          <CircleLoading />
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="bg-gray-50 fixed inset-0 w-screen h-screen flex justify-center items-center">
        <h3 className="text-gray-700">Redirecting...</h3>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedLayout;
