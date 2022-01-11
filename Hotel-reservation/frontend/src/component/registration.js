import React, { useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-grid-system';

function Register() {

    const [show, setShow] = useState(true)

    function handlePayment(value) {
        if (value === "card") {
            setShow(false)

        }
        else {
            setShow(true)
        }
    }

    return (
        <form>

            <h2 align="left" style={{ marginLeft: "10px" }}>Reservation Details</h2>
            <div className="row">
                <div className="col-5" >
                    <label for="staticEmail" class="col-sm-2 col-form-label">Room Type</label>
                </div>
                <div className="col-5" >
                    <input type="text" class="form-control" id="inputPassword" />
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-5" >
                    <label for="staticEmail" class="col-sm-2 col-form-label">Amenities</label>
                </div>
                <div className="col-5" >
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-5" >
                    <label for="staticEmail" class="col-sm-2 col-form-label">Booking Type</label>
                </div>
                <div className="col-5" >
                    <input type="text" class="form-control" id="inputPassword" />
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-5" >
                    <label for="staticEmail" class="col-sm-2 col-form-label">Check-In Date</label>
                </div>
                <div className="col-5" >
                    <input type="date" class="form-control" id="inputPassword" />
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-5" >
                    <label for="staticEmail" class="col-sm-2 col-form-label">Check-in Time</label>
                    <h6 align="left" style={{ marginLeft: "10px", color: "red" }}>Note: Check in hour should be at 13:00 hrs, check-out hour must be at 11:00hrs</h6>
                </div>
                <div className="col-5" >
                    <input type="time" class="form-control" id="inputPassword" />
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-5" >
                    <label for="staticEmail" class="col-sm-2 col-form-label">Expected Check-Out Date</label>
                </div>
                <div className="col-5" >
                    <input type="date" class="form-control" id="inputPassword" />
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-5" >
                    <label for="staticEmail" class="col-sm-2 col-form-label">Do you require Parking Spots?</label>
                </div>
                <div className="col-5" >
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">No</label>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-5" >
                    <label for="staticEmail" class="col-sm-2 col-form-label">Amenity preferences</label>
                </div>
                <div className="col-5" >
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <h6 align="left" style={{ marginLeft: "10px", color: "red" }}>No additional charges</h6>
            <br></br>
            <div className="row">
                <div className="col-5" >
                    <label for="staticEmail" class="col-sm-2 col-form-label">Special notes</label>
                </div>
                <div className="col-5" >
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <br></br>

            <h2 align="left" style={{ marginLeft: "10px" }}>Customer Details</h2>

            <div className="row">
                <div className="col-5" >
                    <label for="staticEmail" class="col-sm-2 col-form-label">Search Profile by E-mail</label>
                </div>
                <div className="col-5" >
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="abc@example.com" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <br></br>

            <div className="row">
                <div className="col-5" >
                    <label for="staticEmail" class="col-sm-2 col-form-label">E-mail</label>
                </div>
                <div className="col-5" >
                    <input type="text" class="form-control" id="inputPassword" />
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-5" >
                    <label for="staticEmail" class="col-sm-2 col-form-label">Full Name</label>
                </div>
                <div className="col-5" >
                    <input type="text" class="form-control" id="inputPassword" />
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-5" >
                    <label for="staticEmail" class="col-sm-2 col-form-label">Identity Card Number</label>
                </div>
                <div className="col-5" >
                    <input type="text" class="form-control" id="inputPassword" />
                </div>
            </div>
            <br></br>

            <h2 align="left" style={{ marginLeft: "10px" }}>Payment Details</h2>
            <div className="row">
                <div className="col-5" >
                    <label for="staticEmail" class="col-sm-2 col-form-label">Payment Method</label>
                </div>
                <div className="col-5" >
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="cash" onChange={() => handlePayment("card")} />
                        <label class="form-check-label" for="inlineRadio1">Cash</label>
                    </div>


                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="card" onChange={() => handlePayment("cash")} />
                        <label class="form-check-label" for="inlineRadio2">Credit Card</label>
                    </div>
                </div>
            </div>
            <br></br>

            {
                show ?
                    <div className="row">
                        <div className="col-5" >
                            <label for="staticEmail" class="col-sm-2 col-form-label">Payment Type</label>
                        </div>
                        <div className="col-5" >
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label class="form-check-label" for="inlineRadio1">Master Card</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label class="form-check-label" for="inlineRadio2">Visa</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label class="form-check-label" for="inlineRadio2">Paypal</label>
                            </div>
                        </div>
                    </div> : null
            }

            <br></br>

            <button type="button" class="btn btn-success btn-lg" onClick={window['alertconfirm']}>Confirm</button>
            <button type="button" class="btn btn-danger btn-lg" style={{ marginLeft: "50px" }} onClick={window['alertcancel']}>Cancel</button>
            <br></br>
        </form>
    )
}

export default Register;