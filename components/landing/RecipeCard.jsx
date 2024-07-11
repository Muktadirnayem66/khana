/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import RecipeImage from '@/public/assets/image1.jpg'

const RecipeCard = ({recipe}) => {
    return (
        <div className="card shadow-xl p-2 w-[280px]">
          <Image
            src={RecipeImage}
            className="rounded-md"
            width={200}
            height={80}
            alt="recipe image"
          />
          <h4 className="my-2">{recipe?.name}</h4>
          <div className="py-2 flex justify-between text-xs text-gray-500">
            <span>⭐️ {recipe?.rating} </span>
            <span> By: {recipe?.author}</span>
          </div>
        </div>
    );
};

export default RecipeCard;