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
    return <div className="relative">{<CircleLoading />}</div>;
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedLayout;
