import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

import Footer from "./Footer";
import Services from "./Services";
import MembershipPlans from "./MembershipPlans";
import Emergency from "./Emergency";

const Home = () => {
  return (
    <div className="h-full ">
      <div className="">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <Services></Services>
      <MembershipPlans></MembershipPlans>
      <Emergency></Emergency>
      <Footer></Footer>
    </div>
  );
};

export default Home;
