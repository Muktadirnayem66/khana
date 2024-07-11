import RecipeCardDetails from "@/components/details/RecipeCardDetails";
import { getRecipeById } from "@/db/queries";


export async function generateMetadata({params:{id}}){
    const recipe = await getRecipeById(id)
    return {
        title:`Khana-${recipe?.name}`,
        details: recipe.details
    }

}


const RecipeDetailsPage = async ({params:{id}}) => {

    try {
        const recipe = await getRecipeById(id)
        return (
            <>
               <RecipeCardDetails recipe={recipe} /> 
            </>
        );

    } catch (error) {
        throw new Error(error);
    }

   
};

export default RecipeDetailsPage;