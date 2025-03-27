import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import LatestJob from "../components/LatestJob";
import Category from "../components/Category";
import JobLocation from "../components/JobLocation";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="bg-homepage4"></div>
        <HeroSection/>
        <LatestJob/>
        {/* <Category/> */}
        <JobLocation/>
        <Footer/>
      </main>
    </>
  );
}

export default Home;
