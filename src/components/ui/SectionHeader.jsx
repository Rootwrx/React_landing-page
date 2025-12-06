import { cn } from "../../lib/utils";
import Heading from "./Heading";
import { H3, Paragraph } from "./Typography";

const SectionHeader = ({ className, heading, h3, p }) => {
  return (
    <div className={cn(`flex  flex-col items-center gap-5 `, className)}>
      <Heading> {heading} </Heading>
      <H3 className="text-center">
        {h3}
      </H3>
      {p && <Paragraph className="text-center">{p}</Paragraph>}
    </div>
  );
};

export default SectionHeader;
