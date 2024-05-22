import { IRecipe } from "@/types/Recipe-Interface";
import TitleSection from "./TitleSection";
import ImageSection from "./ImageSection";

interface IRecipeDetail {
  recipe: IRecipe;
}

const RecipeDetail = ({ recipe }: IRecipeDetail) => {
  const {
    image,
    ingredientLines,
    label,
    digest,
    shareAs,
    totalWeight,
    calories,
    mealType,
    source,
    images,
    yield: serving,
  } = recipe;

  return (
    <>
      <TitleSection recipe={recipe} />
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <ImageSection image={image} images={images} />
        </div>
        <div className="col-span-12 bg-red-500 sm:col-span-6  lg:col-span-8">
          01
        </div>
        <div className="col-start-1 col-end-13 bg-blue-500 lg:col-end-9">
          02
        </div>
        <div className="col-span-12 bg-slate-400 lg:col-span-4">03</div>
        <div className="col-span-12 bg-red-500 lg:col-span-8">04</div>
      </div>
    </>
  );
};

export default RecipeDetail;
