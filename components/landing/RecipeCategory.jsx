import { getAllRecipe } from "@/db/queries";
import { removeNonString } from "@/utils/data-util";
import Link from "next/link";


const RecipeCategory = async () => {
  const allrecipe = await getAllRecipe()
  const uniqueCategory = [...new Set(allrecipe.map((recipe)=>recipe.category))]
  
    return (
        <div className="col-span-12 md:col-span-3">
          <h3 className="font-bold text-xl">Recipes</h3>
          <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">

            {
              uniqueCategory.map((category)=>(
               
                <Link href={`/categorized/${category}`} key={category}>
                <li className=" font-bold py-2">{category}</li>
                </Link>
              ))
            }           
          </ul>
        </div>
    );
};

export default RecipeCategory;