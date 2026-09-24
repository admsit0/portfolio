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
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 w-full pt-16">
        <section className="scroll-animate"><Hero /></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="scroll-animate"><About /></section>
          <AnimatedSeparator />
          <section className="scroll-animate"><Experience /></section>
          <AnimatedSeparator />
          <section className="scroll-animate"><Projects /></section>
          <AnimatedSeparator />
          <section className="scroll-animate"><Contact /></section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
