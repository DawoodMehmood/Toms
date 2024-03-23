import { create } from "zustand";

const useFavoritesStore = create((set) => ({
  favorites: JSON.parse(localStorage.getItem("userFavorites")) || [],

  addFavorite: (productId) =>
    set((state) => {
      const updatedFavorites = [...state.favorites, productId];
      localStorage.setItem("userFavorites", JSON.stringify(updatedFavorites));
      return { favorites: updatedFavorites };
    }),

  removeFavorite: (productId) =>
    set((state) => {
      const updatedFavorites = state.favorites.filter((id) => id !== productId);
      localStorage.setItem("userFavorites", JSON.stringify(updatedFavorites));
      return { favorites: updatedFavorites };
    }),

  removeAllFavorites: () =>
    set(() => {
      localStorage.removeItem("userFavorites");
      return { favorites: [] };
    }),

  isFavorite: (productId) => {
    const { favorites } = useFavoritesStore.getState();
    return favorites.includes(productId);
  },
}));

export default useFavoritesStore;
