import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TwoFactorAuthentication = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <Section>
        <Logo onClick={() => navigate("/")}>
          <img src="./images/eva new new2.png" alt="" />
        </Logo>
        <Container>
          <h2>Two Factor Authentication</h2>
          <span>
            Please check your inbox for verification code sent to{" "}
            <strong>dexnis30@gmail.com</strong>{" "}
          </span>

          <InputsContainer>
            <Label></Label>
            <Inputs>
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
            </Inputs>
          </InputsContainer>
          <button>Verify</button>
          <p>Can't find it? Please check your spam folder</p>
        </Container>
      </Section>
    </Main>
  );
};
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  /* margin-top: 2rem; */
`;
const InputsContainer = styled.div`
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
  @media (max-width: 512px) {
    width: 100%;
  }
`;
const Inputs = styled.div`
  display: flex;
  justify-content: space-around;
  input {
    width: 50px;
    height: 50px;
    border: none;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
    border-radius: 5px;
    background: #ffffff;
    font-size: 32px;
    text-align: center;
    @media (max-width: 348px) {
      width: 40px;
      height: 40px;
    }
  }
`;
const Label = styled.h5`
  text-align: center;
`;
const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  /* align-content: center; */
`;

const Container = styled.div`
  width: 500px;
  height: fit-content;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  background: #ffffff;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  text-align: center;
  button {
    width: 400px;
    margin: 3rem auto auto auto;

    text-align: center;
    border: none;
    background-color: #003559;
    padding: 8px;
    color: #fff;
    font-size: 18px;
    border-radius: 5px;
    margin-top: 10px;
    /* opacity: 0.6; */
    transition: 0.3s ease-in-out;
    :hover {
      background-color: #061a40;
      color: #fff;
      /* opacity: 1; */
    }
  }
  @media (max-width: 512px) {
    width: 95%;
    button {
      width: 100%;
    }
  }
`;
const Logo = styled.div`
  align-self: center;
  /* margin-top:2rem; */

  width: 200px;
  /* height: 200px; */
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
  }
`;
export default TwoFactorAuthentication;
