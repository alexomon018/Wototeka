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
import {
  showType,
  showNation,
  getComparator,
  stableSort,
  showMastery,
} from './utils'
import { AiFillStar } from 'react-icons/ai'

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
  const {
    state: { playerVehiclesStats, allVehicles },
  } = useGlobalContext()
  const classes = useStyles()
  const [order, setOrder] = React.useState('desc')
  const [orderBy, setOrderBy] = React.useState('tankName')
  const [dense, setDense] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')

  const createData = (
    img,
    tankName,
    premium,
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
      img,
      tankName,
      premium,
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
      allVehicles[stat.tank_id].images.contour_icon,
      allVehicles[stat.tank_id].name,
      allVehicles[stat.tank_id].is_premium,
      stat.mark_of_mastery,
      allVehicles[stat.tank_id].type,
      allVehicles[stat.tank_id].nation,
      allVehicles[stat.tank_id].tier,
      Number(Number(stat.all.damage_dealt / stat.all.battles).toFixed(2)),
      Math.floor(stat.all.xp / stat.all.battles),
      stat.all.battles,
      Number(Number((stat.all.wins / stat.all.battles) * 100).toFixed(2)),
      stat.max_frags,
      stat.max_xp
    )
  })
  const [filterData, setFilterData] = React.useState(rows)
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }
  const handleSearch = (event) => {
    const data = rows
    let filteredDatas = []
    filteredDatas = data.filter((e) => {
      let mathesItems = []
      mathesItems.push(e.tankName)

      let retVal = true
      mathesItems.forEach((e) => {
        const regex = new RegExp(event.target.value, 'gi')
        if (typeof e == 'string') retVal = e.match(regex)
      })
      return retVal
    })
    setFilterData(filteredDatas)
    setSearchValue(event.target.value)
  }
  const handleChangeDense = (event) => {
    setDense(event.target.checked)
  }

  return (
    <div className='enhancedTable__container'>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar
            numTanks={rows.length}
            handleSearch={handleSearch}
            value={searchValue}
          />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby='tableTitle'
              size={dense ? 'small' : 'medium'}
              aria-label='enhanced table'
            >
              <EnhancedTableHead
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(filterData, getComparator(order, orderBy)).map(
                  (row, index) => {
                    return (
                      <TableRow
                        hover
                        tabIndex={-1}
                        key={`${row.tankName}${row.battles}`}
                      >
                        <TableCell>
                          <img src={row.img} alt={row.tankName} />
                        </TableCell>
                        <TableCell scope='row' padding='none'>
                          {row.tankName}{' '}
                          {row.premium && <AiFillStar size='1em' />}
                        </TableCell>
                        <TableCell align='right'>
                          {' '}
                          {showMastery(row.m)}
                        </TableCell>
                        <TableCell align='center'>
                          {' '}
                          {showType(row.type)}
                        </TableCell>
                        <TableCell align='right'>
                          {' '}
                          {showNation(row.nation)}
                        </TableCell>
                        <TableCell align='right'> {row.tier}</TableCell>
                        <TableCell align='right'>
                          {' '}
                          {row.averageDamage}
                        </TableCell>
                        <TableCell align='right'>{row.averageXp}</TableCell>
                        <TableCell align='right'>{row.battles}</TableCell>
                        <TableCell align='right'>{`${row.victories} %`}</TableCell>
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
