import React, { createContext, useRef } from 'react'

export const ScrollContext = createContext()

export const ScrollContextProvider = ({ children }) => {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  return <ScrollContext.Provider value={{ overlay, caption, scroll }}>{children}</ScrollContext.Provider>
}
