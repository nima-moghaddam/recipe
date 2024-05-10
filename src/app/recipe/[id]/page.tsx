import { getRecipeDetail } from "@/services/getRecipeDetail";
import { IRecipe } from "@/types/RecipeInterface";
import Image from "next/image";

export default async function RecipeDetail({
  params,
}: {
  params: { id: string };
}) {
  const recipeDetail: IRecipe = await getRecipeDetail(params.id);

  const {
    image,
    title,
    summary,
    readyInMinutes,
    dishTypes,
    vegan,
    veryPopular,
    pricePerServing,
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
          <p className="font-bold mb-3">{title}</p>

          <div className="mb-1 font-bold text-xs">Price {pricePerServing}$</div>
          <div className="mb-1 text-xs">
            cooking time {readyInMinutes} Minutes
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: summary }}
            className="font-light text-xs mb-2"
          />

          {!!dishTypes?.length && (
            <div className="mb-2">
              <h3 className="mb-1">Dish types:</h3>
              <div className="flex flex-wrap gap-3">
                {dishTypes.map((type, index) => (
                  <span
                    key={index}
                    className="bg-slate-400 px-2 rounded text-white"
                  >
                    {type}
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
