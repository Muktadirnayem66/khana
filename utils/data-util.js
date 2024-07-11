import { getAllRecipe } from "@/db/queries"

export const replaceMongoIdInArray = (array)=>{

    const mappedArray = array.map((item)=>{
        return {
            id:item._id.toString(),
            ...item
        }
    }).map(({_id, ...rest})=>rest)
    return mappedArray
}


export const replaceMongoInObject = (obj)=>{
    const {_id, ...updatedObj} = {...obj, id:obj._id.toString()}
    return updatedObj
}


export function removeNonString(str) {
  
    return str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  }
  

  export function removeNonStringUpper(str) {
  
    const cleanedStr  = str.replace(/[^a-zA-Z]/g, '')
    return cleanedStr.charAt(0).toUpperCase() + cleanedStr.slice(1).toLowerCase();
  }

