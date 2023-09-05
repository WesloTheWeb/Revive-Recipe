# Revive Recipe App
Get Cooking. Get Moving. Get Groov&apos;n.

This will be a recipe look up, gym accountability social app where users can share their recipes, fitness progress, as well as explore recipes and meals they may use.

### Update September 3rd 2023:
- The site is now live. It is purely front-end, meaning no back-end enabled yet. The forms leads to nowhere, but will show off a toast notification. This was just for demo purposes and use of React Hook Form (RHF) in action with TypeScript.

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
Note: It is wise to create a .env.local file, and edit this information if you do not want to hard set these variables especially if you are forking this to your own repository and just good security practice in general.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Developer Road Map
I wanted this project to stand on it&apos;s own for awhile. I have the functional requirements that users can use the web app to search for recipes and see nutritional information. I have just added the full recipe portion. Edamam API does not contain the actual recipe instead it is outsourced to an external site because they do not own the recipe. There may be some quality of life (QoL) improvements down the road, but I need to take this time to focus on my studies of data structures &amp; algorithms and system design. 

I will update my initial XD design and keep this repository open both as a guide and a reference, as I believe I followed great practices in function composition, TypeScript and Redux uses. However here a few things down the road..

### version 1.0.143
- This will be my first release branch version. I hope to refactor and consolidate the codebase more.
- Implementation of meaningful unit tests, which will be key moving forward and help me as I develop more.
- Small QoL updates based on initial feedback of the app.

### version 1.1.0
- This will be the first major update and include a backend. Users could now sign up and log in.
- More featured user content specific for users such as saving recipes.
- First step at a community tab to share updates and profiles.

I actually still need to flesh out the user stories for how this will look like. But I already have in place a toast system and use of RHF.