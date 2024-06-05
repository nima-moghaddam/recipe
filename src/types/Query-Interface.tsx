import { IRecipe } from "./Recipe-Interface";

export interface IQueryResponse {
  from: number;
  to: number;
  count: number;
  _links: {
    next: {
      href: string;
      title: string;
    };
  };
  hits: {
    recipe: IRecipe;
    _links: {
      self: {
        href: string;
        title: string;
      };
    };
  }[];
}
