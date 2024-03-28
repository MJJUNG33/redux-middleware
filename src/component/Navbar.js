import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Container, Offcanvas, Nav } from "react-bootstrap";

const Navbar = ({ login }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuList = ["Women", "Men", "Baby", "Home", "Sale", "Sustainability"];

  const handleClose = () => setShowMenu(false);
  const handleShow = () => setShowMenu(true);

  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  return (
    <div>
      <Container className="d-flex top-nav">
        <div className="d-flex">
          <FontAwesomeIcon
            icon={faBars}
            className="d-md-none mt-1"
            onClick={handleShow}
          />

          <div className="logo" onClick={home}>
            <img
              width={100}
              src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
              alt="Brand logo"
            />
          </div>

          <Offcanvas
            show={showMenu}
            onHide={handleClose}
            placement="start"
            className="d-md-none"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="ms-1">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column nav-menu">
                {menuList.map((menu, i) => (
                  <Nav.Link
                    key={i}
                    href={`/products/${menu}`}
                    onClick={handleClose}
                  >
                    {menu}
                  </Nav.Link>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        <div className="nav-side">
          <Link to="/login" className="nav-side-item">
            <FontAwesomeIcon icon={faUser} />
            <span className="nav-side-title">{login}</span>
          </Link>
          <Link to="/like" className="nav-side-item">
            <FontAwesomeIcon icon={faHeart} />
            <span className="nav-side-title">Like</span>
          </Link>
          <Link to="/Cart" className="nav-side-item">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="nav-side-title">Cart</span>
          </Link>{" "}
        </div>
      </Container>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products"
          aria-label="Search"
          name="q"
          className="search-input"
        />{" "}
        <FontAwesomeIcon className="search-bar-icon" icon={faMagnifyingGlass} />
      </div>

      <Nav className="nav-menu d-none d-md-flex">
        {menuList.map((menu, i) => (
          <Nav.Link key={i} href={`/products/${menu}`}>
            {menu}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default Navbar;
