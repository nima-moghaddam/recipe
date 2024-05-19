// ---------- edamam  -------------

interface Image {
  url: string;
  width: number;
  height: number;
}

interface INutrients {
  label: string;
  quantity: number;
  unit: string;
}

export interface IRecipe {
  id?: string;
  uri?: string;
  calories: number;
  image: string;
  label: string;
  ingredientLines: string[];
  totalTime: number;
  url: string;
  mealType: string[];
  totalWeight: number;
  yield: number;
  totalCO2Emissions: number;
  healthLabels: string[];
  shareAs?: string;
  cautions?: string[];
  source: string;

  digest: {
    daily: number;
    label: string;
    unit: string;
  }[];

  images: {
    THUMBNAIL?: Image;
    SMALL?: Image;
    REGULAR?: Image;
    LARGE?: Image;
  };

  totalNutrients: {
    ENERC_KCAL?: INutrients;
    FAT?: INutrients;
    FASAT?: INutrients;
    FATRN?: INutrients;
    FAMS?: INutrients;
    FAPU?: INutrients;
    CHOCDF?: INutrients;
    FIBTG?: INutrients;
    SUGAR?: INutrients;
  };

  ingredients: {
    text: string;
    quantity: number;
    measure?: string;
    food: string;
    weight: number;
    foodCategory: string;
    foodId: string;
    image?: string;
  }[];
}
