import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuList = ["Women", "Men", "Baby", "Home", "Sale", "Sustainability"];

  return (
    <div>
      <div className="nav-side">
        <Link to="/login" className="login">
          <FontAwesomeIcon icon={faUser} />
          <span className="nav-side-title">Login</span>
        </Link>
        <div>
          <FontAwesomeIcon icon={faHeart} />
          <span className="nav-side-title">Like</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCartShopping} />
          <span className="nav-side-title">Cart</span>
        </div>{" "}
      </div>

      <Link to="/" className="logo">
        <img
          className="logo"
          width="100"
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          alt="Brand logo"
        />
      </Link>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products"
          aria-label="Search"
          name="q"
          className="search-input"
        />{" "}
        <span className="search-bar-icon">
          {" "}
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>

      <div className="nav-menu">
        {menuList.map((menu, i) => {
          return (
            <Link to={`/products/${menu}`} key={i}>
              {menu}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
