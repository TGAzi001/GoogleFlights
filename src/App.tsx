import React from "react";
import Hero from "./components/Hero"
import MapComponent from "./components/Map"
import Airlines from "./components/Airlines";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MapComponent />
      <Airlines />
      <Footer />
    </main>
  )
}
