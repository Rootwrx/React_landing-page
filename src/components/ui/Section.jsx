import { cn } from "../../lib/utils";

const Section = ({ className, children }) => {
  return (
    <section className={cn(`py-15 relative`, className)}>{children}</section>
  );
};

export default Section;
