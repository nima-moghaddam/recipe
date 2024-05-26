"use client";
import Button from "@/components/Button";
import ServerDownSvg from "@/ui/ServerDownSvg";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[70vh] w-full flex-col items-center justify-center">
      <div className="mb-1">
        <ServerDownSvg />
      </div>
      <p className="mb-3 text-center font-bold text-primary">
        We have encountered an error ...
      </p>
      <div>
        <Button name="Back to Home" onClick={() => router.push("/")} />
      </div>
    </div>
  );
}
