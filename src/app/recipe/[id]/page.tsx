import { uriPrefix } from "@/enmus/ApiEnum";
import { getRecipeDetail } from "@/services/getRecipeDetail";
import { IRecipe } from "@/types/RecipeInterface";
import Image from "next/image";

export default async function RecipeDetail({
  params,
}: {
  params: { id: string };
}) {
  const uri = uriPrefix + params.id;
  const encodedUri = encodeURIComponent(uri);
  const data = await getRecipeDetail(encodedUri);

  const recipeDetail: IRecipe = data.hits[0].recipe;

  const {
    image,
    ingredientLines,
    label,
    totalTime,
    totalWeight,
    calories,
    mealType,
  } = recipeDetail;

  return (
    <section>
      <h1 className="mb-3">Recipe Detail</h1>
      <div className="border shadow-sm p-5 flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 relative mr-0 mb-2 md:mr-4 md:mb-0">
          <div className="relative h-40 md:h-full">
            <Image
              alt="image"
              src={image}
              layout="fill"
              objectFit="cover"
              sizes=""
              className="rounded"
            />
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <p className="font-bold mb-3">{label}</p>

          <div className="mb-1 font-bold text-xs">Weight {totalWeight} kg</div>
          <div className="mb-1 text-xs text-red-300">
            - cooking time {totalTime} Minutes
          </div>
          <div className="mb-1 text-xs text-red-300">
            - this food has {calories} calories
          </div>

          {!!ingredientLines?.length && (
            <div className="mb-2">
              <h3 className="mb-1">Ingredient types:</h3>
              <div className="flex flex-wrap gap-3">
                {ingredientLines.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-blue-300 px-2 rounded text-white"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          )}

          {!!mealType?.length && (
            <div className="mb-2">
              <h3 className="mb-1">Meal types:</h3>
              <div className="flex flex-wrap gap-3">
                {mealType.map((meal, index) => (
                  <span
                    key={index}
                    className="bg-green-300 px-2 rounded text-white"
                  >
                    {meal}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
