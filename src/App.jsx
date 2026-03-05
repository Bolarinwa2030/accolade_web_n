import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import WhoWeAre from "./components/WhoWeAre";
import ContactUs from "./components/ContactUs";
import Footers from "./components/Footers";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <WhoWeAre />
      <ContactUs />
      <Footers />
    </div>
  );
};

export default App;
