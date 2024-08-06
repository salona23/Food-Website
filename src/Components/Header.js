import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
const Header = () => {
    let [reactButton,setReactButton] = useState("Login");

    return  (
    <div className="header">
      {console.log("header render")}

      <div className="logo-container">
      <img className="logo"
       src={LOGO_URL} alt="food logo" />
      </div>
      <div className="nav-items">
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li>Cart</li>
              <li><button className="login-btn" onClick={
                ()=>{
                    if(reactButton == "Login"){
                        setReactButton("Logout");
                    }else{
                        setReactButton("Login");
                    }
                    
                    console.log(reactButton);
              }
            }
              >{reactButton}</button></li>
          </ul>
      </div>
    </div>
  );

  
};

export default Header;