import { IRecipe } from "@/types/Recipe-Interface";
import TitleSection from "./TitleSection";

interface IRecipeDetail {
  data: IRecipe;
}

const RecipeDetail = ({ data }: IRecipeDetail) => {
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
  } = data;

  return (
    <>
    <TitleSection data={data} />
    </>
  );
};

export default RecipeDetail;
