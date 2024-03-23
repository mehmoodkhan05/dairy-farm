import { Col, Container, FloatingLabel, Form, Nav, Row } from "react-bootstrap";
import "./orderForm.css";
import { useRef, useState } from "react";
import InputMask from "react-input-mask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const OrderForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  // const nameRef = useRef(null);
  // const quantityRef = useRef(null);
  // const priceRef = useRef(null);
  // const emailRef = useRef(null);
  // const phoneRef = useRef(null);

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

  const form = useRef();

  const handleConfirmOrder = () => {
    if (!name || !quantity || !price || !email || !phoneNumber || emailError) {
      toast.error(
        "Please fill the form completely before confirming the order."
      );
    } else {
      emailjs
        .sendForm(
          "service_39lofma",
          "template_an6xo1i",
          form.current,
          "P58IWqdPakNLk072l"
        )
        .then(
          () => {
            toast.success("Your order is confirmed you will be contact shortly!");
            setName("");
            setQuantity("");
            setPrice("");
            setEmail("");
            setPhoneNumber("");
          },
          (error) => {
            console.error("Failed to send email:", error);
            toast.error("Failed to confirm order. Please try again later.");
          }
        );
    }
  };

  return (
    <>
      <section className="form-page">
        <Container>
          <div className="form_heading">
            <h3 className="primary fs-48 text-center">Please fill the form</h3>
          </div>
          <Row>
            <Col lg={6}>
              <div className="d-flex justify-content-center mt-lg-5">
                <img
                  src="/src/assets/images/products/product-1.jpg"
                  width={320}
                  alt=""
                />
              </div>

              <table className="table table-responsive table-bordered">
                <thead>
                  <tr>
                    <th>
                      <b>Product:</b>
                    </th>
                    <th>Pecorino Romano</th>
                  </tr>

                  <tr>
                    <th>
                      <b>Price:</b>
                    </th>
                    <th>$18.90 - $38.00</th>
                  </tr>
                </thead>
              </table>
            </Col>

            <Col lg={6}>
              <form action="" ref={form} className="order_form">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="Your name"
                    name="user_name"
                    // ref={nameRef}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Quantity"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="Quantity"
                    name="quantity"
                    // ref={quantityRef}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                  />
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
                    name="price"
                    // ref={priceRef}
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
                    name="email"
                    // ref={emailRef}
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
                    mask="+\92 399 9999999"
                    name="phone"
                    // ref={phoneRef}
                    value={phoneNumber}
                    onChange={handlePhone}
                    placeholder="+92 3__ ___ ____"
                    required
                  />
                </FloatingLabel>
              </form>
              <div className="order_form-btn d-flex justify-content-center mt-lg-5">
                <Nav.Link
                  href="#"
                  className="btn btn-w-180 text-uppercase"
                  onClick={handleConfirmOrder}
                >
                  Confirm order
                </Nav.Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ToastContainer />
    </>
  );
};

export default OrderForm;
