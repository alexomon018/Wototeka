import React from 'react'
import Loader from '../../components/Loader/Loader'
import Search from '../../components/Search/Search'
import Card from '../../components/Card/Card'
import { useGlobalContext } from '../../context'
import EnhancedTable from '../../components/EnhancedTable/EnhancedTable'
function Home() {
  const { state, isSubmitted } = useGlobalContext()
  return (
    <div>
      <Search />
      {isSubmitted &&
        (state.loading === true ? (
          <Loader />
        ) : (
          <Card data={state.playerInfo} />
        ))}
      {isSubmitted &&
        (state.loadingVehicles === true ? <Loader /> : <EnhancedTable />)}
    </div>
  )
}

export default Home
