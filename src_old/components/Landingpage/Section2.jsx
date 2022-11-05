import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Section2 = () => {
  return (
    <ContainerFluid>
      <Container>
        <Header>
          <span>What we offer </span>
          <p>Accept payments and donations with our tools.</p>
        </Header>
        <CardContainer>
          <Card>
            <CardImage>
              <img src="./images/Seamless Payment Solution (1).png" alt="seamless solution " />
            </CardImage>
            <h3>Seamless Integration</h3>

            <p>
              Enjoy the simplicity of integrating our payment system and thrill
              your customers with a smooth and fast payment experience.
            </p>
            {/* <button>Learn More </button> */}
          </Card>
          <Card major={true}>
            <CardImage>
              <img src="./images/api (1).png" alt=" " />
            </CardImage>
            <h3> Well-Documented API</h3>

            <p>
              From simple projects to complex financial products, if you can
              think it you can do it with EVAPayments well documented API.
            </p>
            {/* <button>Learn More </button> */}
          </Card>
          <Card>
            <CardImage>
              <img src="./images/Comprehensive Reports (1).png" alt=" " />
            </CardImage>
            <h3>Comprehensive Reports </h3>

            <p>
              Get detailed report in real time. EVAPayments provides you with
              detailed datafrom the blockchain as fast as possible.
            </p>
            {/* <button>Learn More </button> */}
          </Card>
        </CardContainer>
      </Container>
    </ContainerFluid>
  );
};

const ContainerFluid = styled.div`
  background: #061a40;
  color: #fff;
  padding: 50px 0;
  margin-bottom: 4rem;
`;
const Header = styled.div`
  text-align: center;

  span {
    font-size: 40px;
    font-weight: 700;

    margin-bottom: 5px;
    font-family: inherit;
  }
  p {
    font-size: 20px;
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
const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 3rem;
  row-gap: 1rem;
  padding-bottom: 50px;
  @media (max-width: 744px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border-radius: 5px;
  background: #006daa;
  color: #fff;
  align-items: flex-start;
  justify-content: space-around;
  padding: 30px 25px;
  transition: all 0.3s ease;
  /* transform: ${(props) => (props.major ? "scale(1.5)" : "scale(1.5)")}; */
  h3 {
    font-size: 24px;
    font-weight: 600;
    /* line-height: 0; */
  }
  p {
    font-size: 16px;
    opacity: 0.7;
  }
  button {
    border: none;
    background: none;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    text-align: left;
    transition: 0.3s ease-in-out;
    :hover {
      font-weight: bold;
      color: #443991;
    }
  }
  :hover {
    /* background: #ee3b4a; */
    transform: scale(1.05);
    cursor: pointer;
  }
  @media (max-width: 744px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;
const CardImage = styled.div`
  width: 100px;
  height: 100px;
  background: #ff5a5f;
  padding: 1rem;
  border-radius: 50%;
  /* opacity: 0.5; */
  margin-bottom: 10px;
  img {
    width: 100%;
    height: 100%;
    color:#fff;
  }
`;
export default Section2;
