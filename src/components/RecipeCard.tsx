"use client";
import { IRecipe } from "@/types/Recipe-Interface";
import FilledHeartSvg from "@/ui/FilledHeartSvg";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import OutlineHeartSvg from "@/ui/OutlineHeartSvg";
import { useDispatch, useSelector } from "react-redux";
import { removeFavourit, addFavourit } from "@/redux/favouritSlice";

interface IRecipeCard {
  recipe: IRecipe;
}

const RecipeCard = ({ recipe }: IRecipeCard) => {
  const { image, label, id, calories, yield: serving } = recipe;
  const router = useRouter();

  const dispatch = useDispatch();
  const { favorList } = useSelector((state: any) => state?.favourit);

  const handleDetail = () => {
    router.push(`/recipe/${id}`);
  };

  const isFavourite = favorList?.some((item: IRecipe) => item.id === id);

  const handleFavourite = () => {
    if (isFavourite) dispatch(removeFavourit(id));
    else dispatch(addFavourit(recipe));
  };

  return (
    <div className="border shadow-sm rounded overflow-hidden">
      <div className="relative mb-2 h-0 pb-[50%]">
        <Image
          alt="image"
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="100vw"
        />
      </div>

      <div className="px-5">
        <p className="font-semibold line-clamp-1 mb-1 text-center">{label}</p>
        <div className="text-center">
          <span className="font-bold mr-1">{Math.round(calories)}</span>
          <span className="text-sm">kcal</span>
        </div>
        <div className="mb-1 text-xs line-clamp-1 text-center">
          {serving} Serving
        </div>
      </div>
      <div className="flex justify-between items-center p-2">
        <Button name="Details" onClick={handleDetail} />
        <span
          className="w-5 h-5 cursor-pointer flex items-center"
          onClick={handleFavourite}
        >
          {isFavourite ? <FilledHeartSvg /> : <OutlineHeartSvg />}
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
