// ---------- edamam  -------------

interface ImageData {
  url: string;
  width: number;
  height: number;
}

export interface Images {
  THUMBNAIL?: ImageData;
  SMALL?: ImageData;
  REGULAR?: ImageData;
  LARGE?: ImageData;
}

export interface Images {
  THUMBNAIL?: ImageData;
  SMALL?: ImageData;
  REGULAR?: ImageData;
  LARGE?: ImageData;
}

export interface INutrients {
  label: string;
  quantity: number;
  unit: string;
}

export interface ITotalNutrients {
  ENERC_KCAL?: INutrients;
  FAT?: INutrients;
  FASAT?: INutrients;
  FATRN?: INutrients;
  FAMS?: INutrients;
  FAPU?: INutrients;
  CHOCDF?: INutrients;
  FIBTG?: INutrients;
  SUGAR?: INutrients;
}

export interface ISubDigest {
  label: string;
  tag: string;
  schemaOrgTag?: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
}
export interface IDigest {
  label: string;
  tag: string;
  schemaOrgTag?: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
  sub?: ISubDigest[];
}

export interface IngredientsFormat {
  text: string;
  quantity: number;
  measure?: string;
  food: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image?: string;
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
  images: Images;
  totalNutrients: ITotalNutrients;
  ingredients: IngredientsFormat[];
  cuisineType: string[];
  digest: IDigest[];
}
