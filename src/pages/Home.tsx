import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-black">
        <Navbar />
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
}
