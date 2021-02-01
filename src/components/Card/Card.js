import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})
function Card({ data, state }) {
  const {
    statistics: { all },
  } = data
  const classes = useStyles()
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size='small' aria-label='a dense table'>
        <TableHead>
          <TableCell>{data.nickname}</TableCell>

          <TableCell align='right'>Total</TableCell>
          <TableCell align='right'>Victories</TableCell>
          <TableCell align='right'>Defeats</TableCell>
          <TableCell align='right'>Draws</TableCell>
          <TableCell align='right'>Battles Survived</TableCell>
          <TableCell align='right'>Tanks Destroyed</TableCell>
          <TableCell align='right'>Tank Spoted</TableCell>
          <TableCell align='right'>Damage Dealt</TableCell>
          <TableCell align='right'>Capture Points</TableCell>
          <TableCell align='right'>Deffence Points</TableCell>
          <TableCell align='right'>Average Expirience</TableCell>
          <TableCell align='right'>Max Damage</TableCell>
          <TableCell align='right'>Max XP</TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align='right'>Battles</TableCell>
            <TableCell align='right'>{all.battles}</TableCell>
            <TableCell align='right'>nesto</TableCell>
            <TableCell align='right'>Fat&nbsp;(g)</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Card

//  <div className='card__container'>
//         <h2>Overall Stats</h2>
//         <table className='GeneratedTable'>
//           <thead>
//             <tr>
//               <td></td>
//               <td colSpan='2'>Total</td>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Battles</td>
//               <td colSpan='2'>{all.battles}</td>
//             </tr>
//             <tr>
//               <td>Avg Tier</td>
//               <td colSpan='2'>Cell</td>
//             </tr>
//             <tr>
//               <td>Victories</td>
//               <td>{all.wins}</td>
//               <td>{((all.wins / all.battles) * 100).toFixed(2)}%</td>
//             </tr>
//             <tr>
//               <td>Defeats</td>
//               <td>{all.losses}</td>
//               <td>{((all.losses / all.battles) * 100).toFixed(2)}%</td>
//             </tr>
//             <tr>
//               <td>Draws</td>
//               <td>{all.draws}</td>
//               <td>{((all.draws / all.battles) * 100).toFixed(2)}%</td>
//             </tr>
//             <tr>
//               <td>Battles Survived</td>
//               <td>{all.survived_battles}</td>
//               <td>
//                 {((all.survived_battles / all.battles) * 100).toFixed(2)}%
//               </td>
//             </tr>

//             <tr>
//               <td>Tanks Destroyed</td>
//               <td>{all.frags}</td>
//               <td>{(all.frags / all.battles).toFixed(2)}</td>
//             </tr>

//             <tr>
//               <td>Tanks Spoted</td>
//               <td>{all.spotted}</td>
//               <td>{(all.spotted / all.battles).toFixed(2)}</td>
//             </tr>
//             <tr>
//               <td>Damage dealt</td>

//               <td colSpan='2'>{(all.damage_dealt / all.battles).toFixed(2)}</td>
//             </tr>
//             <tr>
//               <td>Capture Poins</td>
//               <td>{all.capture_points}</td>
//               <td>{(all.capture_points / all.battles).toFixed(2)}</td>
//             </tr>
//             <tr>
//               <td>Deffence Points</td>
//               <td>{all.dropped_capture_points}</td>
//               <td>{(all.dropped_capture_points / all.battles).toFixed(2)}</td>
//             </tr>
//             <tr>
//               <td>Average Expirience</td>
//               <td colSpan='2'>{all.battle_avg_xp}</td>
//             </tr>
//             <tr>
//               <td>Max Damage</td>
//               <td colSpan='2'>{all.max_damage}</td>
//             </tr>
//             <tr>
//               <td>Max XP</td>
//               <td colSpan='2'>{all.max_xp}</td>
//             </tr>
//             <tr>
//               <td>WN7</td>
//               <td colSpan='2'>Cell</td>
//             </tr>
//             <tr>
//               <td>WN8</td>
//               <td colSpan='2'>Cell</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
