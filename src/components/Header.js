import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

 // useEffect if no dependency array it means it will be called on every render of component
 // if dependency array is empty then use effect is called on only initial render and just once
//  if dependency array has value useEffect will be called everytime when value is updated.


  useEffect(() => {
    console.log("useEffect called");
  },[btnName]);

  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <button
            className="auth-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
