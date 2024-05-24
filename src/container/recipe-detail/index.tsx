import { IRecipe } from "@/types/Recipe-Interface";
import TitleSection from "./TitleSection";
import ImageSection from "./ImageSection";
import TotalNutrients from "./TotalNutrients";
import HealthLabels from "./HealthLabels";
import Ingredients from "./Ingredients";
import CookingDetail from "./CookingDetail";
import DigestChart from "./DigestChart";

interface IRecipeDetail {
  recipe: IRecipe;
}

const RecipeDetail = ({ recipe }: IRecipeDetail) => {
  const {
    image,
    totalNutrients,
    images,
    ingredients,
    ingredientLines,
    cautions,
    mealType,
    cuisineType,
    digest,
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
        <div className="col-span-12 lg:col-span-4">
          <HealthLabels recipe={recipe} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-8">
          <Ingredients ingredients={ingredients} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <CookingDetail
            detailList={ingredientLines}
            cautions={cautions}
            mealTypes={[...mealType, ...cuisineType]}
          />
        </div>
        <div className="col-span-12">
          <DigestChart digests={digest} />
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
