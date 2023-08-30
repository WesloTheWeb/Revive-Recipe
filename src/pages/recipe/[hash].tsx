import { GetServerSideProps } from 'next';

const RecipeDetails = ({ recipe }) => {
  if (!recipe) {
    return <p>Loading or not found...</p>;
  }

  // Render the recipe details here...
  return (
    <div>
      {/* Render the recipe details */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const hash = context.params?.hash;
  let recipe;

  // Fetch the detailed recipe data using the hash from your API
  const response = await fetch(`YOUR_API_ENDPOINT/${hash}`);
  if (response.ok) {
    recipe = await response.json();
  }

  return {
    props: { recipe }
  };
}

export default RecipeDetails;
