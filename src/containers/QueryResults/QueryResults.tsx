import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { RecipeData } from '@/interfaces/recipeTypes';
import RecipeCard from '@/components/RecipeCard/RecipeCard';

import classes from './QueryResults.module.scss';

const { queryHeader } = classes;

const QueryResults = ({ }) => {

    const searchResults = useSelector((state: RootState) => state.search.results);
    const loading = useSelector((state: RootState) => state.search.loading);
    const error = useSelector((state: RootState) => state.search.error);

    return (
        <>
            <section className={queryHeader}>
                <label>Results {searchResults.length}</label>
            </section>
            <section>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}

             
                <RecipeCard
                    key={1}
                    image={"https://edamam-product-images.s3.amazonaws.com/web-img/554/5542eb4ec1002f64d45c42f210a8bfc8-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQC4DbM9imbI94bepGSdHZAw61R95edCaM7X1yOluK%2FLdQIgPX5yr327JAaRBAhTG%2B0UDc8KzytC%2FDjhmJiICgt5vHsquQUIZxAAGgwxODcwMTcxNTA5ODYiDOqZIGrXa%2BP1a4gE5yqWBQifoEKPjRWhCUOcztrsFUI%2FXR52rFJTboRfY3ujvPggAPyMxrfGPnECkP0PkcJOWiuOrtL1zBchnCsMMy5jFdlP0oLJlhrkPQuRLZQC1I3mY1Ew8xtaqK1LGLDWAy3G%2FlLa5qZC807gEDfU7lAfH7O9eqzQQF78RQBjgM%2FFm2PtTZKC%2BSGxyD6gxnhOz02i4XLh9nJu%2ByTVvyypJ4WfCrMuAJIapG4hcctRyJ8Z%2BYHD8ZE9r5Ue3koXkNtl4bx6RsK%2FMBkpFzUzK5YtfU4iHB6n7n4pBnJ7%2FK2rJ6f9WHD9Cx3inEDyiC9I%2FbtggeBUGoplvekd2YqOjeMTTlaZI4Wojf72mMpn3kAHODDDx1qYfvl5Nwyo%2FzFw%2B2ML%2BypeBCjlWULG37DSR6%2BdiSFFbPSgLUkTWPs0yI8vXjcdzQYMxkmhyZsK2HGMm9GN9ybK98ayoE7iRFL8v0cAXi0O%2FEc6a%2Fhm2uTHCLIxSmkDVkFITjrcTh%2FIE19%2BGi44I7YlGcP7e4bRd6kM2FHWk7%2BM8FdRIx2TUiPHsFjiuPWI1Fle%2BRsmK8DCeiFzVT9H6rmV0eCLDYcDtPeCEZ3Tm2%2BuCTKiPeJe6NaDV3QNb6pmbl25SwLeWp9qWwKB5YFlK4LCRasgwDZJClDic8NWDMpr6W1U3sKCW%2B%2FlA7FYBArPuKbEFXxSpK4eIOEriP7ZDkSfG11we7pOK23QPeEvDnvBqTPDLn4pSXkrklCSLxfVrd6aFy1deu8hMHW9%2FqDZZq%2B0YbLzYfq%2BUvuEbxE759OkkpkqNQP5I7faSHXkuxQY4MdcS6aePp0JaHkIh53881HNQVd5NhTKqtxJrz4mV3jyZ8B7fQt8e%2F01qHA4JzISSGcfS57m7%2F3HMOLeqacGOrEBXLh93TLJatA4dCqJWTIrf60xo9Y3YfAyS5ZwjaFSZ86Rr1P5Y1Gv5Wtjkp3uRshEUXgKpt8zB%2By6kHaAkEcjo3vUqQ25yDKuGrurdnBs4ExIxxaCA0j1V8UW2iaVgSnzZ679l1%2FdHA8xNfswMcGq5nrXcnrUCqa%2FkHX1K1dRcAQ1WuWwYehf%2Bs5peBATLbOJXoKZ8A8M4tBa20eLWKLxO3C8tpceUQdEVm9sPc6lr55c&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230826T220957Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGTAYY2VZ%2F20230826%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1b4da883eb9f68e7d9bdbc55f10532f41ebf8a2925feb791875cfc284a3138d9"}
                    recipeName={"Grilled Beans"}
                    showModal={() => {
                        setSelectedRecipeIngredients(['1', '2', '3']); // here is where we query specific ingredients
                        showModal();
                    }}
                    description={'uwu'} // Modify as needed.
                    calories={171}
                    servingSize={4}
                    macros={{
                        protein: {
                            quantity: 143,
                            unit: 'g'
                        },
                        fats: {
                            quantity: 43,
                            unit: 'g'
                        },
                        carbs: {
                            quantity: 27,
                            unit: 'g'
                        }
                    }}
                    minerals={{
                        cholesterol: {
                            quantity: 143,
                            unit: 'mg'
                        },
                        sodium: {
                            quantity: 143,
                            unit: 'mg'
                        },
                        calcium: {
                            quantity: 143,
                            unit: 'mg'
                        },
                        magnesium: {
                            quantity: 143,
                            unit: 'mg'
                        },
                        potassium: {
                            quantity: 143,
                            unit: 'mg'
                        },
                        iron: {
                            quantity: 143,
                            unit: 'mg'
                        }
                    }}
                />
            </section>
        </>
    );
};

export default QueryResults;