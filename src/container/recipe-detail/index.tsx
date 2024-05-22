import { IRecipe } from "@/types/Recipe-Interface";
import TitleSection from "./TitleSection";
import ImageSection from "./ImageSection";
import TotalNutrients from "./TotalNutrients";
import HealthLabels from "./HealthLabels";

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
    totalNutrients,
    yield: serving,
  } = recipe;

  return (
    <>
      <TitleSection recipe={recipe} />
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <ImageSection image={image} images={images} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <TotalNutrients nutrients={totalNutrients} />
        </div>
        <div className="ol-span-12 md:col-span-6 lg:col-span-4">
          <HealthLabels />
        </div>
        <div className="col-span-12 bg-slate-400 lg:col-span-4">03</div>
        <div className="col-span-12 bg-red-500 lg:col-span-8">04</div>
      </div>
    </>
  );
};

export default RecipeDetail;
