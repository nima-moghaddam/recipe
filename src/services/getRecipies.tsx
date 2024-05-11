import { baseUrl, apiKey, appId, uriPrefix } from "@/enmus/ApiEnum";

export const getRecipies = async (query: string) => {
  try {
    const response = await fetch(
      `${baseUrl}/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${apiKey}`,
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
