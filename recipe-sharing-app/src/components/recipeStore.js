import create from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe],
    })),

  setSearchTerm: (term) => {
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    });
  },
}));
