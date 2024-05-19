"use client";
import IconButton from "@/components/IconButton";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavourit, addFavourit } from "@/redux/favouritSlice";
import { IRecipe } from "@/types/Recipe-Interface";
import { useRouter } from "next/navigation";

interface IProps {
  recipe: IRecipe;
}

const ToolBar = ({ recipe }: IProps) => {
  const router = useRouter();

  const dispatch = useDispatch();
  const { favorList } = useSelector((state: any) => state?.favourit);
  const isFavourite = favorList?.some((item: IRecipe) => item.id === recipe.id);

  const handleFavourite = () => {
    if (isFavourite) dispatch(removeFavourit(recipe.id));
    else dispatch(addFavourit(recipe));
  };

  return (
    <div className="flex flex-wrap">
      <IconButton
        classes="mr-3"
        icon={isFavourite ? "heart" : "outline-heart"}
        onClick={handleFavourite}
      />
      <IconButton
        icon={"link"}
        onClick={() => router.push(recipe?.shareAs || "/")}
      />
    </div>
  );
};

export default ToolBar;
