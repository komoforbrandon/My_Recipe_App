import { useQuery } from "@tanstack/react-query";
import fetchRecipe from "../api/fetchRecipe";
import Searchbar from "./search";
import { useState } from "react";
import SkeletonLoader from "./skeletonloader";
import RecipeCard from "./RecipeCard";
import { useFavorites } from "../context/favorites-context";
import type { RecipeResponse } from "../types/recipe";

export default function Home() {
  const [search, setSearch] = useState("");
  const { isFavorite, toggleFavorite } = useFavorites();
  const { data, isLoading, isError, error } = useQuery<RecipeResponse>({
    queryKey: ["recipes", search],
    queryFn: () => fetchRecipe(search),
  });

  const recipes = data?.meals ?? [];
  const resultLabel = search.trim()
    ? `Results for "${search}"`
    : "Popular recipes to explore";

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      <section className="relative overflow-hidden rounded-4xl border border-amber-700/10 bg-linear-gradient-to-br from-amber-600/10 via-amber-800/15 to-amber-100 px-6 py-10 shadow-sm sm:px-8 lg:px-12">
        <div className="absolute -right-16 top-0 h-44 w-44 rounded-full bg-amber-300/25 blur-3xl" />
        <div className="absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-orange-300/20 blur-3xl" />

        <div className="relative grid items-center gap-8 ">
          <div className="space-y-5">
            <p className="inline-flex rounded-full bg-amber-900/10 px-4 py-1 text-sm font-medium text-amber-900">
              237Recipe App
            </p>
            <div className="space-y-3">
              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-amber-950 sm:text-5xl">
                Find crave-worthy meals in seconds.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-amber-900/80 sm:text-lg">
                Search for recipes, browse by category, and save the dishes you
                want to cook next. From quick comfort meals to bold regional
                favorites, your next plate starts here.
              </p>
            </div>

            <Searchbar onSearch={setSearch} />
          </div>
        </div>
      </section>

     {isLoading && <SkeletonLoader />}
      <section className="mt-10">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-amber-950">{resultLabel}</h2>
            <p className="text-sm text-amber-900/75">
              Browse meals, discover categories, and build your next menu.
            </p>
          </div>
          <p className="text-sm font-medium text-amber-900/70">
            {recipes.length} recipe{recipes.length === 1 ? "" : "s"}
          </p>
        </div>

        {isError ? (
          <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-center text-red-700">
            An error occurred during fetching: {error.message}
          </p>
        ) : recipes.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                isFavorite={isFavorite(recipe.idMeal)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-amber-700/10 bg-white/60 px-4 py-8 text-center text-amber-900">
            No recipes found for this search {search}
          </p>
        )}
      </section>
    </div>
  );
}
