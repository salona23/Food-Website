import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [reactButton, setReactButton] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header flex justify-between items-center shadow-lg">
      <div className="logo-container">
        <img className="logo w-[175px]" src={LOGO_URL} alt="food logo" />
      </div>
      <div className="nav-items">
        <ul className="flex">
          <li className="m-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="m-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="m-4">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="m-4">Cart</li>
          <li className="m-4">
            <button
              className="px-2 bg-green-300 rounded-lg"
              onClick={() => {
                if (reactButton == "Login") {
                  setReactButton("Logout");
                } else {
                  setReactButton("Login");
                }
              }}
            >
              {reactButton}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
