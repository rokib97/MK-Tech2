import React from "react";
import Carousel from "./Carousel";
import Experts from "./Experts";
import Reviews from "./Reviews";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Carousel />
      <Services />
      <Experts />
      <Reviews />
    </>
  );
};

export default Home;
