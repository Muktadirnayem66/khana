"use client"

import { addFavorite } from "@/app/actions";
import useAuth from "@/app/Hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RecipeFavButton = ({recipe}) => {
  const {auth} = useAuth()
  const router = useRouter()
  const [Favourite, setFavourite] =useState(false)

  useEffect(()=>{
    if(auth){
      const isFavorite = auth?.favourites.includes(recipe?.id)
      setFavourite(isFavorite)
    }

  },[auth, recipe?.id])

  const toggleInterest = async() =>{
    if(auth){
     await addFavorite(recipe?.id, auth?.id)
      setFavourite(!Favourite)
    }else{
      router.push("/login")
    }
  }

    return (
        <>
         <div  className="flex gap-2 text-gray-600 cursor-pointer  hover:text-[#eb4a36]"
          onClick={toggleInterest}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className=" outline-none icon icon-tabler icons-tabler-outline icon-tabler-heart">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path fill={Favourite ? "#eb4a36": ""} d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
              <span>Favourite</span>
            </div>
            
        </>
    );
};

export default RecipeFavButton;