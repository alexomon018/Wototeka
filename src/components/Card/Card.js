import React from 'react'
import { FaBars } from 'react-icons/fa'
import './Card.css'
import CardTanks from '../CardTanks/CardTanks'

function Card({ data }) {
  const {
    statistics: { all },
  } = data
  console.log(all)
  const date = new Date(1611863450)
  console.log(date.toUTCString())
  return (
    <div className='card__main__container'>
      <div className='card'>
        <div className='card__name'>
          <h1>{data.nickname}</h1>
        </div>
        <div className='card__clan'>
          <img src='' alt='clanLogo' />
          <h3>Jugoslevnska Oklopna Diviza</h3>
          <p>
            Positon: <strong>Private</strong>{' '}
          </p>
          <p>
            Joined: <strong>2019:01:19</strong>
          </p>
        </div>
      </div>
      <div className='card__nav_stats'>
        <a href=''>Stats</a>
        <a href=''>
          <FaBars /> Other
        </a>
      </div>
      <div className='card__container'>
        <h2>Overall Stats</h2>
        <table className='GeneratedTable'>
          <thead>
            <tr>
              <td></td>
              <td colSpan='2'>Total</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Battles</td>
              <td colSpan='2'>{all.battles}</td>
            </tr>
            <tr>
              <td>Avg Tier</td>
              <td colSpan='2'>Cell</td>
            </tr>
            <tr>
              <td>Victories</td>
              <td>{all.wins}</td>
              <td>{((all.wins / all.battles) * 100).toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Defeats</td>
              <td>{all.losses}</td>
              <td>{((all.losses / all.battles) * 100).toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Draws</td>
              <td>{all.draws}</td>
              <td>{((all.draws / all.battles) * 100).toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Battles Survived</td>
              <td>{all.survived_battles}</td>
              <td>
                {((all.survived_battles / all.battles) * 100).toFixed(2)}%
              </td>
            </tr>

            <tr>
              <td>Tanks Destroyed</td>
              <td>{all.frags}</td>
              <td>{(all.frags / all.battles).toFixed(2)}</td>
            </tr>

            <tr>
              <td>Tanks Spoted</td>
              <td>{all.spotted}</td>
              <td>{(all.spotted / all.battles).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Damage dealt</td>

              <td colSpan='2'>{(all.damage_dealt / all.battles).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Capture Poins</td>
              <td>{all.capture_points}</td>
              <td>{(all.capture_points / all.battles).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Deffence Points</td>
              <td>{all.dropped_capture_points}</td>
              <td>{(all.dropped_capture_points / all.battles).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Average Expirience</td>
              <td colSpan='2'>{all.battle_avg_xp}</td>
            </tr>
            <tr>
              <td>Max Damage</td>
              <td colSpan='2'>{all.max_damage}</td>
            </tr>
            <tr>
              <td>Max XP</td>
              <td colSpan='2'>{all.max_xp}</td>
            </tr>
            <tr>
              <td>WN7</td>
              <td colSpan='2'>Cell</td>
            </tr>
            <tr>
              <td>WN8</td>
              <td colSpan='2'>Cell</td>
            </tr>
          </tbody>
        </table>
      </div>
      <CardTanks />
    </div>
  )
}

export default Card
