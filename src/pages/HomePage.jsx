import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import { TechStackShowcase } from "@/components/home/TechStackShowcase";
import { Contact } from "@/components/home/Contact";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { Certificate } from "../components/home/Certificates";

const HomePage = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Certificate />
      <Projects />
      <TechStackShowcase />
      <Contact />
    </>
  );
};

export default HomePage;
