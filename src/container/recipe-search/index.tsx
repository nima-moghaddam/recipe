import GridWrapper from "@/components/GridWrapper";
import RecipeCard from "@/components/RecipeCard";
import WarningWrapper from "@/components/WarningWrapper";
import { IRecipe } from "@/types/Recipe-Interface";
import React from "react";
import Search from "./Search";
import Pagination from "@/components/Pagination";
import NoRecipeFound from "./NoRecipeFound";
import { paginateHandler } from "@/utils/functions/paginateHandler";

interface IProps {
  recipies: IRecipe[];
  searchParams: { query: string; page: number };
}

const RecipeSearch = ({ recipies, searchParams }: IProps) => {
  const page = Number(searchParams.page);
  const dataPerPage = 8;

  const currentRecipes = paginateHandler<IRecipe>({
    dataPerPage,
    page,
    list: recipies,
  });

  return (
    <>
      <div className="mb-5">
        <Search />
      </div>
      <WarningWrapper
        alertComponent={<NoRecipeFound />}
        hasData={!!searchParams.query}
      >
        <GridWrapper classes="mb-5">
          {currentRecipes?.map((recipe: IRecipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </GridWrapper>
        <Pagination
          dataPerPage={8}
          totalData={recipies.length}
          currentPage={page}
          urlPath={`/recipe?query=${searchParams.query}`}
        />
      </WarningWrapper>
    </>
  );
};

export default RecipeSearch;
