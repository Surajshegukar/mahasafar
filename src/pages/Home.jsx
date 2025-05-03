import React from "react";
import Hero from "../component/home/Hero";
import Features from "../component/home/Features";
import Destination from "../component/home/Destination";
import Blogs from "../component/home/Blogs";
import UniqueExperience from '../component/home/UniqueExperience'



export default function Home() {

  return (
    <>
      <Hero title="Unforgettable Itineraries, Powered by Maha Trip" subtitle=" Tell us your dream destination, and our AI will expertly craft the perfect trip tailored just for you." />
      <Features />
      <Destination />
      <UniqueExperience />
      
      {/* <Blogs /> */}
    </>
  );
}
