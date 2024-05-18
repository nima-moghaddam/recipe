"use client";
import RecipeCard from "@/components/RecipeCard";
import WarningWrapper from "@/components/WarningWrapper";
import { IRecipe } from "@/types/Recipe-Interface";
import React from "react";
import { useSelector } from "react-redux";

const Favourits = () => {
  const { favorList } = useSelector((state: any) => state?.favourit);

  return (
    <section>
      <h1 className="mb-2">Favourits List:</h1>
      <WarningWrapper
        message="Your favourit list is empty!"
        hasData={!!favorList?.length}
      >
        <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {favorList?.map((recipe: IRecipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </WarningWrapper>
    </section>
  );
};

export default Favourits;
