import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

function Header() {
  return (
    <header>
      <NavLink to={"/"}>
        <h1>Logo</h1>
      </NavLink>
      <nav>
        <NavLink to={"/"}>home</NavLink>
        <NavLink to={"/about"}>about</NavLink>
        <NavLink to={"/contact"}>contact</NavLink>
      </nav>
      <div className="user-actions">
        <Link>
          <FaUser />
        </Link>
        <Link>
          <FaShoppingCart />
        </Link>
      </div>
    </header>
  );
}

export default Header;
