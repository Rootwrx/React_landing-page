import ButtonGroup from "../components/ui/ButtonGroup";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { H3 } from "../components/ui/Typography";

const CTA = () => {
  return (
    <Section
      className={
        "bg-linear-to-r from-slate-800/10 via-slate-700 to-transparent"
      }
    >
      <Container className={"text-center "}>
        <H3 className={"text-6xl"}>Join the content-first platform</H3>

        <ButtonGroup/>
      </Container>
    </Section>
  );
};

export default CTA;
