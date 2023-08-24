
import PageLayout from '@/components/PageLayout/PageLayout';
import RecipeSearchBar from '@/containers/RecipeSearchBar/RecipeSearchBar';

export default function Home() {
  return (
    <>
      <PageLayout>
        <section className='recipeSeachPageGridContainer'>
          <div className="left-placeholder"></div>
          <div className="recipe-content">
            <RecipeSearchBar />
          </div> 
          <div className="right-placeholder"></div>
        </section>
      </PageLayout>
    </>
  );
};