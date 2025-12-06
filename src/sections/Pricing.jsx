import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import { H3, H4 } from "../components/ui/Typography";
import useSpotlight from "../hooks/useSpotlight";
import { useState } from "react";
import Button from "../components/ui/Button";
import Divider from "../components/ui/Divider";
import { Check } from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader";
import { cn } from "../lib/utils";
import { PRICING_DATA } from "../lib/config";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const toggleBillingCycle = () => {
    setBillingCycle((prev) => (prev === "monthly" ? "annual" : "monthly"));
  };

  return (
    <Section>
      <Container>
        <SectionHeader
          className={"text-center"}
          heading={" Simple Pricing "}
          h3={" Pick the right plan for your business "}
        />

        <BillingToggle
          billingCycle={billingCycle}
          toggleBillingCycle={toggleBillingCycle}
        />
        <PricingCards billingCycle={billingCycle} />
        <ReviewCard />
      </Container>
    </Section>
  );
};

const BillingToggle = ({ toggleBillingCycle, billingCycle }) => {
  return (
    <button
      className="flex  mt-6 cursor-pointer text-slate-500 items-center gap-3 mx-auto "
      onClick={toggleBillingCycle}
    >
      <span>Billed Annually</span>
      <span
        className={`rounded-full h-6 w-10  flex items-center p-0.5 relative ${
          billingCycle === "monthly" ? "bg-primary-600" : "bg-slate-600"
        }   `}
      >
        <span
          className={cn(
            `rounded-full h-5 w-5  transition-all block bg-white absolute `,
            billingCycle === "monthly" ? "right-0.5" : "left-0.5"
          )}
        />
      </span>
      <span>Billed Monthly</span>
    </button>
  );
};

const PricingCards = ({ billingCycle }) => {
  return (
    <div className="grid relative  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-17  gap-4 ">
      {PRICING_DATA.map((card) => (
        <PricingCard key={card.name} card={card} billingCycle={billingCycle} />
      ))}

      <img
        src="/blurred-shape.svg"
        className="absolute top-3/4 left-1/2 -translate-x-2/5"
      />
    </div>
  );
};

const ReviewCard = () => {
  return (
    <div className="flex mt-20 items-center mx-auto max-w-[750px]  flex-col gap-4 text-center">
      <img src="/review-person.jpg" className="rounded-full w-15" />
      <H4>
        “Open PRO lives up to its name. It's incredibly easy to use yet powerful
        enough to handle all my content needs effortlessly. It's become an
        essential part of our work routine.”
      </H4>

      <span className="flex items-center gap-1">
        <span className="text-white">Chris Pick</span>
        <span className="text-primary-800">- VP of Product,Disney</span>
      </span>
    </div>
  );
};

const PricingCard = ({ card, billingCycle }) => {
  const { name, priceMonthly, priceAnnual, billing, included, tag } = card;
  const price = billingCycle === "monthly" ? priceMonthly : priceAnnual;
  return (
    <div
      className={`relative h-full max-w-[400px]  rounded-xl ${
        tag ? "shadow-primary-500/20 shadow-lg" : ""
      }`}
    >
      <div
        className={`backdrop-blur-md bg-slate-700/10 h-full rounded-[inherit] p-6 flex flex-col border gap-5 ${
          tag ? " border-primary-600" : "border-slate-800"
        }`}
      >
        <div className="flex justify-between items-center">
          <H4>{name}</H4>

          {tag && (
            <span className="bg-primary-950 text-primary-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-primary-900/50">
              {tag}
            </span>
          )}
        </div>

        <div className="flex items-baseline gap-1">
          <span className="text-slate-400 font-light">$</span>
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-slate-500 text-sm">
            / {billingCycle === "monthly" ? "mo" : "yr"}
          </span>
        </div>

        <p className="text-sm text-slate-400">{billing}</p>

        <Button variant={tag ? "primary" : "secondary"} className="w-full">
          Start Free Trial
        </Button>

        <Divider className="my-6 opacity-50" />

        <div className="flex flex-col gap-3">
          {included.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="p-0.5 rounded-full bg-primary-500/10 text-primary-400 mt-0.5">
                <Check size={14} strokeWidth={3} />
              </span>
              <span className="text-slate-300 text-sm leading-tight">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
