import RecipeDetail from "@/container/recipe-detail";
import { uriPrefix } from "@/enmus/Api-Enum";
import { getRecipeDetail } from "@/services/getRecipeDetail";
import { IRecipe } from "@/types/Recipe-Interface";

export default async function RecipeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const uri = uriPrefix + params.id;
  const encodedUri = encodeURIComponent(uri);
  const data = await getRecipeDetail(encodedUri);
  const recipeDetail: IRecipe = {
    ...data.hits[0].recipe,
    id: data.hits[0].recipe.uri?.split("_")[1],
  };

  return (
    <section>
      <RecipeDetail recipe={recipeDetail} />
    </section>
  );
}
