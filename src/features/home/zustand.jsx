import { create } from 'zustand';

const useStore = create((set, get) => ({
  items: 0,
  toString: () => {
    return get().items;
  },
  incrItems: () => set((state) => ({ items: state.items + 1 })),
}))

export default useStore;
