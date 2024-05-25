"use client";
import GridWrapper from "@/components/GridWrapper";
import RecipeCard from "@/components/RecipeCard";
import WarningWrapper from "@/components/WarningWrapper";
import { IRootState } from "@/redux/store";
import { IRecipe } from "@/types/Recipe-Interface";
import React from "react";
import { useSelector } from "react-redux";

const Favourits = () => {
  const { favorList } = useSelector((state: IRootState) => state?.favourit);

  return (
    <section>
      <h1 className="mb-2">Favourits List:</h1>
      <WarningWrapper
        message="Your favourit list is empty!"
        hasData={!!favorList?.length}
      >
        <GridWrapper>
          {favorList?.map((recipe: IRecipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </GridWrapper>
      </WarningWrapper>
    </section>
  );
};

export default Favourits;
