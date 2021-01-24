import React from 'react'
import Loader from '../../components/Loader/Loader'
import Search from '../../components/Search/Search'
import Card from '../../components/Card/Card'
import { useGlobalContext } from '../../context'
function Home() {
  const { isLoading, data, isSubmitted } = useGlobalContext()
  return (
    <div>
      <Search />
      {isSubmitted && (isLoading === true ? <Loader /> : <Card data={data} />)}
    </div>
  )
}

export default Home
