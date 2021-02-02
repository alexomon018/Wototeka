import React from 'react'
import './Card.css'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import Paper from '@material-ui/core/Paper'
import CustomTableRow from './CustomTableRow/CustomTableRow'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
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
function Card({ data, state }) {
  const {
    statistics: { all },
  } = data
  const classes = useStyles()
  return (
    <div className='card__container'>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size='small'
          aria-label='a dense table'
        >
          <TableHead>
            <StyledTableCell>{data.nickname}</StyledTableCell>

            <StyledTableCell align='right'>Total</StyledTableCell>
            <StyledTableCell align='right'>%</StyledTableCell>
          </TableHead>
          <TableBody>
            <CustomTableRow name='Battles' value={all.battles} />
            <CustomTableRow
              name='Victories'
              value={all.wins}
              calcValue={((all.wins / all.battles) * 100).toFixed(2)}
            />
            <CustomTableRow
              name='Defeats'
              value={all.losses}
              calcValue={((all.losses / all.battles) * 100).toFixed(2)}
            />
            <CustomTableRow
              name='Draws'
              value={all.draws}
              calcValue={((all.draws / all.battles) * 100).toFixed(2)}
            />

            <CustomTableRow
              name='Battles Survived'
              value={all.survived_battles}
              calcValue={((all.survived_battles / all.battles) * 100).toFixed(
                2
              )}
            />
            <CustomTableRow
              name='Tanks Destroyed'
              value={all.frags}
              calcValue={(all.frags / all.battles).toFixed(2)}
            />

            <CustomTableRow
              name='Tank Spoted'
              value={all.spotted}
              calcValue={(all.spotted / all.battles).toFixed(2)}
            />

            <CustomTableRow
              name='Damage Dealt'
              calcValue={(all.damage_dealt / all.battles).toFixed(2)}
            />
            <CustomTableRow
              name='Capture Points'
              value={all.capture_points}
              calcValue={(all.dropped_capture_points / all.battles).toFixed(2)}
            />
            <CustomTableRow
              name='Deffence Points'
              value={all.dropped_capture_points}
              calcValue={(all.dropped_capture_points / all.battles).toFixed(2)}
            />
            <CustomTableRow
              name='Average Expirience'
              value={all.battle_avg_xp}
            />
            <CustomTableRow name='Max Damage' value={all.max_damage} />
            <CustomTableRow name='Max Xp' value={all.max_xp} />
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Card
