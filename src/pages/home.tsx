import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import RecipeRandomCard from '@/components/RecipeRandomCard/RecipeRandomCard';
import RecipeSearchBar from '@/containers/RecipeSearchBar/RecipeSearchBar';

export default function Home() {

  const QUERY = 'chicken';
  const URL = `/api/searchRecipe?query=${QUERY}`;

  useEffect(() => {
    fetch(URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error.message);
      });
  }, []);

  return (
    <>
      <PageLayout>
        <section className='recipeSeachPageGridContainer'>
          <div className="left-placeholder"></div>
          <div className="recipe-content">
            <RecipeSearchBar />
            {/* <RecipeRandomCard 
              recipeName='Bangus Paksiw (Milkfish in Vinegar Stew)'
              
              /> */}
          </div>
          <div className="right-placeholder"></div>
        </section>
      </PageLayout>
    </>
  );
};