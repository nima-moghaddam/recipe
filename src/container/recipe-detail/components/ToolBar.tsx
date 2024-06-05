"use client";
import IconButton from "@/components/IconButton";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavourit, addFavourit } from "@/redux/reducers/favouritSlice";
import { IRecipe } from "@/types/Recipe-Interface";
import SvgIcon from "@/components/SvgIcon";
import { IRootState } from "@/redux/store";
import { useParams } from "next/navigation";

interface IProps {
  recipe: IRecipe;
}

const ToolBar = ({ recipe }: IProps) => {
  const dispatch = useDispatch();
  const params = useParams<{ recipe: string; id: string }>();
  const recipeId = params.id;

  const { favorList } = useSelector((state: IRootState) => state?.favourit);

  const isFavourite = favorList?.some((item: IRecipe) => item.id === recipeId);

  const handleFavourite = () => {
    if (isFavourite) dispatch(removeFavourit(recipeId));
    else dispatch(addFavourit(recipe));
  };

  return (
    <div className="flex flex-wrap">
      <IconButton
        classes="mr-3"
        icon={
          <SvgIcon
            name={isFavourite ? "heart" : "outline-heart"}
            color="primary"
            width={25}
            height={25}
          />
        }
        onClick={handleFavourite}
      />
      <IconButton
        icon={<SvgIcon name="link" color="primary" width={25} height={25} />}
        onClick={() =>
          window.open(recipe?.shareAs || "https://www.edamam.com/")
        }
      />
    </div>
  );
};

export default ToolBar;
