//Title
import { useState,useContext } from "react";
import logo from "../images/food_villa.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import userContext from "../utils/store/context/usercontext";
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";

export const Title = () => (
  <>
    <Link to="/">
      <img className="h-28 py-1 px-3" src={logo} alt="logo image" />
    </Link>
  </>
);

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const {user}= useContext(userContext);
  const itemAdded = useSelector((store)=>store.cart.items)
  console.log("itemAdded", itemAdded)
  return (
    <>
      <div className="flex justify-between bg-rose-50 shadow-md">
        <Title />
        <div className="restro-name">
          <h2 className="text-rose-700 text-3xl py-11 font-bold">Food Villa</h2>
        </div>
        
          <ul className="flex py-11">
            <li className="px-2">
              <Tooltip title="Home" arrow>
                <Link className="header-button" to="/">
                  <HomeIcon />
                </Link>
              </Tooltip>
            </li>
            <li className="px-2">
              <Tooltip title="About Us" arrow>
                <Link className="header-button" to="/about">
                  <InfoIcon />
                </Link>
              </Tooltip>
            </li>
            <li className="px-2">
              <Tooltip title="Contact Us" arrow>
                <Link className="header-button" to="/contact">
                  <ContactMailIcon />
                </Link>
              </Tooltip>
            </li>
            <li className="px-2">
              <Tooltip title="Add to Cart" arrow>
                <Link className="header-button" to="/cart">
                  <Badge badgeContent={itemAdded.length} color="success">
                  <ShoppingCartIcon />
                  </Badge>
                </Link>
              </Tooltip>
            </li>
            <li className="px-2">
            <h3 className="text-rose-700 font-bold">{isLoggedIn ?user.name: "Login"}</h3>
            </li>
            <li className="px-2">
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
    </>
  );
};

//  export default Header;
