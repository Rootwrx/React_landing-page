import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { H1, Lead } from "../components/ui/Typography";

const Hero = () => {
  return (
    <Section>
      <Container className="relative text-white  text-center flex flex-col  items-center gap-10">
        <H1 className="text-gradient">
          AI-driven tools for product teams
        </H1>
        <Lead>
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </Lead>

        <div className="flex gap-2 w-[500px]  [&_button]:basis-2/6 justify-center flex-wrap ">
          <Button>start building</Button>
          <Button variant={"secondary"}>schedule demo</Button>
        </div>
      </Container>

      <div className="mt-12">
        <Container>
          <img src="/hero-image-01.jpg" className="rounded-xl " />
        </Container>
      </div>
    </Section>
  );
};

export default Hero;
