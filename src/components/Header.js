import { LOGO_URL } from "./../utils/constants";
import { useState } from "react";

const Header = () => {
  let [buttonName, setButtonName] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                if (buttonName === "login") {
                  buttonName = "logout";
                } else {
                  buttonName = "login";
                }
                setButtonName(buttonName);
              }}
            >
              {buttonName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
