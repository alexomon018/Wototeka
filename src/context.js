import React, { useState, useContext } from 'react'
import useFetch from './useFetch'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('santimania')

  const [isSubmitted, setIsSubmitted] = useState(false)
  const { state } = useFetch(`${query}`)
  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        isSubmitted,
        setIsSubmitted,
        state,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
