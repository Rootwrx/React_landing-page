import { cn } from "../../lib/utils";
import styles from "./Heading.module.css";

const Heading = ({ children, className }) => {
  return (
    <h2
      className={cn(
        `text-gradient  text-sm text-center  ${styles.heading}`,
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
