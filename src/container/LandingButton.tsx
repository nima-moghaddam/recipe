"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";

const LandingButton = () => {
  const { push } = useRouter();

  return (
    <Button
      onClick={() => push("/recipe")}
      name="Explore Recipes"
      classes="py-3 px-5 rounded-lg"
    />
  );
};

export default LandingButton;
