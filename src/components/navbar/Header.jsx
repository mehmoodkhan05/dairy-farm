import { Container, Nav, Navbar } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header-section">
        <Navbar expand="lg" className="navbar-main" fixed="top">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/" className="">Home</Nav.Link>
                <Nav.Link href="/products" className="ms-4">Products</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
