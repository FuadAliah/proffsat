import React from "react";
import Header from "@/components/core/Header";
import SideMenu from "@/components/core/SideMenu/SideMenu";
import ProtectedLayout from "@/utils/ProtectedLayout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="root">
      <Header />
      <SideMenu />
      <main className="relative min-h-screen w-[calc(100vw-240px)] ms-auto px-8 py-8 pt-28">
        <ProtectedLayout>{children}</ProtectedLayout>
      </main>
    </div>
  );
}
