"use client";
import { IRecipe } from "@/types/RecipeInterface";
import FilledHeartSvg from "@/ui/FilledHeartSvg";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import OutlineHeartSvg from "@/ui/OutlineHeartSvg";

interface IRecipeCard {
  recipe: IRecipe;
}

const RecipeCard = ({ recipe }: IRecipeCard) => {
  const { image, title, summary, readyInMinutes } = recipe;
  const router = useRouter();

  return (
    <div className="border shadow-sm rounded overflow-hidden">
      <div className="relative h-0 pb-[50%]">
        <Image
          alt="image"
          src={image}
          layout="fill"
          objectFit="cover"
          sizes=""
        />
      </div>

      <div className="px-5">
        <p className="font-bold line-clamp-1 mb-3">{title}</p>
        <div className="mb-1 text-xs">
          cooking time {readyInMinutes} Minutes
        </div>
        <p className="font-light line-clamp-3 text-xs">{summary}</p>
      </div>
      <div className="flex justify-between items-center p-2">
        <Button name="Details" />
        <span className="w-5 h-5 cursor-pointer flex items-center">
          <FilledHeartSvg />
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
