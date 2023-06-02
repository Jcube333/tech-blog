import "./Navbar.css";
import profile from "./Jaimin.jpeg";
import { Link } from "react-router-dom";

export default function Navbar() {
  let user = true;
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
            <Link className="link" to="/settings">
              Settings
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
          <li className="navItems">{user && "Logout"}</li>
        </ul>
      </div>
      <div className="rightNav">
        {user ? (
          <img className="navImage" src={profile}></img>
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
