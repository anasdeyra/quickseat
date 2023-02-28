import ContactForm from "../components/pages/home/ContactForm";
import Hero from "../components/pages/home/Hero";
import Pricing from "../components/pages/home/Pricing";
import Solutions from "../components/pages/home/Solutions";
import WhoWeServe from "../components/pages/home/WhoWeServe";

export default function Home() {
  return (
    <div className="min-[1000px]:pt-40 pt-24 text-center relative">
      <Hero />
      <Solutions />
      <Pricing />
      <WhoWeServe />
      <ContactForm />
    </div>
  );
}
