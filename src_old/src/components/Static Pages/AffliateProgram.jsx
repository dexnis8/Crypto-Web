import React from "react";
import styled from "styled-components";
import Navbar from "../Landingpage/Navbar";
import "./AffliateTableStyles.css";
import Footer from "../Landingpage/Footer";
import { useNavigate } from "react-router-dom";

function AffliateProgram() {
  const navigate = useNavigate();
  return (
    <ContainerFluid>
      <HeroSection>
        <NavContainer>
          <Navbar />
        </NavContainer>
        <Container>
          <TextContainer>
            <h1>EVA Affliate </h1>
            <span>
            Monetize your traffic and earn a commission when you connect EvaPayments to new users. For every connection you build between new users and Evapayments, you get a percentage of their profit. The more connections made the more reward you get.

            </span>
            <button onClick={() => (window.location.href = "#plans")}>
              See Plans
            </button>
          </TextContainer>
          <ImageContainer>
            <img src="./images/refer.png" alt="" />
          </ImageContainer>
        </Container>
      </HeroSection>
      <h3 id="plans">Become Our Partner and Get a Reward! </h3>
      <Container2 id="plans">
        <table>
          <thead>
            <tr>
              <th>Affliate level</th>
              <th>Total merchant turnover</th>
              <th>Reward</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>0.1 — 5 BTC/month</td>
              <td>0.1% per transaction</td>
            </tr>
            <tr>
              <td>2</td>
              <td>5 — 10 BTC/month</td>
              <td>0.15% per transaction</td>
            </tr>
            <tr>
              <td>3</td>
              <td>10 — 25 BTC/month</td>
              <td>0.2% per transaction</td>
            </tr>
            <tr>
              <td>4</td>
              <td>25 — 50 BTC/month</td>
              <td>0.25% per transaction</td>
            </tr>
            <tr>
              <td>5</td>
              <td>50+ BTC/month</td>
              <td>Exclusive individual offer</td>
            </tr>
          </tbody>
        </table>
      </Container2>
      <Button>
        <button onClick={() => navigate("/login")}>Start Reffering</button>
      </Button>
      <Footer />
    </ContainerFluid>
  );
}
const Container2 = styled.div`
  max-width: 100%;
  width: 1128px;
  /* padding: 1rem; */
  margin: 2rem auto;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 /15%);
  border-radius: 5px;
`;
const ContainerFluid = styled.div`
  overflow: hidden;
  h3 {
    text-align: center;
    margin-top: 3rem;
  }
`;
const HeroSection = styled.div`
  background: #061a40;
  height: 100%;
  width: 100vw;
  margin-bottom: 4rem;
  @media (max-width: 1000px) {
    height: 100%;
  }
`;
const Button = styled.div`
  button {
    margin: 1rem auto;
    text-align: center;
    display: flex;
    justify-content: center;
    border: none;
    transition: 0.3s ease-in-out;
    padding: 16px 32px;
    font-size: 18px;
    color: #fff;
    background: #f43b47;
    border-radius: 5px;
    margin-bottom: 5rem;
  }
`;
const Container = styled.div`
  padding-top: 2rem;
  max-width: 100%;
  width: 1128px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap-reverse;
  align-content: center;
  justify-content: space-between;
  row-gap: 1rem;
  @media (max-width: 992px) {
    padding: 1rem;
  }
`;
const TextContainer = styled.div`
  color: #fff;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  width: 500px;
  align-content: center;
  row-gap: 1rem;
  h1 {
    font-size: 56px;
    font-weight: 700;
    line-height: 1.3;

    @media (max-width: 460px) {
      font-size: 40px;
    }
  }
  button {
    border: none;
    transition: 0.3s ease-in-out;
    padding: 16px 32px;
    font-size: 18px;
    color: #fff;
    background: #f43b47;
    border-radius: 5px;
    margin-top: 1rem;
    width: 200px;
    

    :hover {
      background-image: linear-gradient(to left, #ff1361 0%, #f43b47 100%);
    }
    /* @media (max-width: 1000px) {
      width: 100%;
    } */
    @media (max-width: 460px) {
      font-size: 16px;
      padding: 8px 16px;
    }
  }
  @media (max-width: 1000px) {
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`;
const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const NavContainer = styled.div`
  padding-top: 10px;
`;

export default AffliateProgram;
