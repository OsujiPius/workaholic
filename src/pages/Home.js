import React from "react";
import HomeBanner from "../components/molecules/HomeBanner";
import HomeHero from "../components/molecules/HomeHero";
import HomeStats from "../components/molecules/HomeStats";
import HomeJobCategory from "../components/molecules/HomeJobCategory";
import HomeReview from "../components/molecules/review";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeJobCategory />
      <HomeStats />
      <HomeBanner />
      <HomeReview />
    </>
  );
}
