
import PageLayout from '@/components/PageLayout/PageLayout';

export default function Home() {
  return (
    <>
      <PageLayout>
        <section>
          <h2>Recipe Finder</h2>
          <span>Enter any food below to query for the nutritional data.</span>
        </section>
        <section className='recipeSeachPageGridContainer'>
          <div className="left-placeholder"></div>
          <div className="recipe-content">
            {/* components: Searchbar + instructions, recipe card search, random recipe cards (include pagination) */}
            hi
          </div>
          <div className="right-placeholder"></div>
        </section>
      </PageLayout>
    </>
  );
};