import RecipeCard from "@/components/RecipeCard";
import Search from "@/components/Search";
import { IRecipe } from "@/types/RecipeInterface";

const baseUrl = process.env.BASE_URL;

export default async function Home({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const response = await fetch(
    `${baseUrl}/recipes/complexSearch?apiKey=48e233e62ec84841a7a04d8eaa3e2b45&query=${searchParams.query}&number=30&addRecipeInformation=true`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  const recipies = data.results;

  return (
    <section>
      <p>Current Param: {searchParams.query}</p>
      <div className="mb-5">
        <Search recipies={recipies} />
      </div>
      <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {recipies.map((recipe: IRecipe) => (
          <RecipeCard
            key={recipe.id}
            image={recipe.image}
            title={recipe.title}
          />
        ))}
      </div>
    </section>
  );
}
