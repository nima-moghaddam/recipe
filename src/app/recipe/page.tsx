import RecipeCard from "@/components/RecipeCard";
import WarningWrapper from "@/components/WarningWrapper";
import { getRecipies } from "@/services/getRecipies";
import { IQueryResponse } from "@/types/QueryInterface";
import { IRecipe } from "@/types/RecipeInterface";

export default async function Home({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const data: IQueryResponse = await getRecipies(searchParams.query);

  const recipies = data.hits.map((item) => ({
    ...item.recipe,
    // Edamam api does not provide any ID in response object
    // so i derived it from its uri
    id: item.recipe.uri?.split("_")[1],
  }));

  return (
    <section>
      <WarningWrapper message="No recipe found!" hasData={!!recipies?.length}>
        <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {recipies?.map((recipe: IRecipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </WarningWrapper>
    </section>
  );
}
