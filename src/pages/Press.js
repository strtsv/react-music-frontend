import React from "react";

import Header from "../components/Header";
import LatestNews from "../components/Press/LatestNews";
import LatestPressReleases from "../components/Press/LatestPressReleases";
import HotVideos from "../components/Press/HotVideos";

import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="page animated">
      <Header />
      <LatestNews />
      <LatestPressReleases />
      <HotVideos />
      <Footer />
    </div>
  );
};

export default About;
