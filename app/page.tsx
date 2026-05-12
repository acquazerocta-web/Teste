import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import SessionInfo from "@/components/SessionInfo";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIs />
        <HowItWorks />
        <Benefits />
        <About />
        <SessionInfo />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
