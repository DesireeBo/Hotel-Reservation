
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(roomtype,bookingtype , amenities, checkindate, rate) {
  return { roomtype,bookingtype , amenities, checkindate, rate};
}

const rows = [
  createData('Single', 'Full-board', 'Pool-area','11-02-2022', '$30.00'),
 
];

export default function Mybooking() {
  return (
      <div className="container">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption> A 20% cancellation fee will be charged if cancelling prior 12 hours of the booking</caption>

        <TableHead>
          <TableRow>

            <TableCell>Room Type</TableCell>
            <TableCell align="right">Booking Type</TableCell>
            <TableCell align="right">Amenities</TableCell>
            <TableCell align="right">Check-in-date</TableCell>
            <TableCell align="right"> Rate</TableCell>
            
          
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.roomtype}>
              <TableCell component="th" scope="row">
                {row.roomtype}
            </TableCell>

              <TableCell align="right">{row.bookingtype}</TableCell>
              <TableCell align="right">{row.amenities}</TableCell>
              <TableCell align="right">{row.checkindate}</TableCell>
              <TableCell align="right">{row. rate}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>

      <br></br>

    <button type="button" variant="contained"  class="btn btn-danger">
           Cancel Reservation
    </button>

    </div>
  );
}