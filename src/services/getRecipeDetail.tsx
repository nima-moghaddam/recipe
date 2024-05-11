const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

export const getRecipeDetail = async (id: string) => {
  try {
    const response = await fetch(
      `${baseUrl}/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=false`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
    throw new Error("Failed to fetch data");
  }
};
