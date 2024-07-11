import { recipesModel } from "@/models/recipe-models";
import { userModel } from "@/models/user-model";
import { replaceMongoIdInArray, replaceMongoInObject } from "@/utils/data-util";
import mongoose from "mongoose";



 async function getAllRecipe(){

    try {
        
        const allRecipe = await recipesModel.find().lean()
        return replaceMongoIdInArray(allRecipe)
        
    } catch (error) {
        throw new Error(error);
    }
}


async function getRecipeById(id){
    const recipe = await recipesModel.findById(id).lean()
    return replaceMongoInObject(recipe)
}

async function getUserById(id){
    const user = await userModel.findById(id)
   
    return user
}

async function createUser(user){
    return await userModel.create(user)
}


async function findUserByCredentials(credentials){
    const user = await userModel.findOne(credentials).lean()
    if(user){
        return replaceMongoInObject(user)
    }else{
        return null
    }
}


async function updateFavourites(recipeId, authId){
    const user = await getUserById(authId)   
      user.favourites.includes(recipeId) ? user.favourites.pull(new mongoose.Types.ObjectId(recipeId)) : user.favourites.push(new mongoose.Types.ObjectId(recipeId))
       
        user.save()
   
}


export { getAllRecipe, 
    getRecipeById, 
    createUser, 
    findUserByCredentials, 
    updateFavourites
}