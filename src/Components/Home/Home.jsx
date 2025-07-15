import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

import Footer from "./Footer";

const Home = () => {
  return (
    <div className="h-full ">
      <div className="">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>

      <Footer></Footer>
    </div>
  );
};

export default Home;
