import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Container, Offcanvas, Nav } from "react-bootstrap";

const Navbar = ({ login, setLogin, setAuthenticate }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuList = ["Women", "Men", "Baby", "Home", "Sale", "Sustainability"];
  const inputEl = useRef(null);
  console.log("input", inputEl);

  const handleClose = () => setShowMenu(false);
  const handleShow = () => setShowMenu(true);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const query = e.target.value;
      navigate(`/products?q=${query}`);
    }
  };

  const handleSearchButton = () => {
    const query = inputEl.current.value;
    navigate(`/products?q=${query}`);
  };

  useEffect(() => {}, []);

  const HandleLogin = () => {
    if (login !== "Login") {
      setLogin("Login");
      setAuthenticate(false);
      navigate("/login");
    }
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

          <Link to="/" className="logo">
            <img
              width={100}
              src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
              alt="Brand logo"
            />
          </Link>

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
            <span className="nav-side-title" onClick={HandleLogin}>
              {login}
            </span>
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
          ref={inputEl}
          type="text"
          placeholder="Search products"
          aria-label="Search"
          name="q"
          className="search-input"
          onKeyDown={(e) => handleSearch(e)}
        />{" "}
        <FontAwesomeIcon
          onClick={handleSearchButton}
          className="search-bar-icon"
          icon={faMagnifyingGlass}
        />
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
