import Button from "@/components/Button";
import EmptyListSvg from "@/ui/EmptyListSvg";
import { useRouter } from "next/navigation";
import React from "react";

const NoFavouritFound = () => {
  const router = useRouter();

  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <div className="mb-3">
        <EmptyListSvg />
      </div>
      <div className="mb-2 font-bold text-primary text-center">
        You have no favourite items ...
      </div>
      <div>
        <Button name="Add more" size="lg" onClick={() => router.push("/recipe")} />
      </div>
    </div>
  );
};

export default NoFavouritFound;
