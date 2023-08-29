// * for client-side fetching
export const fetchRecipeFromAPI = async (query: string) => {
    const URL = `/api/searchRecipe?query=${query}`;
    const response = await fetch(URL);
    
    if (!response.ok) {
        throw new Error('Failed to fetch recipes.');
    }
    
    const data = await response.json();
    // console.log("API Response Data:", data); This is just to check if client side call is working.

    return data;
};


export const fetchRecipeByUri = async (uri: string) => {
    const URL = `/api/getRecipe?uri=${uri}`;
    console.log('Fetching URL:', URL);
    const response = await fetch(URL);
    
    if (!response.ok) {
        throw new Error('Failed to fetch recipe by URI.');
    }
    
    const data = await response.json();
    return data;
};
