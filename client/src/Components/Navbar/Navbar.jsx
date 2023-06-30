import "./Navbar.css";
import profile from "./Jaimin.jpeg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const [pic,setPic]=useState(user? localStorage.getItem("profilePic"):null);
  const PF="http://localhost:3000/images/"

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.setItem("jwtToken", null);
    localStorage.setItem("profilePic", null);

    
  };
  return (
    <div className="Navbar">
      <div className="leftNav">
        <i className="navIcons fa-brands fa-twitter-square"></i>
        <i className="navIcons fa-brands fa-facebook-square"></i>
        <i className="navIcons fa-brands fa-pinterest-square"></i>
        <i className="navIcons fa-brands fa-instagram-square"></i>
      </div>
      <div className="middleNav">
        <ul className="navList">
          <li className="navItems">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
         
          <li className="navItems">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="navItems">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="navItems logout" onClick={logoutHandler}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="rightNav">
        {user ? (
          <Link to="/settings">
            <img
            className="navImage"
            src={user && (PF+pic)}
          ></img>
          </Link>
        ) : (
          <ul className="navList">
            <li className="navItems">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
            <li className="navItems">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        )}
        <i className="navSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
