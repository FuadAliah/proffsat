import React from "react";
import { CircleLoading } from "@/components/ui";

const useLoading = (isLoading: boolean, background: string = "gray-50"): React.ReactNode => {
  if (isLoading) {
    return (
      <div
        className={`bg-${background} fixed z-30 inset-0 flex items-center justify-center min-h-screen`}
      >
        <CircleLoading />
      </div>
    );
  }
  return null;
};

export default useLoading;
