import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSeparator from "@/components/AnimatedSeparator";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();
  return (
    <div className="flex flex-col min-h-0">
      <Navigation />
      <main className="flex-1 w-full mx-auto px-2 sm:px-4 lg:px-0 max-w-7xl">
        <section className="scroll-animate"><Hero /></section>
        <section className="scroll-animate"><About /></section>
        <AnimatedSeparator />
        <section className="scroll-animate"><Experience /></section>
        <AnimatedSeparator />
        <section className="scroll-animate"><Projects /></section>
        <AnimatedSeparator />
        <section className="scroll-animate"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
