"use client";
import IconButton from "@/components/IconButton";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavourit, addFavourit } from "@/redux/reducers/favouritSlice";
import { IRecipe } from "@/types/Recipe-Interface";
import { useRouter } from "next/navigation";
import SvgIcon from "@/components/SvgIcon";

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
          // router.push(recipe?.shareAs || "https://www.edamam.com/")
          window.open(recipe?.shareAs || "https://www.edamam.com/")
        }
      />
    </div>
  );
};

export default ToolBar;
