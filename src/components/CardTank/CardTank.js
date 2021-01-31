import React from 'react'

function CardTank({ singleVehicle, tankInfo }) {
  const { all } = singleVehicle
  console.log(singleVehicle)
  return (
    <div className='card__container'>
      <table className='GeneratedTable'>
        <thead>
          <tr>
            <th>Tank Name</th>
            <th>M</th>
            <th>Type</th>
            <th>Nation</th>
            <th>Tier</th>
            <th>Damage</th>
            <th>Xp</th>
            <th>Battles</th>
            <th>Victories</th>
            <th>Max Kills</th>
            <th>Max XP</th>
            <th>Wn8</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{tankInfo.name}</td>
            <td>{singleVehicle.mark_of_mastery}</td>
            <td>{tankInfo.type}</td>
            <td>{tankInfo.nation}</td>
            <td>{tankInfo.tier}</td>
            <td>{(all.damage_dealt / all.battles).toFixed(2)}</td>
            <td>{(all.xp / all.battles).toFixed()}</td>
            <td>{all.battles}</td>
            <td>{((all.wins / all.battles) * 100).toFixed(2)}%</td>
            <td>{singleVehicle.max_frags}</td>
            <td>{singleVehicle.max_xp}</td>
            <td>Cell</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CardTank
