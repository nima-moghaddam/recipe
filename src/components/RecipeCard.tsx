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
  const { image, title, summary, readyInMinutes, id } = recipe;
  const router = useRouter();

  const handleDetail = () => {
    router.push(`/recipe/${id}`);
  };

  return (
    <div className="border shadow-sm rounded overflow-hidden">
      <div className="relative mb-1 h-0 pb-[50%]">
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
        <p
          dangerouslySetInnerHTML={{ __html: summary }}
          className="font-light text-xs mb-2 line-clamp-3"
        />
      </div>
      <div className="flex justify-between items-center p-2">
        <Button name="Details" onClick={handleDetail} />
        <span className="w-5 h-5 cursor-pointer flex items-center">
          <FilledHeartSvg />
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
