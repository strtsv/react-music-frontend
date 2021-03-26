import React from "react";

import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import Player from "../components/Home/Player";
import Post from "../components/Home/Post";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Hero />
      <Player />
      <Post />
      <Footer />
    </div>
  );
};

export default Home;
