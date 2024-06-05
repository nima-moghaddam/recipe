import { getRecipies } from "@/services/getRecipies";
import { IQueryResponse } from "@/types/Query-Interface";
import RecipeSearch from "@/container/recipe-search";

export default async function RecipeSearchPage({
  searchParams,
}: {
  searchParams: { query: string; page: number };
}) {
  const query = searchParams.query;
  const data: IQueryResponse = await getRecipies(query);

  // Edamam api does not provide any ID in response object
  // so i derived it from its uri
  const recipies = data.hits.map((item) => ({
    ...item.recipe,
    id: item.recipe.uri?.split("_")[1],
  }));

  return (
    <section>
      <RecipeSearch recipies={recipies} searchParams={searchParams} />
    </section>
  );
}
