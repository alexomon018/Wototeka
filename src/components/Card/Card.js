import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import './Card.css'

function Card({ data }) {
  console.log(data)
  const {
    statistics: { all },
  } = data
  console.log(all)

  return (
    <div className='card__container'>
      <table className='GeneratedTable'>
        <thead>
          <tr>
            <th>Total</th>
            <th>{data.nickname}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Battles</td>
            <td>{all.battles}</td>
          </tr>
          <tr>
            <td>Avg Tier</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td>Victories</td>
            <td>{all.wins}</td>
          </tr>
          <tr>
            <td>Defeats</td>
            <td>{all.losses}</td>
          </tr>
          <tr>
            <td>Draws</td>
            <td>{all.draws}</td>
          </tr>
          <tr>
            <td>Battles Survived</td>
            <td>{all.survived_battles}</td>
          </tr>
          <tr>
            <td>Tanks Destroyed</td>
            <td>{all.frags}</td>
          </tr>
          <tr>
            <td>Destruction Rate</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td>Tanks Spoted</td>
            <td>{all.spotted}</td>
          </tr>
          <tr>
            <td>Damage dealt</td>
            <td>{all.damage_dealt}</td>
          </tr>
          <tr>
            <td>Capture Poins</td>
            <td>{all.capture_points}</td>
          </tr>
          <tr>
            <td>Deffence Points</td>
            <td>{all.dropped_capture_points}</td>
          </tr>
          <tr>
            <td>Expirience</td>
            <td>{all.xp}</td>
          </tr>
          <tr>
            <td>WN7</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td>WN8</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Card
