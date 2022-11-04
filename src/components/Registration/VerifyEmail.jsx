import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

function VerifyEmail() {
  return (
    <Body>
      <Logo>
        <img src="/images/eva new new2.png" alt="" />
      </Logo>
      <Container>
       <Icon> <Checked /></Icon>
       <h3>Verified!</h3>
        <span>
         You have Successfully verified your email address
         
        </span>
       

        <a href="/user_details">Continue registration</a>
      </Container>
    </Body>
  );
}
const Icon = styled.div`
padding:1rem;
height:90px;
width:90px;
border-radius:50%;
background:#006daa;
display:flex;
justify-content:center;
align-content:center;
align-self:center;

`
const Checked = styled(CheckOutlinedIcon)`
color:#fff;
font-size:56px !important;

`

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
    font-weight:bold;
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
export default VerifyEmail;
