import React from 'react'
import './EnhancedTable.css'
import { useGlobalContext } from '../../context'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import EnhancedTableHead from './EnhancedTableHead'
import EnhancedTableToolbar from './EnhacedTableToolbar'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}))

export default function EnhancedTable() {
  const classes = useStyles()
  const [order, setOrder] = React.useState('desc')
  const [orderBy, setOrderBy] = React.useState('tankName')
  const [selected, setSelected] = React.useState([])
  const [dense, setDense] = React.useState(false)

  const {
    state: { playerVehiclesStats, allVehicles },
  } = useGlobalContext()
  const createData = (
    tankName,
    m,
    type,
    nation,
    tier,
    averageDamage,
    averageXp,
    battles,
    victories,
    maxKills,
    maxXp
  ) => {
    return {
      tankName,
      m,
      type,
      nation,
      tier,
      averageDamage,
      averageXp,
      battles,
      victories,
      maxKills,
      maxXp,
    }
  }

  const stats = playerVehiclesStats.map((singleVehicle) => {
    return singleVehicle
  })
  const rows = stats.map((stat) => {
    return createData(
      allVehicles[stat.tank_id].name,
      stat.mark_of_mastery,
      allVehicles[stat.tank_id].type,
      allVehicles[stat.tank_id].nation,
      allVehicles[stat.tank_id].tier,
      Math.round(stat.all.damage_dealt / stat.all.battles),
      Math.round(stat.all.xp / stat.all.battles),
      stat.all.battles,
      Math.round((stat.all.wins / stat.all.battles) * 100),
      stat.max_frags,
      stat.max_xp
    )
  })

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleChangeDense = (event) => {
    setDense(event.target.checked)
  }

  const isSelected = (name) => selected.indexOf(name) !== -1

  return (
    <div className='enhancedTable__container'>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar numSelected={rows.length} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby='tableTitle'
              size={dense ? 'small' : 'medium'}
              aria-label='enhanced table'
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy)).map(
                  (row, index) => {
                    const isItemSelected = isSelected(row.tankName)
                    const labelId = `enhanced-table-checkbox-${index}`

                    return (
                      <TableRow
                        hover
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={`${row.tankName}${row.battles}`}
                        selected={isItemSelected}
                      >
                        <TableCell padding='checkbox'></TableCell>
                        <TableCell id={labelId} scope='row' padding='none'>
                          {row.tankName}
                        </TableCell>
                        <TableCell align='right'> {row.m}</TableCell>
                        <TableCell align='right'> {row.type}</TableCell>
                        <TableCell align='right'> {row.nation}</TableCell>
                        <TableCell align='right'> {row.tier}</TableCell>
                        <TableCell align='right'>
                          {' '}
                          {row.averageDamage}
                        </TableCell>
                        <TableCell align='right'>{row.averageXp}</TableCell>
                        <TableCell align='right'>{row.battles}</TableCell>
                        <TableCell align='right'>{row.victories}</TableCell>
                        <TableCell align='right'>{row.maxKills}</TableCell>
                        <TableCell align='right'>{row.maxXp}</TableCell>
                      </TableRow>
                    )
                  }
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label='Dense padding'
        />
      </div>
    </div>
  )
}
