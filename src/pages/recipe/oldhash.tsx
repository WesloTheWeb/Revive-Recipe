// ! old hash
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const RecipeDetails = () => {
  const router = useRouter();
  const { hash } = router.query;

  // Assuming you store your recipes in a map/object where the hash is the key
  const recipe = useSelector((state: RootState) => state.recipes[hash]);

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

export default RecipeDetails;
