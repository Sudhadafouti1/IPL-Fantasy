import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return ( 
      <>
      <div class="cover_main">
        <div class="cover">
            <div class="nav_main">
                <div class="nav">
                    <div class="nav_item nav-color">
                        <a href="">Matches</a>
                    </div>
                    <div class="nav_item">
                        <a href="">Videos</a>
                    </div>
                    <div class="nav_item">
                        <a href="">States</a>
                    </div>
                    <div class="nav_item">
                        <a href="">Pointes Table</a>
                    </div>
                    <div class="nav_item">
                        <a href="">Fantasy</a>
                    </div>
                    <div class="nav_item">
                        <a href="">Teams</a>
                    </div>
                    <div class="nav_item">
                        <a href="">News</a>
                    </div>
                    <div class="nav_item margin_right">
                        <a href="">More</a>
                    </div>

                    <div class="link right">
                        <NavLink to = "/Login" > Login </NavLink>
                    </div>
                    <div class="link">
                        <NavLink to = "/Register" > Register </NavLink>
                    </div>
                </div>
            </div>
            <div class="big_man_main">
                <div class="big_man">
                    <p> Experience the<br/> best Bidding Site ever</p>

                </div>
                <div class="ride_main">
                    <div class="rider">
                        <div class="ride">
                            <div class="ride_1 ride-pro">
                                <a href="">Create Teams </a>
                            </div>
                            <div class="ride_1">
                                <a href="">Bid on your fav Sports</a>
                            </div>
                            <div class="ride_1">
                                <a href="">Choose your best player</a>
                            </div>
                            <div class="ride_1">
                                <a href="">Rules</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    </div>
    <div class="flight_main">

        <div class="flight">
            <div class="flight_form">
                <div class="input">

                    <input type="text" placeholder="Search Matches"/>
                </div>
                <div class="input">

                    <input type="text" placeholder="Match date"/>
                </div>


                <div class="input">
                    <select>
                        <option value="Guest">Select Player </option>
                    </select>
                </div>
                <div class="input button_find">

                    <a href="">Bid Now!</a>
                </div>
            </div>
        </div>
    </div>

   
    
      </>
    );
};

export default Navbar;