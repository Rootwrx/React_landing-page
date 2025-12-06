import { useState } from "react";
import { CAROUSEL_IMAGES } from "../../lib/config";
import ShowcaseTabs from "../../sections/ShowcaseTabs";

const Carousel = () => {
  const [active, setActive] = useState(0);

  const handleClick = (index) => (index === active ? null : setActive(index));

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Tabs */}
      <ShowcaseTabs active={active} onClick={handleClick} />

      <article className="relative h-[500px] w-full overflow-hidden">
        <img
          key={"active-" + active}
          src={CAROUSEL_IMAGES[active]}
          className="absolute inset-0 w-full h-full object-contain animate-fade-in"
        />
      </article>
    </div>
  );
};
export default Carousel;
