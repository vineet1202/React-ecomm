import React from "react";

import Hero from "../Components/Hero";
import ProudProducts from "../Components/ProudProducts";
import Banner from "../Components/Banner";
import TrendingSlider from "../Components/TrendingSlider";
import BannerReverse from "../Components/BannerReverse";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <ProudProducts />
      <Banner />
      <TrendingSlider />
      <BannerReverse />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
