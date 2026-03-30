export default async function fetchRecipe(meal:string) {
    const response = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    return response.json()
}