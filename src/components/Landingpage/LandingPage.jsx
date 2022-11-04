import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import styled from "styled-components";
// import { Container } from "@mui/system";
import NextHero from "./NextHero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import HowSection from "./HowSection";
import About from "./About";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <Main>
      <ContainerFluidHero>
        <Navbar />
        <HeroSection />
      </ContainerFluidHero>
      <NextHero />
      <Section1 />
      <Section2 />
      <HowSection />
      {/* <About /> */}
      <Footer />
    </Main>
  );
};

const ContainerFluidHero = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 3rem;
  background-image: linear-gradient(to left, #003559  100%, #f43b47 100%);
  /* background-image: linear-gradient(to left, #f43b47 0%, #003559  60%); */
`;
const Main = styled.div``;
export default LandingPage;
