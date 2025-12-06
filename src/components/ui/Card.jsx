import { cn } from "../../lib/utils";

const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-xl bg-card-500 border border-slate-700/50 shadow-card p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
