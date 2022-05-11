import Navbar from "./Navbar";
import Login from "./Login";
import { NavLink } from "react-router-dom";
import "./style.css";
const email_validation = () => {
    var email = document.getElementById("email").value;
    var email_div = document.getElementById("email_div");
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!validRegex.test(email)) {
        email_div.innerHTML = "invalid email" ;
        email_div.style.color = "red";
  
        // alert("invalid email in box number:"+parseInt(i+1))
  
        return;
      } else {
        email_div.innerHTML = "";
      }
}

const name_validation = () => {
    var name = document.getElementById("name").value;
    var name_div = document.getElementById("name_div");

    var regex_name = /^[A-Za-z ]{3,200}$/;

    if (regex_name.test(name)) {
      document.getElementById("name_div").innerHTML = "";
    } else {
      document.getElementById("name_div").innerHTML =
        "Name should not contain number or special characters and more then 3 charactres required";
      name_div.style.color = "red";
      return;
    }
    

}

const phone_validaton = () => {
    var phone_div = document.getElementById("phone_div");
    var phone = document.getElementById("phone").value;

    const regex3 = /^\d{10}$/gims;
    if (!regex3.test(phone) || phone < 0) {
      phone_div.innerHTML = "Invalid Phone Number";
      phone_div.style.color = "red";
      return;
    } else {
      phone_div.innerHTML = "";
    }
}

const callme = () => {
    
    email_validation();
    name_validation();
    phone_validaton();
    

}

const Register = () => {

    return (
        <>
           {/* <form action="" > */}
           <div className="login-main">
        <div className="login">
            <div className="login-line">
                <div className="login-text">
                    <p>Resigster</p>
                </div>
            </div>
            <div className="login-box">
                <div className="login-box-mid">
                    <br />
                    <label >Name:</label>
                    <br />

                    <input type="text" name="" id="name" placeholder="Name" />
                    <br/>
                    <lable id="name_div" className="label-right" ></lable>
                    <br />

                    <label  className="label">Email:</label>
                    <br />
                    <input type="email" name="" id="email" placeholder="Email" />
                    <br />
                    <lable id="email_div" className="label-right" ></lable>
                    <br />

                    <label  className="label">Contact:</label>
                    <br />
                    <input type="text" name="" id="phone" placeholder="Contact" />
                    <br/>
                    <lable id="phone_div" className="label-right" ></lable>
                    <br />

            
                    <label  className="label">Password:</label>
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />

                    <button type="submit" id="btn" onClick={callme}>Register</button>
                    <div className="not-member">
                <p>Already a member? <a href="login.html">Login</a></p>
            </div>
                </div>
            </div>
            
        </div>
    </div>

            {/* </form>  */}

            
        </>
    );
};

export default Register;