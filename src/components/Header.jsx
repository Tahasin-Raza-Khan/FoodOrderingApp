//Title
import { useState } from "react";
import logo from "../images/food_villa.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

export const Title = () => (
  <>
    <div className="food-villa">
      <Link to="/">
        <img src={logo} alt="logo image" />
      </Link>
    </div>
  </>
);

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <div className="header">
        <Title />
        <div className="restro-name">
          <h2>Food Villa</h2>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Tooltip title="Home" arrow>
                <Link className="header-button" to="/">
                  <HomeIcon />
                </Link>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="About Us" arrow>
                <Link className="header-button" to="/about">
                  <InfoIcon />
                </Link>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Contact Us" arrow>
                <Link className="header-button" to="/contact">
                  <ContactMailIcon />
                </Link>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Add to Cart" arrow>
                <Link className="header-button" to="/cart">
                  <ShoppingCartIcon />
                </Link>
              </Tooltip>
            </li>
            <li>
              {isLoggedIn ? (
                <Tooltip title="Profile" arrow>
                  <AccountCircleSharpIcon
                    onClick={() => {
                      setIsLoggedIn(false);
                    }}
                  />
                </Tooltip>
              ) : (
                <Tooltip title="Login" arrow>
                  <div>
                    <LogoutIcon
                      onClick={() => {
                        setIsLoggedIn(true);
                      }}
                    />
                  </div>
                </Tooltip>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

//  export default Header;
