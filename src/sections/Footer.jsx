import { Dot, Github, Twitter, X } from "lucide-react";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { FOOTER_LINKS } from "../lib/config";

const Footer = () => {
  return (
    <Section>
      <Container>
        <footer className="flex flex-col sm:flex-row gap-20 justify-between">
          <FooterLinks />
          <About />
        </footer>
      </Container>
    </Section>
  );
};

const About = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <a href="/">
        <img src="/logo.svg" className="w-10" />
      </a>

      <span className="text-slate-500 flex items-center gap-3">
        @ {new Date().getFullYear()} Cruip.com
        <Dot className="text-slate-500" size={10} /> Terms
      </span>

      <div className="flex items-center  gap-2">
        <a href="#0">
          <X className="text-primary-600" />
        </a>
        <a href="#0">
          <Github className="text-primary-500" />
        </a>
      </div>
    </div>
  );
};

const FooterLinks = () => {
  return (
    <div className="flex justify-between gap-y-10 gap-x-5 flex-wrap flex-1 ">
      {FOOTER_LINKS.map((linkGroup) => (
        <div
          key={linkGroup.title}
          className="flex basis-[fit-content] flex-col gap-4"
        >
          <h3 className="text-white font-semibold">{linkGroup.title}</h3>
          <div className="flex flex-col gap-2">
            {linkGroup.items.map((link) => (
              <a
                key={link}
                href={"#0"}
                className="text-slate-500 text-sm hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
