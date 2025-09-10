import { create } from 'zustand'

type UIState = {
  theme: 'light'|'dark'|'system'
  setTheme: (t: UIState['theme']) => void
  productFilter: string
  setProductFilter: (s: string) => void
}

export const useUI = create<UIState>((set) => ({
  theme: 'system',
  setTheme: (theme) => set({ theme }),
  productFilter: '',
  setProductFilter: (productFilter) => set({ productFilter }),
}))
