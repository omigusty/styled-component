import React from "react";
import {
  AboutSection,
  Footer,
  HeroSection,
  Navbar,
  ProductSection,
  StatsSection,
  SubscribeSection,
} from "../components/index";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <AboutSection />
      <StatsSection />
      <SubscribeSection />
      <Footer />
    </>
  );
}
