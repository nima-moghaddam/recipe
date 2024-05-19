"use client";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavourit, addFavourit } from "@/redux/favouritSlice";
import { IRecipe } from "@/types/Recipe-Interface";
import InlineTextIcon from "./InlineTextIcon";
import Link from "next/link";
import SvgIcon from "./SvgIcon";

interface IRecipeCard {
  recipe: IRecipe;
}

const RecipeCard = ({ recipe }: IRecipeCard) => {
  const { image, label, id, calories, yield: serving } = recipe;

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
        <Image
          alt="image"
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="100vw"
        />
        <div className="absolute bottom-0 flex w-full flex-wrap items-center justify-around bg-white bg-opacity-70 py-2 backdrop-blur-0">
          <InlineTextIcon
            icon={<SvgIcon name="rank" color="green" />}
            text={Math.round(calories) + " Kcal"}
            // iconClass="mb-1"
          />
          <InlineTextIcon
            icon={<SvgIcon name="circle-user" color="green" width={20} height={20} />}
            text={serving + " Serving"}
          />
        </div>
        <span
          className="absolute right-5 top-3 flex cursor-pointer items-center justify-center rounded-full bg-white bg-opacity-50 p-1 backdrop-blur-sm hover:animate-pulse"
          onClick={handleFavourite}
        >
          {isFavourite ? (
            <SvgIcon name="heart" color="secondary" />
          ) : (
            <SvgIcon name="outline-heart" color="secondary" />
          )}
        </span>
      </div>
      <div className="px-3 py-4">
        <p className="mb-1 line-clamp-1 text-xs font-semibold sm:text-xl">
          {label}
        </p>
        <Link
          className="underline-offset-3 text-xs text-primary-normal underline hover:text-primary-dark"
          href={`/recipe/${id}`}
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
