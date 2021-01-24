import React, { useState, useContext, useRef } from 'react'
import useFetch from './useFetch'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('santimania')
  const nameRef = useRef()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { isLoading, error, data, playerData, isLoadingPlayer } = useFetch(
    `${query}`
  )

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        isLoading,
        error,
        data,
        nameRef,
        playerData,
        isSubmitted,
        setIsSubmitted,
        isLoadingPlayer,
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
