import React from 'react'
import './CardTanks.css'
import CardTank from '../CardTank/CardTank'
import { useGlobalContext } from '../../context'
import Loader from '../Loader/Loader'
function CardTanks() {
  const {
    state: { playerVehiclesStats, allVehicles },
  } = useGlobalContext()

  return (
    <div>
      <h2>Tanks: {playerVehiclesStats.length}</h2>
      {playerVehiclesStats.map((singleVehicle) => (
        <CardTank
          key={`${singleVehicle.account_id}${singleVehicle.tank_id}`}
          singleVehicle={singleVehicle}
          tankInfo={allVehicles[singleVehicle.tank_id]}
        />
      ))}
    </div>
  )
}

export default CardTanks
