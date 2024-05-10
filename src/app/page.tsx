import RecipeCard from "@/components/RecipeCard";
import Search from "@/components/Search";
import WarningWrapper from "@/components/WarningWrapper";
import { getRecipies } from "@/services/getRecipies";
import { IRecipe } from "@/types/RecipeInterface";

export default async function Home({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const data = await getRecipies(searchParams.query);
  const recipies = data.results;

  return (
    <section>
      <div className="mb-5">
        <Search />
      </div>
     
      <WarningWrapper
        hasData={!!recipies?.length}
        message="Your search result is empty!"
      >
        <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {recipies.map((recipe: IRecipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </WarningWrapper>
    </section>
  );
}
