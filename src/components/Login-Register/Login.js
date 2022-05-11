import Navbar from "./Navbar";
import Register from "./Register";
import { NavLink } from "react-router-dom";
import "./style.css"

const Login = () => {
  
    return (
       <>
        <div className="login-main">
        <div className="login">
            <div className="login-line">
                <div className="login-text">
                    <p>Login</p>
                </div>
            </div>
            <div className="login-box">
                <div className="login-box-mid">
                    <a href="index.html">
                        <img src="image/logo.png" alt="" width="250ox" />
                    </a>
                    <br/>
                    <label htmlFor="">Email</label>
                    <br/>
                    <input type="text" name="" id="email" />
                    <br/>
                    <lable id="email_div" style="display:none"></lable>
                    
                    <br/>
                    <label htmlFor="">Password</label>
                    <br />
                    <input type="Password" name="" id="pass" />
                    <br />
                    <a href="">
                        <button id="btn">PROCEED</button>
                    </a>
                </div>
            </div>
            <div className="not-member">
                <p>Not a member? <a href="register.html">Login</a></p>
            </div>
        </div>
        </div>
       </>
    );
};

export default Login;