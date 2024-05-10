export interface IRecipe {
  id?: string;
  title: string;
  image: string;
  readyInMinutes: number
  summary: string
  dishTypes: string[]
  vegan: boolean
  veryPopular: boolean
}
