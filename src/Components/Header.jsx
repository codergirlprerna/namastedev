import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [BtnNameReact, setBtnNameReact] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>

        <button
          className="login"
          onClick={() => {
            BtnNameReact === "login"
              ? setBtnNameReact("logout")
              : setBtnNameReact("login");
          }}
        >
          {BtnNameReact}
        </button>
      </div>
    </div>
  );
};

export default Header;
