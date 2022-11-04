import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <ContainerFluid>
        <Container>
          <FlexContainer>
            <Header>
              <span>Easy to integrate and fast</span>
              <p>
                Receive payment with our secured and reliable payment gateway
              </p>
            </Header>
            <Body>
              <Item>
                <ImageContainer>
                  <img src="./images/setup account.png" alt="" />
                </ImageContainer>
                <TextContainer>
                  <h3>Set up account</h3>

                  <MyArrowForwardOutlinedIcon />
                </TextContainer>
              </Item>
              <Item>
                <ImageContainer>
                  <img src="./images/intergration.png" alt="" />
                </ImageContainer>
                <TextContainer>
                  <h3>
                    Choose your <br /> integration
                  </h3>

                  <MyArrowForwardOutlinedIcon />
                </TextContainer>
              </Item>
              <Item>
                <ImageContainer>
                  <img src="./images/website.png" alt="" />
                </ImageContainer>
                <TextContainer>
                  <h3>
                    Click on pay <br />
                    button
                  </h3>

                  <MyArrowForwardOutlinedIcon />
                </TextContainer>
              </Item>
              <Item>
                <ImageContainer>
                  <img src="./images/profit.png" alt="" />
                </ImageContainer>
                <TextContainer>
                  <h3>Get paid</h3>
                  {/* <div>&rarr;</div> */}
                </TextContainer>
              </Item>
            </Body>
            <ButtonContainer>
              <Button onClick={() => navigate("/register")}>
                Start accepting crypto
              </Button>
            </ButtonContainer>
          </FlexContainer>
        </Container>
      </ContainerFluid>
    </>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  text-align: center;

  span {
    font-size: 40px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 5px;
    font-family: inherit;
  }
  p {
    font-size: 20px;
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
const Body = styled.div`
  display: flex;
  width: 100%;
  justify-items: center;
  justify-content: space-between;
  padding: 1rem 0rem;
  padding-left: 2rem;
  flex-wrap: wrap;
  @media (max-width: 619px) {
    padding-left: 0;
    max-width: 100%;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const Item = styled.div`
  width: 270px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-self: center;
  align-self: center;
`;
const MyArrowForwardOutlinedIcon = styled(ArrowForwardOutlinedIcon)`
  font-size: 48px;
  font-weight: bolder;
  align-self: center;
  top: 0.3s ease-in-out;
  color: #f43b47;
  @media (max-width: 571px) {
    transform: rotate(90deg);
    margin-top: 1rem;
  }
`;
const ImageContainer = styled.div`
  height: 120px;
  width: 120px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-self: center;
  align-content: center;
  img {
    justify-self: center;
    align-self: center;
    align-self: center;
    width:100%;
    height:100%;
  }
  @media (max-width: 619px) {
    align-self: center;
    justify-self: center;
    height: 100px;
  width: 100px;
  }
  @media (max-width: 400px) {
    align-self: center;
  }
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  column-gap: 1rem;
  h3 {
    font-size: 24px;
    font-weight: 400;
    color: rgb(33, 37, 41);
    text-align: center;
    align-self: flex-end;
    justify-self:flex-end;
    margin-left:2.4rem;
  }

  @media (max-width: 619px) {
    flex-direction: column;
    h3 {
      width: 100%;
      align-self: center;
      justify-self: center;
    }
  }
`;
const ButtonContainer = styled.div``;
const Button = styled.button`
  border: none;
  padding: 16px 40px;
  font-size: 18px;
  color: #fff;
  background: #003559;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background: #061a40;
  }
`;

const ContainerFluid = styled.div`
  padding: 3rem 0;
  margin-bottom: 4rem;
`;
export default Section1;
