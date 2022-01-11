// from check availability


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom';

function createData(roomtype,amenity , fullboard, halfboard, bandb, action) {
  return { roomtype,amenity , fullboard, halfboard, bandb, action};
}

const action=<Link to="/registration"><button type="button" class="btn btn-primary"> Book </button></Link>

const rows = [
  createData('Single', 'Free Wifi', '$24.00','$30.00', '$15.00',action),
 
];

export default function AcccessibleTable() {
  return (
      <div className="container">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="caption table">
        <caption> Note: Only one option could be booked</caption>
        <TableHead>
          <TableRow>

            <TableCell>Room Type</TableCell>
            <TableCell align="right">Amenities</TableCell>
            <TableCell align="right">Full board</TableCell>
            <TableCell align="right">Half board</TableCell>
            <TableCell align="right">Bread and breakfast</TableCell>
            <TableCell align="right">Action</TableCell>

          </TableRow>
        </TableHead>

        <TableBody>
            {rows.map((row) => (
            <TableRow key={row.roomtype}>
              <TableCell component="th" scope="row">
                {row.roomtype}
              </TableCell>
            < TableCell align = "right" > {row.amenity} < /TableCell>
            < TableCell align = "right" > {row.fullboard} < /TableCell>
            < TableCell align = "right" > {row.halfboard} < /TableCell>
            < TableCell align = "right" > {row.bandb} < /TableCell>
            < TableCell align = "right" > {row.action} < /TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>

        </TableContainer>
          <br></br>

    </div>
  );
}
