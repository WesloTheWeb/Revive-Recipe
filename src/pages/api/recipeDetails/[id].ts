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

    const decodedUri = decodeURIComponent(uri as string);
    // Extract recipe ID from the decoded URI
    const recipeId = decodedUri.split("#recipe_")[1];

    // Ensure environment variables are set
    if (!process.env.REACT_APP_EDAMAM_APP_ID || 
        !process.env.REACT_APP_EDAMAM_APP_KEY || 
        !process.env.REACT_APP_EDAMAM_USER_ID) {
        throw new Error("Environment variables are not set!");
    }

    const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID as string;
    const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY as string;
    const USER_ID = process.env.REACT_APP_EDAMAM_USER_ID as string;

    // Update the URL to use the extracted recipeId
    const URL = `https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=${encodeURIComponent(APP_ID)}&app_key=${encodeURIComponent(APP_KEY)}`;
    // const URL = `https://api.edamam.com/api/recipes/v2/${encodeURIComponent(decodedUri)}?type=public&app_id=${encodeURIComponent(APP_ID)}&app_key=${encodeURIComponent(APP_KEY)}`;

    const headers = {
        'Edamam-Account-User': USER_ID,
        'Accept-Language': 'en',
        'Accept': 'application/json'
    };

    try {
        console.log("Fetching from URL:", URL);
        const edamamResponse = await fetch(URL, { headers });

        if (!edamamResponse.ok) {
            throw new Error(`API responded with ${edamamResponse.status}: ${await edamamResponse.text()}`);
        }

        const data = await edamamResponse.json();
        res.status(200).json(data);

    } catch (error) {
        console.error("Error while fetching recipe:", error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
};