import GridWrapper from "@/components/GridWrapper";
import RecipeCard from "@/components/RecipeCard";
import WarningWrapper from "@/components/WarningWrapper";
import { IRecipe } from "@/types/Recipe-Interface";
import React from "react";
import Search from "./Search";
import LoadMore from "./LoadMore";
import Pagination from "@/components/Pagination";

interface IProps {
  recipies: IRecipe[];
  searchParams: { query: string; page: number };
}

const RecipeSearch = ({ recipies, searchParams }: IProps) => {
  const mockRecipe = [...recipies];
  const page = Number(searchParams.page);
  const currentRecipes = mockRecipe.splice(0, page === 1 ? 8 : 7 + page);
  const hasAllItemsFetched = currentRecipes.length === recipies.length;

  return (
    <>
      <div className="mb-5">
        <Search />
      </div>
      <WarningWrapper message="No recipe found!" hasData={!!recipies?.length}>
        <GridWrapper>
          {currentRecipes?.map((recipe: IRecipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </GridWrapper>
        <Pagination dataPerPage={8} totalData={recipies.length} />
        {/* <LoadMore
          searchParams={{ page, query: searchParams.query }}
          showBtn={!hasAllItemsFetched}
        /> */}
      </WarningWrapper>
    </>
  );
};

export default RecipeSearch;
