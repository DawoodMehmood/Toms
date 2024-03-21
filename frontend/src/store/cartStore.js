// src/stores/useCartStore.js
import { create } from "zustand";

const useCartStore = create((set) => ({
  items: [], // Initial cart items array

  addToCart: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),

  removeFromCart: (itemId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    })),

  // Add more actions as needed, e.g., adjustQuantity, clearCart, etc.
}));

export default useCartStore;
