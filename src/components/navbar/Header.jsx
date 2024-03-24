import { Container, Nav, Navbar } from "react-bootstrap";
import "./header.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className="header-section">
        <Navbar expand="lg" className="navbar-main" fixed="top">
          <Container>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className={`navbar-toggler d-lg-none ms-auto ${
                isMenuOpen ? "open" : ""
              }`}
              onClick={handleMenuClick}
            >
              <span className="">{isMenuOpen ? <FaTimes /> : <FaBars />}</span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/" className="">
                  Home
                </Nav.Link>
                <Nav.Link href="/products" className="ms-lg-4">
                  Products
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
