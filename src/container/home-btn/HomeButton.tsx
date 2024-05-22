"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";

const HomeButton = () => {
  const { push } = useRouter();

  return (
    <Button
      onClick={() => push("/recipe?query=general")}
      name="Explore Recipes"
      classes="py-3 px-5 rounded-lg"
    />
  );
};

export default HomeButton;