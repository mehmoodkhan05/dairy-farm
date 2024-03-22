import { Container } from "react-bootstrap";
import "./products.css";
import ProductsCard from "./ProductsCard";

const Products = () => {
  return (
    <>
      <section className="products-section">
        <Container>
          <h1 className="section-heading text-center primary">Products</h1>
          <ProductsCard />
          
        </Container>
      </section>
    </>
  );
};

export default Products;
