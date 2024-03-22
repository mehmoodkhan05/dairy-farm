import { Card, Col, Row, Nav } from "react-bootstrap";
import "./products.css";
import products from "../../../data/products";

const ProductsCard = () => {
  const specificproducts = products.filter(
    (el) =>
      el.id == 1 ||
      el.id == 2 ||
      el.id == 3
  );
  return (
    <>
      <Row>
        {specificproducts.map((product) => {
          return (
            <Col lg={4} key={product.id}>
              <Card className="card-item text-center border-0 align-items-center mt-lg-5">
                <Card.Img
                  variant="top"
                  src={product.icon}
                  className="card-icon rd-50 w-50"
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        <div className="products_btn text-center">
          <Nav.Link className="btn btn-w-228">
            view all products
          </Nav.Link>
        </div>
      </Row>
    </>
  );
};

export default ProductsCard;
