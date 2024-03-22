import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
// import config from "../../config";
import { Link } from "react-router-dom";
import config from "../../config";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <Container className="">
          <Row className="">
            <Col lg={4} className="d-flex align-items-center">
              <div className="footer-logo">
                <Link to="">
                  <img src={config.logo} alt="" className="footer_logo" />
                </Link>
              </div>
            </Col>

            <Col lg={4} className="lh-50">
              <h4 className="white">In the Kitchen</h4>
              <div>
                <Link to="#" className="text-decoration-none footer_links">
                  Recipes
                </Link>
              </div>

              <div>
                <Link to="#" className="text-decoration-none footer_links">
                  Organic Milk
                </Link>
              </div>

              <div>
                <Link to="#" className="text-decoration-none footer_links">
                  Flavored Milk
                </Link>
              </div>

              <div>
                <Link to="#" className="text-decoration-none footer_links">
                  Ask Our Dietitian
                </Link>
              </div>
            </Col>

            <Col lg={4} className="lh-50">
              <h4 className="white">About Us</h4>
              <div>
                <Link to="#" className="text-decoration-none footer_links">
                  FAQ
                </Link>
              </div>

              <div>
                <Link to="#" className="text-decoration-none footer_links">
                  Our Board
                </Link>
              </div>

              <div>
                <Link to="#" className="text-decoration-none footer_links">
                  Our Staff
                </Link>
              </div>

              <div>
                <Link to="#" className="text-decoration-none footer_links">
                  Contact Us
                </Link>
              </div>
            </Col>
          </Row>

          <div className="footer_bottom-span text-center">
            <span>Copyright to Dairy Farm 2024. All Rights Reserved.</span>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
