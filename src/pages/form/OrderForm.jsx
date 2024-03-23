import { Col, Container, FloatingLabel, Form, Nav, Row } from "react-bootstrap";
import "./orderForm.css";
import { useState } from "react";
import InputMask from "react-input-mask";

const OrderForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [price, setPrice] = useState("");

  function handlePhone(event) {
    setPhoneNumber(event.target.value);
  }

  function handleEmail(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);
    if (!isValid) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    const domain = email.split("@")[1];
    const popularEmailProviders = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "icloud.com",
    ];

    if (!popularEmailProviders.includes(domain)) {
      setEmailError(
        "Please use a valid email (e.g., Gmail, Yahoo, Hotmail, etc)."
      );
      return;
    }

    setEmailError("");
  }

  const handlePriceChange = (event) => {
    // Handle price change
    setPrice(event.target.value);
  };

  return (
    <>
      <section className="form-page pt-lg-5">
        <Container>
          <div className="form_heading">
            <h1 className="section-heading primary text-center">
              Please fill the form
            </h1>
          </div>
          <Row className="justify-content-center">
            <Col lg={6}>
              <form action="" className="order_form mt-lg-5">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Name"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="Your name" required />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Quantity"
                  className="mb-3"
                >
                  <Form.Control type="number" placeholder="Quantity" required />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Price"
                  className="mb-3"
                >
                  <InputMask
                    className="form-control"
                    mask="PKR: 999999"
                    maskChar=""
                    value={price}
                    onChange={handlePriceChange}
                    placeholder="PKR ____"
                    required
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={handleEmail}
                    required
                  />
                  <Form.Text className="text-danger">{emailError}</Form.Text>
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Phone Number"
                  className=""
                >
                  <InputMask
                    className="form-control"
                    id="phone"
                    name="phone"
                    mask="+\92 399 9999999"
                    value={phoneNumber}
                    onChange={handlePhone}
                    placeholder="+92 3__ ___ ____"
                    required
                  />
                </FloatingLabel>
              </form>
            </Col>
          </Row>

          <div className="order_form-btn d-flex justify-content-center mt-lg-5">
            <Nav.Link href="#" className="btn btn-w-180 text-uppercase">
              Confirm order
            </Nav.Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OrderForm;
