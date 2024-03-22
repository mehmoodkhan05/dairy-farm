import { Container } from "react-bootstrap"
import "./ourShop.css"
import ShopCard from "./ShopCard"

const OurShop = () => {
  return (
    <>
      <section className="shop-section">
        <Container>
          <h1 className="section-heading text-center primary">Our Shop</h1>
          <ShopCard />
        </Container>
      </section>
    </>
  )
}

export default OurShop