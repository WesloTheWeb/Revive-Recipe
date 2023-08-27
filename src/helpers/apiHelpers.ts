// * for client-side fetching
export const fetchRecipeFromAPI = async (query: string) => {
    const URL = `/api/searchRecipe?query=${query}`;
    const response = await fetch(URL);
    
    if (!response.ok) {
        throw new Error('Failed to fetch recipes.');
    }
    
    const data = await response.json();
    console.log("API Response Data:", data);

    return data;
};
