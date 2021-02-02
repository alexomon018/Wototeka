import { TableCell, TableRow } from '@material-ui/core'
import React from 'react'

function CustomTableRow({ name, value, calcValue }) {
  return (
    <TableRow>
      <TableCell align='left'>{name}</TableCell>
      <TableCell align='right'>{value}</TableCell>
      <TableCell align='right'>{calcValue}</TableCell>
    </TableRow>
  )
}

export default CustomTableRow
