import { Calendar, Flag, GitBranch, Search, Target, Users } from "lucide-react";

const CAROUSEL_IMAGES = [
  "/carousel-01.png",
  "/carousel-02.png",
  "/carousel-03.png",
];

const CAROUSEL_ITEMS = [
  {
    title: "strategic sync",
    description:
      "remove corners from the avatars and transform the way your team work",
  },
  {
    title: "Feedback Loop",
    description:
      "Best-in-class design practices to keep your work safe and secure.",
  },
  {
    title: "Enterprise-Ready",
    description:
      "Built for teams of all sizes. From early-stage startups to global enterprises.",
  },
];

const WORKFLOW_ITEMS = [
  {
    img: "/workflow-01.png",
    tag: "built-in tools",
    text:
      "Streamline the product development flow with a content platform that's aligned across specs and insights.",
  },
  {
    img: "/workflow-02.png",
    tag: "scale instantly",
    text:
      "Streamline the product development flow with a content platform that's aligned across specs and insights.",
  },
  {
    img: "/workflow-03.png",
    tag: "tailored flows",
    text:
      "Streamline the product development flow with a content platform that's aligned across specs and insights.",
  },
];

const FOOTER_LINKS = [
  {
    title: "Product",
    items: [
      "Features",
      "Integrations",
      "Pricing & Plans",
      "Changelog",
      "Our method",
      "User policy",
    ],
  },
  {
    title: "Company",
    items: [
      "About us",
      "Diversity & Inclusion",
      "Blog",
      "Careers",
      "Financial statements",
    ],
  },
  {
    title: "Resources",
    items: ["Community", "Terms of service", "Report a vulnerability"],
  },
  {
    title: "Content Library",
    items: [
      "Templates",
      "Tutorials",
      "Knowledge base",
      "Learn",
      "Cookie manager",
    ],
  },
];

const FEATURES_DATA = [
  {
    title: "Project Milestones",
    description:
      "Track progress across custom flows for your team. Find the right balance for the user, privacy and security.",
    icon: Flag,
  },
  {
    title: "Team Views",
    description:
      "Track progress across custom flows for your team. Find the right balance for the user, privacy and security.",
    icon: Users,
  },
  {
    title: "Advanced Search",
    description:
      "Track progress across custom flows for your team. Find the right balance for the user, privacy and security.",
    icon: Search,
  },
  {
    title: "Strategic Initiatives",
    description:
      "Track progress across custom flows for your team. Find the right balance for the user, privacy and security.",
    icon: Target,
  },
  {
    title: "Flexible Workflows",
    description:
      "Track progress across custom flows for your team. Find the right balance for the user, privacy and security.",
    icon: GitBranch,
  },
  {
    title: "Unified Timeline",
    description:
      "Track progress across custom flows for your team. Find the right balance for the user, privacy and security.",
    icon: Calendar,
  },
];

const PRICING_DATA = [
  {
    name: "Freelancer",
    priceMonthly: 9,
    priceAnnual: 108,
    billing: "Per user/month, billed annually",
    included: [
      "50 users per month",
      "Email, Live Chat, WhatsApp",
      "Unlimited dashboards",
      "Custom integrations",
    ],
  },
  {
    name: "Small Team",
    priceMonthly: 29,
    priceAnnual: 348,
    billing: "Per user/month, billed annually",
    included: [
      "Everything in Freelancer",
      "No seat limits",
      "Real-time space syncing",
      "Automatic data enrichment",
      "Custom billing",
    ],
  },
  {
    name: "Business",
    priceMonthly: 49,
    priceAnnual: 588,
    billing: "Per user/month, billed annually",
    tag: "Popular",
    included: [
      "Everything in Small Team",
      "Adjustable permissions",
      "Unlimited reporting",
      "Bulk email sending",
      "Priority support",
    ],
  },
  {
    name: "Enterprise Team",
    priceMonthly: 89,
    priceAnnual: 1068,
    billing: "Per user/month, billed annually",
    included: [
      "Everything in Business",
      "Strongest connection",
      "First calendar interaction",
      "Historical attributes",
      "Time comparisons",
    ],
  },
];
export {
  CAROUSEL_IMAGES,
  CAROUSEL_ITEMS,
  WORKFLOW_ITEMS,
  PRICING_DATA,
  FEATURES_DATA,
  FOOTER_LINKS,
};
