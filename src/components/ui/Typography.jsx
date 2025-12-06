import { cn } from "../../lib/utils";

export const H1 = ({ className, children, ...props }) => {
  return (
    <h1
      className={cn(
        "text-white capitalize text-4xl lg:text-5xl font-extrabold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ className, children, ...props }) => {
  return (
    <h2
      className={cn(
        "text-white text-3xl lg:text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ className, children, ...props }) => {
  return (
    <h3
      className={cn(
        "text-xl sm:text-2xl md:text-3xl font-bold text-slate-300",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ className, children, ...props }) => {
  return (
    <h4
      className={cn("text-white font-semibold text-lg", className)}
      {...props}
    >
      {children}
    </h4>
  );
};

export const Paragraph = ({ className, children, ...props }) => {
  return (
    <p
      className={cn(
        "text-slate-500 text-base md:text-lg leading-relaxed max-w-[750px]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export const Lead = ({ className, children, ...props }) => {
  return (
    <p
      className={cn(
        "text-slate-500 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-[700px]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
