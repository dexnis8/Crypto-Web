import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";

const HowSection = () => {
  return (
    <ContainerFluid>
      <Container>
        <Header>
          <span>How it Works</span>
          <p>Accept payments and donations with our tools</p>
        </Header>
        <ItemsContainer>
          <Items>
            <Number>
              <span> </span>
            </Number>
            <ImageContainer>
              <img src="./images/1.png" alt="" />
            </ImageContainer>
            <p>
              Manage and track the performance of your affiliate links right
              from your Eva pay account.
            </p>
          </Items>
          <Items>
            <Number>
              <span> </span>
            </Number>
            <ImageContainer>
              <img src="./images/2.png" alt="" />
            </ImageContainer>
            <p>
              Manage and track the performance of your affiliate links right
              from your Eva pay account.
            </p>
          </Items>

          <Items>
            <Number>
              <span> </span>
            </Number>
            <ImageContainer>
              <img src="./images/3.png" alt="" />
            </ImageContainer>
            <p>
              {" "}
              Manage and track the performance of your affiliate links right
              from your Eva pay account.
            </p>
          </Items>
        </ItemsContainer>
      </Container>
    </ContainerFluid>
  );
};

const Number = styled.div`
  text-align: center;
  padding-top: 0.6rem;
  top: -2rem;
  background: #061a40;
  position: absolute;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-self: center;
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
  box-shadow:0 4px 8px 0 rgb(0 0 0 /15%);
  display:none;

  span {
    padding-top: 4px;
    border: 1px solid #ffffff;

    border-radius: 50%;
    height: 40px;
    width: 40px;
  }
`;
const ContainerFluid = styled.div`
  padding: 50px 0;
  position: relative;
  /* background: linear-gradient(to bottom, #003559 50%, #f5f5f5 50%); */
  margin-bottom: 4rem;
  @media (max-width: 1065px) {
    background: none;
  }
`;
const Header = styled.div`
  text-align: center;
  color: rgb(0,0,0,0.7);

  span {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 5px;
    font-family: inherit;
  }
  p {
    font-size: 20px;
  }
  @media (max-width: 1065px) {
    color: rgba(0, 0, 0, 0.7);
  }
  @media (max-width: 400px) {
    span {
      font-size: 32px;
    }
    p {
      font-size: 18px;
    }
  }
`;
const ItemsContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 5rem;
  row-gap: 4rem;
  z-index: 10;
  @media (max-width: 744px) {
    justify-content: center;
  }
`;
const Items = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  column-gap: 3%;
  row-gap: 1rem;
  justify-content: space-around;
  padding: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  position: relative;
  z-index: 10;
  background: #ffffff;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  cursor:pointer;
  :hover {
    transform: scale(1.03);
  }
  h3 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
    align-self: center;
  }
  p {
    font-size: 16px;
    margin-top: 0px;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.7);
  }
  @media (max-width: 744px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;
const ImageContainer = styled.div`
  padding: 1rem;
  align-self: center;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

export default HowSection;
