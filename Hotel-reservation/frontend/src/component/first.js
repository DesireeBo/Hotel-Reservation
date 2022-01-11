import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Container, Row, Col } from 'react-grid-system';

import { Form, Button, FormGroup, FormControl, ControlLabel, RadioGroup, FormLabel, Radio, FormControlLabel } from "@material-ui/core";

import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';


import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function First() {
    const [value, setValue] = React.useState(new Date());

    return (

        <form className="container">

        {/* property radio buttons */}
            <FormLabel component="legend">Where would you like to spend your vacation?</FormLabel>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Mango Sun" />
                <FormControlLabel control={<Checkbox />} label="Mango Beach" />
                <FormControlLabel control={<Checkbox />} label="Mango Hills" />
            </FormGroup>

            <br></br><br></br>

            <FormLabel component="legend">Great! Now let's select a date!</FormLabel>

            {/* datepicker */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="Pick date"
                    value={value}
                    minDate={new Date('2017-01-01')}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

                <br></br><br></br>

            {/* occupancy */}
            <FormControl component="fieldset">
                <FormLabel component="legend"> Note: Only 1 room can be booked per reservation.</FormLabel>
                <FormLabel component="legend"> Occupancy:</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="Single" control={<Radio />} label="Single" />
                    <FormControlLabel value="Double" control={<Radio />} label="Double" />
                    <FormControlLabel value="Triple" control={<Radio />} label="Triple" />
                </RadioGroup>
            </FormControl>
            <br></br>

            <Link to="/second">
            <button type="button" variant="contained" class="btn btn-primary btn-lg">
                Check availability
            </button>
            </Link>

        </form>
    )
}

export default First;




