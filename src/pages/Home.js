import React from "react";
import HomeBanner from "../components/molecules/HomeBanner";
import HomeHero from "../components/molecules/HomeHero";
import HomeStats from "../components/molecules/HomeStats";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeBanner />
    </>
  );
}
