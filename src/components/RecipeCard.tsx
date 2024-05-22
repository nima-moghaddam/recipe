"use client";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavourit, addFavourit } from "@/redux/favouritSlice";
import { IRecipe } from "@/types/Recipe-Interface";
import InlineTextIcon from "./InlineTextIcon";
import Link from "next/link";
import SvgIcon from "./SvgIcon";
import ImageHandler from "./ImageHandler";

interface IRecipeCard {
  recipe: IRecipe;
}

const RecipeCard = ({ recipe }: IRecipeCard) => {
  const { image, images, label, id, calories, yield: serving } = recipe;

  const dispatch = useDispatch();
  const { favorList } = useSelector((state: any) => state?.favourit);

  const isFavourite = favorList?.some((item: IRecipe) => item.id === id);

  const handleFavourite = () => {
    if (isFavourite) dispatch(removeFavourit(id));
    else dispatch(addFavourit(recipe));
  };

  console.log(recipe);

  return (
    <div className="overflow-hidden rounded-2xl border shadow-lg">
      <div className="relative mb-2 pb-[50%]">
        <ImageHandler image={image} images={images} />
        <div className="absolute bottom-0 flex w-full flex-wrap items-center justify-around bg-white bg-opacity-70 py-2 backdrop-blur-0">
          <InlineTextIcon
            icon={<SvgIcon name="rank" color="secondary" />}
            text={Math.round(calories) + " Kcal"}
          />
          <InlineTextIcon
            icon={
              <SvgIcon
                name="circle-user"
                color="secondary"
                width={20}
                height={20}
              />
            }
            text={serving + " Serving"}
          />
        </div>
        <span
          className="absolute right-5 top-3 flex cursor-pointer items-center justify-center rounded-full bg-white bg-opacity-70 p-1 backdrop-blur-sm"
          onClick={handleFavourite}
        >
          <SvgIcon
            name={isFavourite ? "heart" : "outline-heart"}
            color="danger"
            width={25}
            height={25}
          />
        </span>
      </div>
      <div className="px-3 py-4">
        <p className="mb-1 line-clamp-1 text-xs font-semibold sm:text-xl">
          {label}
        </p>
        <Link
          className="underline-offset-3 text-primary text-xs underline hover:text-orange-400"
          href={`/recipe/${id}`}
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
