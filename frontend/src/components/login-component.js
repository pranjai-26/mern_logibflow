import React, {Component} from 'react';
import Home from './home-component';
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from 'react';

function Login({ setToken }) {

    const navigate = useNavigate();    

    const [invalid, changeInvalid] = useState("")

    const login = async (e) => {
        e.preventDefault();

        const user = {
            email: e.target[0].value,
            password: e.target[1].value
        }

        axios.post("http://localhost:5000/login", user)
        .then(res => {
            if(res.data.message == "Success") {
                const token = res.data.user;
                console.log(token);
                setToken(token);
                localStorage.setItem("loginflow_token", token);
                navigate("/");
            }
            else {
                // alert(res.data.message);
                changeInvalid(res.data.message);
            }
        })
        .catch(err => {
             console.log(err);
             // alert("Something went wrong. Please try again later.");
             changeInvalid("Something went wrong. Please try again later.");
             e.target.reset();
             setToken("");
        });
    }

    return (
        <form onSubmit= {(e) => {login(e)}} className="text-center" class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" >
                    E-mail:
                    <input type="email" required name="email" class="form-control" id="exampleInputEmail1" placeholder="name@example.com"/>
                </label>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                    Password:
                    <input type="password" name="password" required minLength={8} class="form-control" id="exampleInputPassword1"/>
                    <p>Min. 8 characters required</p>
                </label>
            </div>
            <div class="mb-3">
                <input type="submit" value="Login" class="btn btn-primary" />
            </div>
            <div class="p-3 text-warning-emphasis ">
                {invalid}
            </div>
        </form> 
    )
}

export default Login;