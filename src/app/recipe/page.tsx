import RecipeCard from "@/components/RecipeCard";
import Search from "@/components/Search";
import WarningWrapper from "@/components/WarningWrapper";
import { getRecipies } from "@/services/getRecipies";
import { IQueryResponse } from "@/types/Query-Interface";
import { IRecipe } from "@/types/Recipe-Interface";

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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-7">
          {recipies?.map((recipe: IRecipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </WarningWrapper>
    </section>
  );
}
