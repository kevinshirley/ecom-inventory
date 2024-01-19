import { createContext } from 'react'

export const useDrawerContext = createContext({});

console.log({ useDrawerContext });

export default function DrawerContext({ children }: any) {
  return (
    <>
      {children}
    </>
  )
}
