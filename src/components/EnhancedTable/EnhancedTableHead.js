import React from 'react'
import PropTypes from 'prop-types'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import TableRow from '@material-ui/core/TableRow'
const headCells = [
  {
    id: 'tankName',
    numeric: false,
    disablePadding: true,
    label: 'Tank Name',
  },
  { id: 'mastery', numeric: true, disablePadding: false, label: 'M' },
  { id: 'type', numeric: false, disablePadding: false, label: 'Type' },
  { id: 'nation', numeric: false, disablePadding: false, label: 'Nation' },
  { id: 'tier', numeric: true, disablePadding: false, label: 'Tier' },
  {
    id: 'averageDamage',
    numeric: true,
    disablePadding: false,
    label: 'Average Damage',
  },
  {
    id: 'averageXp',
    numeric: true,
    disablePadding: false,
    label: 'Average Xp',
  },
  { id: 'battles', numeric: true, disablePadding: false, label: 'Battles' },
  {
    id: 'victories',
    numeric: true,
    disablePadding: false,
    label: 'Victories %',
  },
  { id: 'maxKills', numeric: true, disablePadding: false, label: 'Max Kills' },
  { id: 'maxXp', numeric: true, disablePadding: false, label: 'Max Xp' },
]

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
}

export default EnhancedTableHead
