import { create } from 'zustand';

const useStore = create((set) => ({
  items: 0,
  activeCard: null,
  incrItems: () => set((state) => ({ items: state.items + 1 })),
  decrItems: () => set((state) => ({ items: state.items - 1 })),

  setCard: (id) => set({ activeCard: id }),
  resetCard: () => set({ activeCard: null }),

}));

export default useStore;
