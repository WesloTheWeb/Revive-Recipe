// * This is to grab a specific recipe via clicking on RecipeCard component's Link button "View Recipe"
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // Check for the recipe ID in the request
    if (!req.query.id) {
        res.status(400).json({ error: 'Recipe ID parameter is missing' });
        return;
    }

    // Retrieve the URI from the query
    const uri = req.query.uri;

    if (!uri) {
        res.status(400).json({ error: 'Recipe URI parameter is missing' });
        return;
    }

    const recipeId = req.query.id as string;

    // Ensure environment variables are set
    if (!process.env.REACT_APP_EDAMAM_APP_ID || 
        !process.env.REACT_APP_EDAMAM_APP_KEY || 
        !process.env.REACT_APP_EDAMAM_USER_ID) {
        throw new Error("Environment variables are not set!");
    }

    const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID as string;
    const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY as string;
    const USER_ID = process.env.REACT_APP_EDAMAM_USER_ID as string;

    // Adjusted URL to target the specific recipe info endpoint
    // Replace the recipeId with the uri parameter for fetching recipe details
    const URL = `https://api.edamam.com/api/recipes/v2/${encodeURIComponent(uri)}?type=public&app_id=${encodeURIComponent(APP_ID)}&app_key=${encodeURIComponent(APP_KEY)}`;

    const headers = {
        'Edamam-Account-User': USER_ID,
        'Accept-Language': 'en',
        'Accept': 'application/json'
    };

    try {
        const edamamResponse = await fetch(URL, { headers });
        const data = await edamamResponse.json();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};