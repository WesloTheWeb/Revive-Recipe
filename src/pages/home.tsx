
import PageLayout from '@/components/PageLayout/PageLayout';
import RecipeRandomCard from '@/components/RecipeRandomCard/RecipeRandomCard';
import RecipeSearchBar from '@/containers/RecipeSearchBar/RecipeSearchBar';

export default function Home() {
  return (
    <>
      <PageLayout>
        <section className='recipeSeachPageGridContainer'>
          <div className="left-placeholder"></div>
          <div className="recipe-content">
            <RecipeSearchBar />
            <RecipeRandomCard 
              recipeName='Bangus Paksiw (Milkfish in Vinegar Stew)'
              
              />
          </div> 
          <div className="right-placeholder"></div>
        </section>
      </PageLayout>
    </>
  );
};