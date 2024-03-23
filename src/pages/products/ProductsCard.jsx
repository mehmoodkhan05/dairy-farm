import { Card, Col, Nav, Row } from "react-bootstrap";
import "./products.css"
import shops from "../../data/shops"

const ProductsCard = () => {
  return (
    <>
        <Row>
        {shops.map((shop) => {
          return (
            <Col lg={4} key={shop.id} className="">
              <Card className="card-item text-center align-items-center mt-lg-5">
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
  )
}

export default ProductsCard