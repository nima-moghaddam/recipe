"use client";
import FilledHeartSvg from "@/ui/FilledHeartSvg";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import OutlineHeartSvg from "@/ui/OutlineHeartSvg";
import { useDispatch, useSelector } from "react-redux";
import { removeFavourit, addFavourit } from "@/redux/favouritSlice";
import { IRecipe } from "@/types/Recipe-Interface";
import InlineTextIcon from "./InlineTextIcon";
import UserSvg from "@/ui/UserSvg";
import RankSvg from "@/ui/RankSvg";
import CircleUser from "@/ui/CircleUser";
import Link from "next/link";

interface IRecipeCard {
  recipe: IRecipe;
}

const RecipeCard = ({ recipe }: IRecipeCard) => {
  const { image, label, id, calories, yield: serving } = recipe;
  const router = useRouter();

  console.log(recipe);

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
            icon={<RankSvg />}
            text={Math.round(calories) + " Kcal"}
            iconClass="mb-1"
          />
          <InlineTextIcon icon={<CircleUser />} text={serving + " Serving"} />
        </div>
        <span
          className="absolute right-5 top-3 cursor-pointer bg-white flex items-center rounded-full justify-center p-1 bg-opacity-50 backdrop-blur-sm"
          onClick={handleFavourite}
        >
          {isFavourite ? <FilledHeartSvg /> : <OutlineHeartSvg />}
        </span>
      </div>
      <div className="px-3 py-4">
        <p className="mb-1 line-clamp-1 text-xs font-semibold sm:text-xl">
          {label}
        </p>
        <Link
          className="underline-offset-3 text-xs text-primary-normal underline"
          href={`/recipe/${id}`}
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
