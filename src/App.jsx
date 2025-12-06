import FeatureGrid from "./sections/FeatureGrid";
import Header from "./layouts/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import ProductShowcase from "./sections/ProductShowcase";
import Divider from "./components/ui/Divider";
import Workflow from "./sections/Workflow";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
const App = () => {
  return (
    <main className="min-h-screen font-poppins relative overflow-x-hidden bg-body-500">
      <div className="absolute top-0  left-[50%] translate-x-[-50%] ">
        <img
          src="/page-illustration.svg"
          className=" h-auto max-w-none pointer-events-none"
        />
      </div>
      <Header />
      <Hero />
      <Workflow />

      <Divider />

      <FeatureGrid />

      <Divider />

      <ProductShowcase />

      <Divider />

      <Pricing />

      <CTA />

      <Footer />
    </main>
  );
};

export default App;
