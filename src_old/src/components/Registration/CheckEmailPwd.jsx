import React, { useState, useEffect } from "react";
import styled from "styled-components";

function CheckEmailPwd() {
  return (
    <Body>
      <Logo>
        <img src="/images/eva new new2.png" alt="" />
      </Logo>
      <Container>
        <h3>Verification Email Sent</h3>
        <span>
          A link to reset your password has been sent to your email address
        </span>

        <a href="/forget_password">Change Email</a>
      </Container>
    </Body>
  );
}
const Body = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
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
    margin-top: 1rem;
    font-weight: bold;
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
export default CheckEmailPwd;
