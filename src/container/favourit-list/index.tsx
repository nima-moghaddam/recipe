"use client";
import GridWrapper from "@/components/GridWrapper";
import RecipeCard from "@/components/RecipeCard";
import WarningWrapper from "@/components/WarningWrapper";
import { IRootState } from "@/redux/store";
import { IRecipe } from "@/types/Recipe-Interface";
import React from "react";
import { useSelector } from "react-redux";
import NoFavouritFound from "./NoFavouritFound";

const FavouritsList = () => {
  const { favorList } = useSelector((state: IRootState) => state?.favourit);

  return (
    <WarningWrapper
      message="Your favourit list is empty!"
      hasData={!!favorList?.length}
      alertComponent={<NoFavouritFound />}
    >
      <GridWrapper>
        {favorList?.map((recipe: IRecipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </GridWrapper>
    </WarningWrapper>
  );
};

export default FavouritsList;
