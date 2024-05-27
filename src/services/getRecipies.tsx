import { baseUrl, apiKey, appId } from "@/enmus/Api-Enum";

export const getRecipies = async (query: string) => {
  try {
    const response = await fetch(
      `${baseUrl}/search?q=${query}&app_id=${appId}&app_key=${apiKey}&from=0&to=50`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        // cache: "no-store",
      },
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
