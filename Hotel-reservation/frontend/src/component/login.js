import React from "react";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <><br></br><br></br><img className="profile" src="/images/images.png" alt="logo" /><br></br><br></br><form className="container">
            <br></br>

            <div className="row">
                <div className="col-5">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                </div>
                <div className="col-5">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
            </div>
            <br></br>

            <div className="row">
                <div className="col-5">
                    <label for="exampleInputPassword1" class="form-label">UserName</label>
                </div>
                <div className="col-5">
                    <input type="text" class="form-control" id="exampleInputPassword1" />
                </div>
            </div>
            <br></br>

            <div className="row">
                <div className="col-5">
                    <label for="exampleInputPassword1" class="form-label" min="8" max="20">Password( Between 8-20 characters)</label>
                </div>
                <div className="col-5">
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
            </div>
            <br></br>

            <button type="submit" class="btn btn-primary">Log in</button>
        </form></>
    )
}

export default Login;