
import { getAllRecipe } from "@/db/queries";
import RecipeCard from "./RecipeCard";
import Link from "next/link";


const RecipeCardList = async() => {
  const allrecipe = await getAllRecipe()
  


  return (
    <div className="col-span-12 md:col-span-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
        {
          allrecipe?.map((recipe)=>(
           <Link href={`/details/${recipe.id}`}  key={recipe.id} > <RecipeCard recipe={recipe}/></Link>
          ))
        }
      </div>
    </div>
  );
};

export default RecipeCardList;
