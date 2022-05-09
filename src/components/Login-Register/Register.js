import Navbar from "../Navbar";
import Login from "./Login";
import { NavLink } from "react-router-dom";
import "./style.css"
const Register = () => {
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
        br / >
        <
        label
        for = "" > Name: < /label> <
        br / >

        <
        input type = "text"
        name = ""
        id = "" / >
        <
        br / >

        <
        label
        for = ""
        class = "label" > Email: < /label> <
        br / >
        <
        input type = "text"
        name = ""
        id = "" / >
        <
        br / >

        <
        label
        for = ""
        class = "label" > Password: < /label> <
        br / >
        <
        input type = "password"
        name = ""
        id = "" / >
        <
        br / >
        <
        button id = "btn" > Register < /button> < /
        div > <
        /div> <
        div class = "not-member" >
        <
        p > Already a member ? < NavLink to = "/Login" > Login < /NavLink></p >
        <
        /div> < /
        div > <
        /div> < / >
    );
};

export default Register;