import { useState } from "react";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="mt-5">
      <Container className="relative">
        <div className="relative">
          <div className="border border-slate-600  rounded-lg  bg-card-500/5 backdrop-blur-xs w-full flex items-center justify-between h-15 px-4 gap-4">
            <a href="/">
              <img src="/logo.svg" />
            </a>

            <ul className="hidden   md:flex [&_a]:capitalize text-white  gap-3   items-center justify-center">
              <li>
                <a href="#0">pricing</a>
              </li>
              <li>
                <a href="#0">about us</a>
              </li>
              <li>
                <a href="#0">blog</a>
              </li>
              <li>
                <a href="#0">help center</a>
              </li>
              <li>
                <a href="#0">resources</a>
              </li>
            </ul>

            <div className="flex gap-2 items-center  justify-end ">
              <Button size={"sm"} variant={"secondary"}>
                login
              </Button>
              <Button size={"sm"}>sign up</Button>
              {/* Nav Toggler  */}
              <button
                className="md:hidden cursor-pointer grid p-1 text-slate-500"
                onClick={() => setIsMenuOpen((p) => !p)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Menu Mobile  */}

          {isMenuOpen && (
            <div className="mt-3  z-10  left-0 absolute md:hidden w-full  bg-card-500/80 backdrop-blur-xs py-5 px-5 border border-slate-600 rounded-lg ">
              <ul className="[&_a]:capitalize text-white grid gap-5  [&_a]:block [&_a]:w-full ">
                <li>
                  <a href="#0">pricing</a>
                </li>
                <li>
                  <a href="#0">about us</a>
                </li>
                <li>
                  <a href="#0">blog</a>
                </li>
                <li>
                  <a href="#0">help center</a>
                </li>
                <li>
                  <a href="#0">resources</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
