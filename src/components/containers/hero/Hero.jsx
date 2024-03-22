import { Container } from "react-bootstrap";
import "./hero.css";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="overlay-image">
          <img src="/src/assets/images/hero-bg.jpg" alt="bg" />
        </div>

        <Container>
          <div className="typed-text-container text-center section-heading">
            <TypeAnimation
              className="hero_type-animation"
              sequence={[
                "Welcome to our Farm",
                1000,
                "Explore our Listings",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
