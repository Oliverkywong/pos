import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Food } from "../../model";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Foodpage() {
    const [rows, setRows] = useState<Food[]>([])

    useEffect(() => {
      (async function () {
        try {
          const res = await axios.get(`/menu`);
          if (res.status === 200) {
            console.log(res.data)
            setRows(res.data)
          }
        } catch (err) {
          console.log(err);
        }
      })();
    }, [])
  return (    
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Description</TableCell>
          <TableCell align="right">Price ($)</TableCell>
          <TableCell align="right">Sold Out</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.foodname}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">{row.foodname}</TableCell>
            <TableCell align="right">{row.description}</TableCell>
            <TableCell align="right">{row.price}</TableCell>
            <TableCell align="right">{!row.soldout&&"X"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

