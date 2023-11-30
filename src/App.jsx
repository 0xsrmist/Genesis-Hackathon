import Faqs from "./components/faqs/Faqs.jsx";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Conference from "./components/Conference/Conference";
import Footer from "./components/footer/Footer";
import Sponsors from "./components/sponsors/Sponsors.jsx";
import Prizes from "./components/prizes/Prizes.jsx";
import Tracks from "./components/tracks/Tracks.jsx";
import Hackathon from "./components/hackathon/Hackathon.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col gap-y-20 p-2 w-full">
        <Navbar />
        <Hero />
        <AboutUs />
        <Conference />
        <Hackathon/>
        <Prizes/>
        <Tracks/>
        <Sponsors/>
        <Faqs/>
        <Footer />
      </div>
    </>
  );
}


export default App;
