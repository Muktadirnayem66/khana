/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import CateImage from "@/public/assets/categoryImg.jpg";

const Categorized = ({ recipe }) => {
  return (
    
      <div className="card">
        <Image
          src={CateImage}
          width={200}
          height={100}
          className="rounded-md"
          alt=""
        />
        <h4 className="my-2">{recipe?.name}</h4>
        <div className="py-2 flex justify-between text-xs text-gray-500">
          <span>⭐️ {recipe?.rating}</span>
          <span>By:{recipe?.author}</span>
        </div>
      </div>
    
  );
};

export default Categorized;
