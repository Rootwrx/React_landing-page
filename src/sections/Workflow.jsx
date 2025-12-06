import SectionHeader from "../components/ui/SectionHeader";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { WORKFLOW_ITEMS } from "../lib/config";
import useSpotlight from "../hooks/useSpotlight";

const Workflow = () => {
  return (
    <Section>
      <Container>
        <SectionHeader
          heading={"Tailored Workflows "}
          h3=" Map your product journey "
          p=" Simple and elegant interface to start collaborating with your team in minutes. It seamlessly integrates with your code and your favorite programming languages. "
        />
        <WorkFlowCards />
      </Container>
    </Section>
  );
};

const WorkFlowCards = () => {
  const containerRef = useSpotlight({
    glowColor: "hsla(200, 100%, 50%, 0.8)",
    hoverGlowColor: "hsla(200, 100%, 50%, 0.2)",
    glowSize: "500px",
    hoverGlowSize: "500px",
  });

  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] justify-items-center content-center gap-6 mt-20"
      ref={containerRef}
    >
      {WORKFLOW_ITEMS.map((card, index) => (
        <WorkFlowCard
          key={index}
          img={card.img}
          tag={card.tag}
          text={card.text}
        />
      ))}
    </div>
  );
};

const WorkFlowCard = ({ img, tag, text }) => {
  return (
    <article
      data-spotlight-card
      className="bg-slate-700  md:w-auto max-w-[300px]  rounded-2xl"
    >
      <div data-spotlight-card-content className="px-3 py-7  bg-card-500">
        <div>
          <img src={img} alt={tag} />
        </div>

        <span className="px-3 py-0.5 flex w-fit rounded-full bg-card-500 border border-card-400/30">
          <span className="text-gradient text-xs capitalize">{tag}</span>
        </span>

        <p className="text-sm! mt-5">{text}</p>
      </div>
    </article>
  );
};

export default Workflow;
