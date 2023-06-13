import { create } from "zustand";

interface Bear {
  id: number;
  name: string;
  age: number;
}

interface BearState {
  bears: Bear[];
}

const useBearStore = create<BearState>((set) => ({
  bears: [],
  increasePopulation: () =>
    set((state) => ({
      bears: [
        ...state.bears,
        { id: state.bears.length + 1, name: "New Bear", age: 0 },
      ],
    })),
  removeAllBears: () => set({ bears: [] }),
}));
