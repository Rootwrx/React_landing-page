import { Check } from "lucide-react";
import { CAROUSEL_ITEMS } from "../lib/config";
import { cn } from "../lib/utils";
import Heading from "../components/ui/Heading";

function ShowcaseTabs({ onClick, active }) {
  return (
    <div className="pl-5">
      <div className={`flex  flex-col  gap-5 `}>
        <Heading className="w-fit ml-20 text-gradient">
          Software Standard
        </Heading>
        <h3 className="text-3xl font-semibold text-slate-300">
          Improve efficiency & global coverage
        </h3>
        <p>
          Open is so simple to use, it's easy to overlook the wealth of complex
          technologies packed under the hood that keep Open robust, safe, and
          blazing fast.
        </p>
      </div>

      <article className="flex flex-col gap-6 mt-6">
        {CAROUSEL_ITEMS.map((item, i) => (
          <button
            onClick={() => onClick(i)}
            key={i}
            className="flex cursor-pointer gap-7 items-start"
          >
            <Check
              className={`shrink-0 ${
                active == i ? "text-indigo-600" : "text-slate-500"
              }`}
              size={20}
            />

            <span
              className={cn(
                "opacity-40 text-left hover:opacity-60 transition-opacity",
                active === i && "opacity-100 hover:opacity-100"
              )}
            >
              <span className="text-white">{item.title}</span>
              <span className="text-indigo-300"> - </span>
              <span className="text-indigo-300 ">{item.description}</span>
            </span>
          </button>
        ))}
      </article>
    </div>
  );
}
export default ShowcaseTabs;