import { Card, Col, Nav, Row } from "react-bootstrap";
import "./ourShop.css";
import shops from "../../../data/shops";

const ShopCard = () => {
  const specificshop = shops.filter(
    (el) =>
    el.id == 1 ||
    el.id == 2 ||
    el.id == 3
  );

  return (
    <>
      <Row className="justify-content-sm-center">
        {specificshop.map((shop) => {
          return (
            <Col lg={4} sm={6} key={shop.id} className="d-flex justify-content-center">
              <Card className="card-item text-center align-items-center mt-5">
                <Card.Img
                  variant="top"
                  src={shop.icon}
                  className="card-icon w-50"
                />
                <Card.Body>
                  <Card.Title className="">{shop.title}</Card.Title>
                  <Card.Text className="fw-bold fs-24 mt-lg-3">{shop.description}</Card.Text>
                  <Nav.Link href="/orderForm" className="btn btn-w-180 m-auto mt-lg-5 text-uppercase">{shop.btn}</Nav.Link>
                </Card.Body>
              </Card>
            </Col>
           );
         })}
      </Row>
    </>
  );
};

export default ShopCard;
