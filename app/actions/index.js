"use server"

import { createUser, findUserByCredentials, updateFavourites } from "@/db/queries"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


async function registerUser(formData){
    const user = Object.fromEntries(formData)
    const createUsers = await createUser(user)
    redirect("/login")
}


async function loginPerform(formData){
    try {
        const credentials = {}
        credentials.email = formData.get("email")
        credentials.password = formData.get("password")
        const found = await findUserByCredentials(credentials)
        return found
    } catch (error) {
        throw new Error
    }
}


async function addFavorite(recipeId, authId){
    try {
        await updateFavourites(recipeId, authId)
    } catch (error) {
        throw error
    }
    revalidatePath("/")
}
export {registerUser, loginPerform, addFavorite}