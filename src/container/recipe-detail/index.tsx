import { IRecipe } from "@/types/Recipe-Interface";
import TitleSection from "./TitleSection";

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
    yield: serving,
  } = recipe;

  return (
    <>
      <TitleSection recipe={recipe} />
    </>
  );
};

export default RecipeDetail;
