import { useEffect, useRef } from "react";

/**
 * useSpotlight - A React hook that adds spotlight effect to card containers
 * No external CSS needed - styles are injected automatically!
 */
const useSpotlight = (options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const config = {
      hoverGlowColor: options.hoverGlowColor || "hsla(200, 100%, 50%, 0.2)",
      cardSelector: options.cardSelector || "[data-spotlight-card]",
      glowColor: options.glowColor || "hsla(200, 100%, 50%, 0.8)",
      transitionDuration: options.transitionDuration || "0.3s",
      hoverGlowSize: options.hoverGlowSize || "500px",
      glowSize: options.glowSize || "500px",
      borderSize: options.borderSize || "1px",
      borderRadius: options.borderRadius || "10px", 
    };

    console.log(config.borderSize);
    // Inject CSS styles (only once) :
    const injectStyles = () => {
      // if (document.getElementById("spotlight-styles")) return;

      if (document.getElementById("spotlight-styles")) document.getElementById("spotlight-styles").remove();
      
      const style = document.createElement("style");
      style.id = "spotlight-styles";
      style.textContent = `
        [data-spotlight-card] {
          padding: ${config.borderSize};
          position: relative;
          border-radius: ${config.borderRadius};
        }

        [data-spotlight-card-content] ,[data-spotlight-card-content]  {
          z-index: 2;
          width: 100%;
          height: 100%;
          position: relative;
          border-radius: inherit;
        }

        [data-spotlight-card]::after,
        [data-spotlight-card]::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          width: 100%;
          height: 100%;
          background-color: transparent;
          transition: opacity var(--spotlight-transition) ease;
          pointer-events: none;
          border-radius: inherit;
        }

        [data-spotlight-card]::before {
          background: radial-gradient(
            var(--spotlight-glow-size) circle at var(--mouse-x) var(--mouse-y),
            var(--spotlight-glow-color),
            transparent 40%
          );
          z-index: 1;
        }

        [data-spotlight-card]::after {
          background: radial-gradient(
            var(--spotlight-hover-glow-size) circle at var(--mouse-x) var(--mouse-y),
            var(--spotlight-hover-glow-color),
            transparent 50%
          );
          z-index: 3;
        }

        .spotlight-container:hover [data-spotlight-card]::before {
          opacity: 1;
        }

        [data-spotlight-card]:hover::after {
          opacity: 1;
        }
      `;
      document.head.appendChild(style);
    };

    // Setup cards
    const setupCards = () => {
      const cards = container.querySelectorAll(config.cardSelector);

      cards.forEach((card) => {
        card.classList.add("spotlight-card");

        card.style.setProperty("--spotlight-glow-color", config.glowColor);
        card.style.setProperty("--spotlight-glow-size", config.glowSize);
        card.style.setProperty(
          "--spotlight-hover-glow-color",
          config.hoverGlowColor
        );
        card.style.setProperty(
          "--spotlight-hover-glow-size",
          config.hoverGlowSize
        );
        card.style.setProperty(
          "--spotlight-transition",
          config.transitionDuration
        );
      });
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      const cards = container.querySelectorAll(config.cardSelector);

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    // Initialize
    injectStyles();
    container.classList.add("spotlight-container");
    setupCards();
    container.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.classList.remove("spotlight-container");

      const cards = container.querySelectorAll(config.cardSelector);
      cards.forEach((card) => {
        card.classList.remove("spotlight-card");
      });
    };
  }, [
    options.borderSize,
    options.glowColor,
    options.glowSize,
    options.hoverGlowColor,
    options.hoverGlowSize,
    options.transitionDuration,
    options.cardSelector,
    options.borderRadius,
  ]);

  return containerRef;
};

export default useSpotlight;
