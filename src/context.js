import React, { useState, useContext, useRef } from 'react'
import useFetch from './useFetch'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('santimania')
  const nameRef = useRef()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { isLoading, data, playerVehicles } = useFetch(`${query}`)
  console.log(playerVehicles)
  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        isLoading,
        data,
        nameRef,
        isSubmitted,
        setIsSubmitted,
        playerVehicles,
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
