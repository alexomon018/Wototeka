import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import Search from '../../components/Search/Search'
import Card from '../../components/Card/Card'
import EnhancedTable from '../../components/EnhancedTable/EnhancedTable'
function Home() {
  const [isSubmitted, setIsSubmited] = React.useState(false)

  const playerData = useSelector((state) => state.playerData)
  const allVehiclesInfo = useSelector((state) => state.allVehiclesInfo)
  const { allVehicles } = allVehiclesInfo

  const { allPlayerData } = playerData
  const playerVehiclesStats = allPlayerData[2]

  return (
    <div>
      <Search setIsSubmited={setIsSubmited} />
      {isSubmitted &&
        (playerData.loading === true ? (
          <Loader />
        ) : (
          <Card data={allPlayerData[0]} />
        ))}
      {isSubmitted &&
        (playerData.loading === true ? (
          <Loader />
        ) : (
          <EnhancedTable
            playerVehiclesStats={playerVehiclesStats}
            allVehicles={allVehicles}
          />
        ))}
    </div>
  )
}

export default Home
