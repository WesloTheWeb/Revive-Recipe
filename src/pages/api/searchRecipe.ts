import { NextApiRequest, NextApiResponse } from 'next';

const handleSearchRecipeRequest = async (req: NextApiRequest, res: NextApiResponse) => {

    // TypeScript specific check to see if query is present
    if (!req.query.query) {
        res.status(400).json({ error: 'Query parameter is missing' });
        return;
    };

    const query = req.query.query as string;

    // TypeScript check to throw an error instead of just empty string
    if (!process.env.REACT_APP_EDAMAM_APP_ID || !process.env.REACT_APP_EDAMAM_APP_KEY || !process.env.REACT_APP_EDAMAM_USER_ID) {
        throw new Error("Environment variables are not set!");
    };

    const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID as string;
    const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY as string;
    const USER_ID = process.env.REACT_APP_EDAMAM_USER_ID as string;

    const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(query)}&app_id=${encodeURIComponent(APP_ID)}&app_key=${encodeURIComponent(APP_KEY)}`;

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
    };
};

export default handleSearchRecipeRequest;