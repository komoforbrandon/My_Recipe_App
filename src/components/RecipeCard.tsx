import { CircleCheck, Globe, Heart, ScrollText, X } from "lucide-react";
import type { Meal } from "../types/recipe";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type RecipeCardProps = {
  recipe: Meal;
  isFavorite: boolean;
  onToggleFavorite: (meal: Meal) => void;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

type IngredientItem = {
  ingredient: string;
  measure: string | undefined;
};

function getIngredients(recipe: Meal) {
  return Array.from({ length: 20 }, (_, index) => index + 1)
    .map((item) => {
      const ingredient = recipe[`strIngredient${item}`]?.trim();
      const measure = recipe[`strMeasure${item}`]?.trim();

      if (!ingredient) {
        return null;
      }

      return {
        ingredient,
        measure,
      };
    })
    .filter((item): item is IngredientItem => item !== null);
}

function getInstructionSteps(instructions: string) {
  return instructions
    .split(/\r?\n|\.\s+/)
    .map((step) => step.trim())
    .filter(Boolean);
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-50 px-3 py-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-amber-950/60 backdrop-blur-sm"
        aria-label="Close recipe modal"
        onClick={onClose}
      />
      <div className="relative mx-auto flex h-full max-w-5xl items-center justify-center">
        {children}
      </div>
    </div>,
    document.body
  );
}

export default function RecipeCard({
  recipe,
  isFavorite,
  onToggleFavorite,
}: RecipeCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ingredients = getIngredients(recipe);
  const instructionSteps = getInstructionSteps(recipe.strInstructions || "");

  return (
    <article className="overflow-hidden rounded-2xl border border-amber-700/10 bg-amber-500/4 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3]">
        <button
          type="button"
          aria-label={
            isFavorite
              ? `Remove ${recipe.strMeal} from favorites`
              : `Add ${recipe.strMeal} to favorites`
          }
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 shadow-sm transition-transform hover:scale-105"
          onClick={() => onToggleFavorite(recipe)}
        >
          <Heart
            size={20}
            className={
              isFavorite ? "fill-red-500 text-red-500" : "text-amber-950"
            }
          />
        </button>

        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="h-full w-full cursor-pointer object-cover object-center"
          onClick={() => setIsOpen(true)}
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between space-y-2">
          <h2 className="text-lg font-bold text-amber-950">{recipe.strMeal}</h2>
          <p className="flex h-fit items-center rounded-2xl bg-amber-800/12 px-2 py-1 text-center text-sm text-amber-950">
            <Globe size={18} color="rgb(69, 26, 3)" className="mr-1" />
            {recipe.strArea}
          </p>
        </div>

        <div className="mt-4 flex w-half items-center justify-between rounded-lg bg-amber-800/10 p-2 w-fit">
          <p className="text-sm text-amber-950">{recipe.strCategory}</p>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div
          className="relative max-h-[92vh] w-full overflow-hidden rounded-[2rem] border border-amber-700/15 bg-amber-50 shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-20 rounded-full bg-white/90 p-2 text-amber-950 shadow-sm transition-colors hover:bg-white"
            aria-label={`Close ${recipe.strMeal} details`}
            onClick={() => setIsOpen(false)}
          >
            <X size={22} />
          </button>

          <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[1fr_1.15fr]">
            <div className="relative min-h-64 bg-amber-100 lg:min-h-full">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="h-64 w-full object-cover object-center sm:h-80 lg:h-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-amber-950/75 via-amber-950/20 to-transparent px-5 py-5 text-white">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-100/85">
                  Recipe details
                </p>
                <h2 className="mt-2 text-3xl font-black">{recipe.strMeal}</h2>
                <div className="mt-3 flex flex-wrap gap-2 text-sm">
                  <p className="flex items-center rounded-full bg-white/15 px-3 py-1">
                    <Globe size={16} className="mr-2" />
                    {recipe.strArea}
                  </p>
                  <p className="rounded-full bg-white/15 px-3 py-1">
                    {recipe.strCategory}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 p-5 sm:p-7">
              <section>
                <div className="mb-4 flex items-center gap-2">
                  <CircleCheck size={20} className="text-emerald-600" />
                  <h3 className="text-xl font-bold text-amber-950">
                    Ingredients
                  </h3>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {ingredients.map((item) => (
                    <li
                      key={`${recipe.idMeal}-${item.ingredient}`}
                      className="flex items-start gap-3 rounded-2xl border border-amber-700/10 bg-white px-4 py-3 shadow-sm"
                    >
                      <CircleCheck
                        size={18}
                        className="mt-0.5 shrink-0 text-emerald-600"
                      />
                      <div>
                        <p className="font-medium text-amber-950">
                          {item.ingredient}
                        </p>
                        {item.measure ? (
                          <p className="text-sm text-amber-900/70">
                            {item.measure}
                          </p>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <div className="mb-4 flex items-center gap-2">
                  <ScrollText size={20} className="text-amber-900" />
                  <h3 className="text-xl font-bold text-amber-950">
                    Instructions
                  </h3>
                </div>

                <div className="space-y-3">
                  {instructionSteps.length > 0 ? (
                    instructionSteps.map((step, index) => (
                      <div
                        key={`${recipe.idMeal}-step-${index + 1}`}
                        className="rounded-2xl border border-amber-700/10 bg-white px-4 py-4 shadow-sm"
                      >
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-800/75">
                          Step {index + 1}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-amber-950/85">
                          {step.endsWith(".") ? step : `${step}.`}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="rounded-2xl border border-amber-700/10 bg-white px-4 py-4 text-sm text-amber-900/75 shadow-sm">
                      No instructions available for this recipe yet.
                    </p>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </Modal>
    </article>
  );
}
