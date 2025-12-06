import { cn } from "../../lib/utils";

const Container = ({ className, children }) => {
  return <div className={cn(`container`, className)}>{children}</div>;
};

export default Container;
