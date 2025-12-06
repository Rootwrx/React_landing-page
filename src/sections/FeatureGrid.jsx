import Card from "../components/ui/Card";
import SectionHeader from "../components/ui/SectionHeader";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { FEATURES_DATA } from "../lib/config";

const FeatureGrid = () => {
  return (
    <Section>
      <Container>
        <SectionHeader
          heading="Advanced Controls "
          h3=" Built for modern product teams "
          p="Open AI reads and understands your files, and with nothing more than a single line of feedback, so you can go further than the speed of thought. "
        />

        <div className="mt-20 flex justify-center">
          <img src="/features.png" className="max-w-[1000px] object-cover" />
        </div>

        <FeaturesCards />
      </Container>
    </Section>
  );
};

const FeaturesCards = () => {
  return (
    <div className="grid  sm:mt-5 md:mt-10 lg:mt-15 grid-cols-2 gap-5 gap-y-15">
      {FEATURES_DATA.map((card, index) => (
        <Card
          key={index}
          className="flex flex-col gap-3 md:gap-x-20 bg-transparent border-none shadow-none p-0"
        >
          <card.icon size="24" className="text-primary-500" />
          <h4 className="text-white font-semibold"> {card.title} </h4>

          <p className="max-w-[350px] text-indigo-200! text-[14px]! ">
            {card.description}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default FeatureGrid;
