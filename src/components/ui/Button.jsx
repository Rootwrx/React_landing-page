import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils"; // optional helper

const buttonStyles = cva(
  "px-4 py-2 rounded-md font-medium text-nowrap capitalize transition-colors focus:outline-none ",
  {
    variants: {
      variant: {
        primary: "bg-primary-600  text-white hover:bg-primary-700",
        secondary:
          "bg-slate-700  border border-slate-600 text-white hover:bg-slate-600",
        outline: "border border-slate-600 text-slate-200 hover:bg-slate-700/20",
        destructive: "bg-red-600 text-white hover:bg-red-700",
      },

      size: {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-5 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export default function Button({
  children,
  variant,
  size,
  className,
  ...props
}) {
  return (
    <button
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
