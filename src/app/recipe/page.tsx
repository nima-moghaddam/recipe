import RecipeCard from "@/components/RecipeCard";
import Search from "@/components/Search";
import WarningWrapper from "@/components/WarningWrapper";
import { getRecipies } from "@/services/getRecipies";
import { IQueryResponse } from "@/types/Query-Interface";
import { IRecipe } from "@/types/Recipe-Interface";
import GridWrapper from "@/components/GridWrapper";

export default async function Home({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const data: IQueryResponse = await getRecipies(searchParams.query);

  // Edamam api does not provide any ID in response object
  // so i derived it from its uri
  const recipies = data.hits.map((item) => ({
    ...item.recipe,
    id: item.recipe.uri?.split("_")[1],
  }));

  return (
    <section>
      <div className="mb-5">
        <Search />
      </div>
      <WarningWrapper message="No recipe found!" hasData={!!recipies?.length}>
        <GridWrapper>
          {recipies?.map((recipe: IRecipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </GridWrapper>
      </WarningWrapper>
    </section>
  );
}
