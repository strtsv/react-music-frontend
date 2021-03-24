import React from "react";

import Header from "../components/Header";

import Bio from "../components/Biography/Bio";
import Featured from "../components/Biography/Featured";
import Testimonials from "../components/Biography/Testimonials";

import Footer from "../components/Footer";

const Biography = () => {
  return (
    <div className="page animated">
      <Header />
      <Bio />
      <Featured />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Biography;
