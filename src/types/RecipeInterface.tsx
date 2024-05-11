// ---------- spoonacular  -------------

// export interface IRecipe {
//   id?: string;
//   title: string;
//   image: string;
//   readyInMinutes: number
//   summary: string
//   dishTypes: string[]
//   vegan: boolean
//   veryPopular: boolean
//   pricePerServing: number
// }



// ---------- edamam  -------------


export interface IRecipe {
  id?: string
  uri?: string;
  calories: number;
  image: string;
  label: string;
  ingredientLines: string[];
  totalTime: number;
  url: string;
  mealType: string[]
  totalWeight: number
  images: {
    SMALL: {
      url: string;
    };
  };
}
