# Revive Recipe App
Get Cooking. Get Moving. Get Groov'n.

This will be a recipe look up, gym accountability social app where users can share their recipes, fitness progress, as well as explore recipes and meals they may use.

### Update July 30th 2023:
- Development is in full-swing! Premilinary designs done, work on front-end started. Check back often in development branches for major features.

## Basic Features
- Users can log in and create profiles.
- Users can query for various recipes and meals.
- Updates newsfeed.

### Tech Stack 
- <b>Front-End</b>: NextJS, TypeScript, SCSS, Redux / RTK (Redux ToolKit), React Hook Forms, Adobe XD
- <b>Back-End</b>: NodeJS, ExpressJS, MongoDB, Edamam API
- <b>Misc.</b>: Jest, React Testing Library

## Getting Started (Running Locally on Machine)
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Dependencies for running Locally
I have now fully integrated [`Edamam's Recipe Search API`](https://www.edamam.com/). In order to run this locally and see the bulk of it such as the random recipes and make queries, you would need to sign up for the free API from Edamam. Once you have your API key and account made of the Recipe search, go to `pages/searchRecipe.ts` and edit the following:

    const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID as string;
    const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY as string;
    const USER_ID = process.env.REACT_APP_EDAMAM_USER_ID as string;
Note: It is wise to create a .env.local file, and edit this information if you do not want to hard set these variables especially if you are forking this to your own repository and just good security practice in general. The query is hard set to 'Chicken' at the moment but feel free to change it when you fork this repo.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Known Bugs
List of known bugs from the API that I am aware and need to address:
- Some recipe ingredients are way too big for the modal. Example search for 'tower' and the Macaroon wedding tower. Right now it is possible to still exit out via clicking the overlay, but need to find a better way to parse that data in a modal of ingredients being way too much.