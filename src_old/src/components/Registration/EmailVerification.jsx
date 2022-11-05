import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAuth } from "../../auth/auth";

function EmailVerification() {
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const { userEmail } = useAuth();

  return (
    <Body>
      <Logo>
        <img src="/images/eva new new2.png" alt="" />
      </Logo>
      <Container>
        <h3>Verify your account</h3>
        <span>
          A verification email was sent to your email address{" "}
          <strong>{userEmail}</strong>
        </span>
        <p>
          Please ensure you click on the <strong>Confirm Email Address </strong>
          link in the email sent to you to verify your account
        </p>

        <button disabled={showCounter} onClick={() => setShowCounter(true)}>
          Resend Verification
        </button>
        {showCounter && <p>Please wait for 1 minutes before re-sending</p>}
        <a href="/register">Back to Sign Up</a>
      </Container>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  color: rgba(0, 0, 0, 0.7);
  overflow-x: hidden;
  h3 {
    text-align: center;
    margin-bottom: 1rem;
  }
  span {
    text-align: center;
    margin-bottom: 1rem;
  }
`;
const Container = styled.div`
  padding: 2rem;
  background: #ffffff;
  box-shadow: 0 4px 8px rgb(0 0 0 /15%);
  width: 500px;
  border-radius: 5px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  button,
  a {
    border: none;
    border-radius: 5px;
    padding: 8px 32px;
    background-color: #003559;
    color: #fff;
    margin-bottom: 10px;
    :hover {
      background-color: #061a40;
    }
  }
  a {
    text-align: center;
    margin-top: 1rem;
    text-decoration: none;
    background: none;
    color: #061a40;
    border: 1px solid #061a40;
    :hover {
      background: #061a40;
      color: #fff;
    }
  }
  @media (max-width: 430px) {
    width: 300px;
  }
`;
const Logo = styled.div`
  align-self: center;
  margin-bottom: 1rem;
  width: 200px;
  height: fit-content;
  margin-top: 2rem;

  img {
    width: 100%;
    height: 100%;
  }
`;
export default EmailVerification;
