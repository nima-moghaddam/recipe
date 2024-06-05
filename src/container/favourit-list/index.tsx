"use client";
import GridWrapper from "@/components/GridWrapper";
import RecipeCard from "@/components/RecipeCard";
import WarningWrapper from "@/components/WarningWrapper";
import { IRootState } from "@/redux/store";
import { IRecipe } from "@/types/Recipe-Interface";
import React from "react";
import { useSelector } from "react-redux";
import NoFavouritFound from "./NoFavouritFound";
import Pagination from "@/components/Pagination";
import { paginateHandler } from "@/utils/functions/paginateHandler";

interface IProps {
  page: number;
}

const FavouritsList = ({ page }: IProps) => {
  const dataPerPage = 8;

  const { favorList } = useSelector((state: IRootState) => state?.favourit);

  const currentFavourites = paginateHandler<IRecipe>({
    dataPerPage,
    page,
    list: favorList,
  });

  return (
    <WarningWrapper
      hasData={!!favorList?.length}
      alertComponent={<NoFavouritFound />}
    >
      <GridWrapper>
        {currentFavourites?.map((recipe: IRecipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </GridWrapper>
      <Pagination
        dataPerPage={8}
        totalData={favorList.length}
        currentPage={page}
        urlPath={`/favourits?`}
      />
    </WarningWrapper>
  );
};

export default FavouritsList;
