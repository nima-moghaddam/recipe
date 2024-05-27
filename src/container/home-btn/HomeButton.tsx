"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";

const HomeButton = () => {
  const { push } = useRouter();

  return (
    <Button
      onClick={() => push("/recipe")}
      name="Explore Recipes"
    />
  );
};

export default HomeButton;
