const baseUrl = process.env.BASE_URL;

export const getRecipies = async (query: string) => {
  try {
    const response = await fetch(
      `${baseUrl}/recipes/complexSearch?apiKey=48e233e62ec84841a7a04d8eaa3e2b45&query=${query}&number=30&addRecipeInformation=true`,
      {
        headers: {
          "Content-Type": "application/json",
        },
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
