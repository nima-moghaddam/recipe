"use client";
import Button from "@/components/Button";
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
    <div className="w-full h-full p-5 mt-20 flex flex-col items-center justify-center">
      <h2 className="mb-4">We have encountered an error!</h2>
      <div className="flex items-center">
        <Button
          name="Back to Homepage"
          onClick={() => router.push("/")}
          classes="mr-2"
        />
        <Button name="Retry" onClick={() => reset()} color="danger" />
      </div>
    </div>
  );
}
