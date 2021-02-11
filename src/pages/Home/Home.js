import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import Search from '../../components/Search/Search'
import Card from '../../components/Card/Card'
import EnhancedTable from '../../components/EnhancedTable/EnhancedTable'
function Home() {
  const [isSubmitted, setIsSubmited] = React.useState(false)

  const playerPersonalDataInfo = useSelector(
    (state) => state.playerPersonalDataInfo
  )
  const playerVehiclesStatsInfo = useSelector(
    (state) => state.playerVehiclesStatsInfo
  )
  const { playerPersonalData } = playerPersonalDataInfo

  return (
    <div>
      <Search setIsSubmited={setIsSubmited} />
      {isSubmitted &&
        (playerPersonalDataInfo.loading === true ? (
          <Loader />
        ) : (
          <Card data={playerPersonalData} />
        ))}
      {isSubmitted &&
        (playerVehiclesStatsInfo.loading === true ? (
          <Loader />
        ) : (
          <EnhancedTable />
        ))}
    </div>
  )
}

export default Home
