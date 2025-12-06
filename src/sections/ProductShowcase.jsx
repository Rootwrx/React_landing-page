import Carousel from "../components/ui/Carousel";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const ProductShowcase = () => {
  return (
    <Section>
      <Container className={"pl-5"}>
        <Carousel />
      </Container>
    </Section>
  );
};
export default ProductShowcase;
