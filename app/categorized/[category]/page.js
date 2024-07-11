import Categorized from "@/components/category/Categorized";
import { getAllRecipe } from "@/db/queries";
import {
  allCategory,
  removeNonString,
  removeNonStringUpper,
} from "@/utils/data-util";

const CategorizedPage = async ({ params: { category } }) => {
  const recipes = await getAllRecipe();

  const filteredRecipes = recipes.filter((recipe) => {
    return removeNonString(recipe.category) === removeNonString(category);
  });

  return (
    <section className="container py-8">
      <h3 className="font-semibold text-xl">
        {removeNonStringUpper(category)}
      </h3>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
      {filteredRecipes.map((recipe) => (
        <Categorized key={recipe.id} recipe={recipe} />
      ))}
      </div>
    </section>
  );
};

export default CategorizedPage;
