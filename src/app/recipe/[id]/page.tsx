import Badge from "@/components/Badge";
import { uriPrefix } from "@/enmus/Api-Enum";
import { getRecipeDetail } from "@/services/getRecipeDetail";
import { IRecipe } from "@/types/Recipe-Interface";
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
    digest,
    totalWeight,
    calories,
    mealType,
    yield: serving,
  } = recipeDetail;

  return (
    <section>
      <h1 className="mb-3">Recipe Detail</h1>
      <div className="border shadow-sm p-5 flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 relative mr-0 mb-2 md:mr-4 md:mb-0">
          <div className="relative h-52 md:h-full">
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

          <div className="mb-1 text-xs text-red-300">
            - weight{" "}
            <span className="font-bold">{Math.round(totalWeight)}</span> kg
          </div>
          <div className="mb-1 text-xs text-red-300">
            - Serving <span className="font-bold">{serving}</span> in total
          </div>
          <div className="mb-1 text-xs text-red-300">
            - this food has{" "}
            <span className="font-bold">{Math.round(calories)}</span> Kcal
          </div>

          {!!ingredientLines?.length && (
            <div className="mb-2">
              <h3 className="mb-1">Ingredient types:</h3>
              <div className="flex flex-wrap gap-3">
                {ingredientLines.splice(0,8).map((ingredient, index) => (
                  <Badge key={index} name={ingredient} />
                ))}
              </div>
            </div>
          )}

          {!!mealType?.length && (
            <div className="mb-2">
              <h3 className="mb-1">Meal types:</h3>
              <div className="flex flex-wrap gap-3">
                {mealType.map((meal, index) => (
                  <Badge key={index} name={meal} color="green" />
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="mb-1">Nutritions:</h3>
            <ul className="flex flex-col">
              {digest?.splice(0, 5).map((item) => (
                <li
                  key={item.label}
                  className="flex justify-between text-[0.8rem] w-full md:w-1/4"
                >
                  <span className="mr-5">- {item.label}</span>
                  <div>
                    <span className="font-bold mr-[0.7px]">
                      {Math.round(item.daily)}
                    </span>
                    <span>{item.unit}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
