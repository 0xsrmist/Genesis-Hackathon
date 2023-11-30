import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Conference from "./components/Conference/Conference";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <div className="flex flex-col gap-y-20 p-2 w-full">
        <Navbar />
        <Hero />
        <AboutUs />
        {/* <Conference /> */}
        <Footer />
      </div>
    </>
  );
}


export default App;
