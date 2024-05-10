import { IRecipe } from "@/types/RecipeInterface";
import Image from "next/image";
import React from "react";

const RecipeCard = ({ title, image }: IRecipe) => {
  return (
    <div className="border shadow-sm rounded overflow-hidden">
      <div className="relative h-0 pb-[50%]">
        <Image alt="image" src={image} layout="fill" objectFit="cover" sizes="" />
      </div>

      <div className="p-5">
        <p className="font-bold line-clamp-1">{title}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
