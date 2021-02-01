import React from 'react'
import './TableTanks.css'
import { useGlobalContext } from '../../context'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
})

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

function TableTanks() {
  const {
    state: { playerVehiclesStats, allVehicles },
  } = useGlobalContext()
  const classes = useStyles()
  return (
    <div className='tableTanks__container'>
      {' '}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell align='right'>Tank Name</StyledTableCell>
              <StyledTableCell align='right'> M </StyledTableCell>
              <StyledTableCell align='right'>Nation</StyledTableCell>
              <StyledTableCell align='right'>Damage</StyledTableCell>
              <StyledTableCell align='right'>Xp</StyledTableCell>
              <StyledTableCell align='right'>Battles</StyledTableCell>
              <StyledTableCell align='right'>Victories</StyledTableCell>
              <StyledTableCell align='right'>Max Kills</StyledTableCell>
              <StyledTableCell align='right'>Max XP</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playerVehiclesStats.map((singleVehicle) => (
              <StyledTableRow
                key={`${singleVehicle.account_id}${singleVehicle.tank_id}`}
              >
                <StyledTableCell align='right'>
                  {allVehicles[singleVehicle.tank_id].name}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  {singleVehicle.mark_of_mastery}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  {allVehicles[singleVehicle.tank_id].type}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  {allVehicles[singleVehicle.tank_id].nation}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  {allVehicles[singleVehicle.tank_id].tier}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  {(
                    singleVehicle.all.damage_dealt / singleVehicle.all.battles
                  ).toFixed(2)}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  {(singleVehicle.all.xp / singleVehicle.all.battles).toFixed()}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  {singleVehicle.max_frags}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  {singleVehicle.max_xp}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TableTanks
