// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import Table from '@material-ui/core/Table'
// import TableBody from '@material-ui/core/TableBody'
// import TableCell from '@material-ui/core/TableCell'
// import TableContainer from '@material-ui/core/TableContainer'
// import TableHead from '@material-ui/core/TableHead'
// import TableRow from '@material-ui/core/TableRow'
// import Paper from '@material-ui/core/Paper'

// function createData(
//   tankName,
//   m,
//   type,
//   nation,
//   tier,
//   damage,
//   averageXp,
//   battles,
//   victories,
//   maxKills,
//   maxXp
// ) {
//   return {
//     tankName,
//     m,
//     fat,
//     type,
//     nation,
//     tier,
//     damage,
//     averageXp,
//     battles,
//     victories,
//     maxKills,
//     maxXp,
//   }
// }

// function CardTank({ singleVehicle, tankInfo }) {
//   const { all, mark_of_mastery, max_frags, max_xp } = singleVehicle

//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ]
//   const classes = useStyles()

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label='simple table'>
//         <TableHead>
//           <TableRow>
//             <TableCell align='right'>Tank Name</TableCell>
//             <TableCell align='right'> M </TableCell>
//             <TableCell align='right'>Nation</TableCell>
//             <TableCell align='right'>Damage</TableCell>
//             <TableCell align='right'>Xp</TableCell>
//             <TableCell align='right'>Battles</TableCell>
//             <TableCell align='right'>Victories</TableCell>
//             <TableCell align='right'>Max Kills</TableCell>
//             <TableCell align='right'>Max XP</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>

//         </TableBody>
//       </Table>
//     </TableContainer>
//   )
// }

// export default CardTank

//  <div className='card__container'>
//       <table className='GeneratedTable'>
//         <thead>
//           <tr>
//             <th>Tank Name</th>
//             <th>M</th>
//             <th>Type</th>
//             <th>Nation</th>
//             <th>Tier</th>
//             <th>Damage</th>
//             <th>Xp</th>
//             <th>Battles</th>
//             <th>Victories</th>
//             <th>Max Kills</th>
//             <th>Max XP</th>
//             <th>Wn8</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{tankInfo.name}</td>
//             <td>{mark_of_mastery}</td>
//             <td>{tankInfo.type}</td>
//             <td>{tankInfo.nation}</td>
//             <td>{tankInfo.tier}</td>
//             <td>{(all.damage_dealt / all.battles).toFixed(2)}</td>
//             <td>{(all.xp / all.battles).toFixed()}</td>
//             <td>{all.battles}</td>
//             <td>{((all.wins / all.battles) * 100).toFixed(2)}%</td>
//             <td>{max_frags}</td>
//             <td>{max_xp}</td>
//             <td>Cell</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
