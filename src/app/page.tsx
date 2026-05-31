import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBand from "@/components/MarqueeBand";
import Pillars from "@/components/Pillars";
import Methodology from "@/components/Methodology";
import Programs from "@/components/Programs";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#000000" }}>
      <Navbar />
      <Hero />
      <MarqueeBand />
      <Pillars />
      <Methodology />
      <Programs />
      <About />
      <Stats />
      <Testimonials />
      <Gallery />
      <CTASection />
      <Footer />
    </main>
  );
}
