"use client";
import Button from "@/components/Button";
import Page404Svg from "@/ui/Page404Svg";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex h-[70vh] w-full flex-col items-center justify-center">
      <div className="mb-1">
        <Page404Svg />
      </div>
      <p className="mb-3 text-center font-bold text-primary">
        Your page does not exist ...
      </p>
      <div>
        <Button name="Back to Home" onClick={() => router.push("/")} />
      </div>
    </div>
  );
}
