import { create } from 'zustand';

const useStore = create((set) => ({
  items: 0,
  incrItems: () => set((state) => ({ items: state.items + 1 })),
}));

export default useStore;
