import React, { useState } from "react";
// import "./navbar.css";
import "./style.css"
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return ( 
      <>
      <div className="cover_main">
        <div className="cover">
            <div className="nav_main">
                <div className="nav">
                    <div className="nav_item nav-color">
                        <a href="">Home</a>
                    </div>
                    <div className="nav_item">
                        <a href="">Matches</a>
                    </div>
                   
                  
                    
                    <div className="nav_item">
                        <a href="">News</a>
                    </div>
                    <div className="nav_item margin_right">
                        <a href="">More</a>
                    </div>
                    <div className="nav_item margin_right">
                        <a href="">About</a>
                    </div>
                    <div className="nav_item margin_right">
                        <a href="">Contact us</a>
                    </div>

                    <div className="link right">
                        <NavLink to = "/Login" > Login </NavLink>
                    </div>
                    <div className="link">
                        <NavLink to = "/Register" > Register </NavLink>
                    </div>
                </div>
            </div>
            <div className="big_man_main">
                <div className="big_man">
                    <p> Experience the<br/> best Bidding Site ever</p>

                </div>
               

            </div>

        </div>


    </div>
    
    
      </>
    );
};

export default Navbar;