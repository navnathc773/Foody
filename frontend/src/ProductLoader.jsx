export const ProductLoader = async ({ params }) => {
  console.log("params from loader:", params);
  const URL = `/api/getAll?id=${params.id}`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }

    const data = await response.json();
    console.log("Fetched product data:", data);

    return data;
  } catch (error) {
    console.error("Error in loader:", error);
    throw error;
  }
};
