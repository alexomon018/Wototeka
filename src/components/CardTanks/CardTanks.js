import React from 'react'
import './CardTanks.css'
import CardTank from '../CardTank/CardTank'
import { useGlobalContext } from '../../context'
function CardTanks() {
  const { playerVehiclesStats, tanks } = useGlobalContext()

  return (
    <div>
      <h2>Tanks: {playerVehiclesStats.length}</h2>
      {playerVehiclesStats.map((singleVehicle) => (
        <CardTank
          key={`${singleVehicle.account_id}${singleVehicle.tank_id}`}
          singleVehicle={singleVehicle}
          tankInfo={tanks[singleVehicle.tank_id]}
        />
      ))}
    </div>
  )
}

export default CardTanks
