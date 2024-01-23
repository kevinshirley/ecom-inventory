"use client"

import {
  ReactNode,
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from 'react'
import { ColorCodeType } from '@/interfaces/product'

interface AppContextProvierType {
  selectedColorCode: ColorCodeType | null;
  setSelectedColorCode: Dispatch<SetStateAction<ColorCodeType | null>>;
}

export const AppContext = createContext<AppContextProvierType | null>(null);

export default function AppContextProvier({ children }: { children: ReactNode }) {
  const [selectedColorCode, setSelectedColorCode] = useState<ColorCodeType | null>(null);

  return (
    <AppContext.Provider
      value={{
        selectedColorCode,
        setSelectedColorCode,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within the AppContextProvider')
  }
  return context;
}
