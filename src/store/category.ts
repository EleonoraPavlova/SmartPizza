import { create } from 'zustand'

interface CategoryState {
  activeCategoryId: string
  setActiveCategoryId: (_activeCategoryId: string) => void
}

export const useCategoryStore = create<CategoryState>((set) => ({
  activeCategoryId: 'pizzas',
  setActiveCategoryId: (activeCategoryId) => set({ activeCategoryId }),
}))
