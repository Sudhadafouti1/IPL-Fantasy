import Navbar from "../Navbar";
import Register from "./Register";
import { NavLink } from "react-router-dom";
import "./style.css"
const Login = () => {
    return ( <
        >
        <
        div class = "login-main" >
        <
        div class = "login" >
        <
        div class = "login-line" >
        <
        div class = "login-text" >
        <
        p > Login < /p> < /
        div > <
        /div> <
        div class = "login-box" >
        <
        div class = "login-box-mid" >
        <
        a href = "index.html" >
        <
        img src = "image/logo.png"
        alt = ""
        width = "250ox" / >
        <
        /a> <
        br / >
        <
        label
        for = "" > Email or Mobile No: < /label> <
        br / >
        <
        input type = "text"
        name = ""
        id = "" / >
        <
        br / >
        <
        a href = "menu.html" >
        <
        button id = "btn" > PROCEED < /button> < /
        a > <
        /div> < /
        div > <
        div class = "not-member" >
        <
        p > Not a member ? < NavLink to = "/Register" > Register < /NavLink></p >
        <
        /div> < /
        div > <
        /div> < / >
    );
};

export default Login;