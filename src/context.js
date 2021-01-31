import React, { useState, useContext, useRef } from 'react'
import useFetch from './useFetch'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('santimania')
  const nameRef = useRef()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { state } = useFetch(`${query}`)
  console.log(state.playerVehiclesStats)
  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        nameRef,
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
