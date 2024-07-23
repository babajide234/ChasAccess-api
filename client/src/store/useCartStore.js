import { create } from "zustand";
import instance from "../request";


const initialState = {
  items: [],
};


const useCartStore  = create((set) => ({
  ...initialState,
  addItem: async (item) => {
    try {
      const userId = localStorage.getItem('userId');

      if (!userId) {
        throw new Error('User ID not found');
      }
      const itemWithId = { ...item, userId };

      set((state) => {
        const updatedItems = [...state.items, itemWithId];
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        return { items: updatedItems };
      });

      const res = await instance.post('api/cart',itemWithId)
      return res;
    } catch (error) {
      return error;
    }
  },
  removeItem: async (id) => {
    try {
      set((state) => {
        const updatedItems = state.items.filter((item) => item.id !== id);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems)); 
      });
  
      await instance.delete(`api/cart/${id}`);
    } catch (error) {
      console.error('Error removing item from cart:', error);
      throw error; // Re-throw error to handle it in the component if needed
    }
  },
  loadcart: async () => {

    const data = await instance.get('api/cart');

    if(data){
      localStorage.setItem('cartItems', JSON.stringify(data.data));
    }

    const savedItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    set({ items: savedItems });

    return savedItems
  }
}));

export default useCartStore;
