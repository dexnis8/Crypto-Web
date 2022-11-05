import React from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <ContainerFluid>
      <Container>
        <Hero>
          <HeroText>
            <h1>Process payments with EASE</h1>
            <SubHeroText>
              Helping small and large businesses to expand their horizons by
              removing border barriers and allowing an access to clients from
              anywhere in the world.
            </SubHeroText>
            <HeroButtons>
              <Button active={true} onClick={() => navigate("/register")}>
                Get Started
              </Button>
              <Button>How it works</Button>
            </HeroButtons>
          </HeroText>
          <HeroImage>
            <img src="/images/header.png" alt="hero image" />
          </HeroImage>
        </Hero>
      </Container>
    </ContainerFluid>
  );
};
const ContainerFluid = styled.div`
padding-bottom:-2rem;
`;
const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const HeroText = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 50%;
  align-self: center;
  margin-top:-4rem;
  h1 {
    font-size: 64px;
    font-weight: bold;
    line-height: 1.3;

    @media (max-width: 460px) {
      font-size: 40px;
    }
  }
  @media (max-width: 965px) {
    width: 98%;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    align-content: center;
  }
`;
const SubHeroText = styled.span`
  font-size: 20px;
  width: 80%;
  margin-top: 10px;
  line-height: 1.5;

  @media (max-width: 965px) {
    width: 100%;
  }
`;
const HeroButtons = styled.div`
  display: flex;
  column-gap: 20px;
  margin-top: 2rem;
  @media (max-width: 965px) {
    align-self: center;
    justify-self: center;
  }
`;
const Button = styled.button`
  border: none;
  transition: 0.3s ease-in-out;
  padding: 16px 32px;
  font-size: 18px;
  color: #fff;
  background: ${(props) => (props.active ? "#ff5a5f" : "none")};
  border-radius: 5px;
  cursor: pointer;
  border: ${(props) => (props.active ? "none" : "1px solid #006daa")};
  transition: 0.3s ease-in-out;

  :hover {
    color: #fff;
    border: none;
    background-image: linear-gradient(to left, #ff1361 0%, #f43b47 100%);
  }
  @media (max-width: 460px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;
const HeroImage = styled.div`
  width: 40%;
  height: 100%;
  margin-bottom:-3rem;
  z-index:1;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 965px) {
    display: none;
  }
`;

export default HeroSection;
