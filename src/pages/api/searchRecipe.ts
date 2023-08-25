import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { query } = req.query; // e.g., 'chicken'

    const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
    const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;
    const USER_ID = process.env.REACT_APP_EDAMAM_USER_ID;
    const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&user=${USER_ID}`;

    try {
        const edamamResponse = await fetch(URL);
        const data = await edamamResponse.json();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    };
};
