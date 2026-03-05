import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import WhoWeAre from "./components/WhoWeAre";
import ContactUs from "./components/ContactUs";

const App = () => {
    return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <WhoWeAre />
      <ContactUs/>
    </div>
  );
};

export default App;
