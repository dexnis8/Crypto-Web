import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <ContainerFluid>
      <Container>
        <Header>
          <h1>About Us </h1>
          <span>Thinking why you should choose us?</span>
        </Header>
        <Hero>
          <HeroImage>
            <img src="./images/img10.jpg" alt="" />
          </HeroImage>
          <HeroText>
            <h3>You want the best? Choose Us</h3>
            <SubHeroText>
              Alpha wallet works directly with OpenSea,CryptoKitties among NFT
              marketplaces and blockchain games.Easy To Earn Money – There are
              many ways to earn money in our site such as faucet, shortlinks,
              ptc, tasks, offerwalls,Level up your account and climb the
              leaderboard to earn more money and unlock new features. We pay you
              instantly or daily to your wallet or microwallet addresses.
            </SubHeroText>
            <HeroButtons>
              <Button>Read More</Button>
              {/* <Button>How it works</Button> */}
            </HeroButtons>
          </HeroText>
        </Hero>
      </Container>
    </ContainerFluid>
  );
};

const ContainerFluid = styled.div`
  padding: 50px 0;
  color: rgba(0, 0, 0, 0.7);
  background: #f5f5f5;
  margin-bottom:4rem;

`;
const Header = styled.div`
  text-align: center;
  h1 {
    font-weight: 300;
  }
  span {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 32px;
    }
    span {
      font-size: 18px;
    }
  }
`;
const Hero = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-self: center;
  h3 {
    font-size: 30px;
    font-weight: 300;
    line-height: 1.3;
    font-family: verdana;
  }
  @media (max-width: 965px) {
    width: 98%;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    align-content: center;
  }
  @media (max-width: 400px) {
    h3 {
      font-size: 20px;
      font-weight:bold;
    }
  }
`;
const SubHeroText = styled.span`
  font-size: 16px;
  width: 100%;
  margin-top: -10px;
  line-height: 2;
  margin-top: 10px;

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
  border: 1px solid #f43b47;
  transition: 0.3s ease-in-out;
  padding: 16px 32px;
  font-size: 18px;
  background: none;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-image: linear-gradient(to left, #f43b47 0%, #453a94 100%);
    border: none;
    color: #fff;
  }
`;
const HeroImage = styled.div`
  width: 40%;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 965px) {
    width: 90%;
    height: 90%;
  }
`;

export default About;
