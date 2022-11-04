import React from "react";
import styled from "styled-components";
import Navbar from "../Landingpage/Navbar";
import Footer from "../Landingpage/Footer";
import Accordion from "react-bootstrap/Accordion";
import {useNavigate} from 'react-router-dom'


const FAQ = () => {
  const navigate = useNavigate
  return (
    <>
      <NavContainer>
        <Navbar />
      </NavContainer>
      <FaqHero>
        <h1>How can we help you?</h1>
        <input type="text" placeholder="Type keywords to find answers" />
        <span>You can also check below for frequently asked questions</span>
      </FaqHero>
      <Header>
      <button onClick = {()=> navigate('https://api.evapayments.com')}>Navigate</button>
      <h3>Frequently Asked Questions </h3>

      </Header>
      <FaqContainer>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>How does EVAPayments work?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
             
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How many users can I refer per day?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
           
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How do I confirm if my customer had paid to EVAPayments</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
           
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How can I integrate EVAPayments gateway?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
           
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>How fast is EVAPayments gateway?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
           
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </FaqContainer>
      <Footer />
    </>
  );
};
const Header  =styled.div`
text-align:center;
margin-top:3rem;
h3{
        font-weight:bold;
        color:rgba(0,0,0,0.7);
}
`
const FaqContainer = styled.div`
  max-width: 100%;
  width: 700px;
  margin: 1rem auto 4rem auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 /15%);
 
`;
const FaqHero = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 3rem;
  row-gap: 2rem;
  background: #061a40;

  h1 {
    /* font-size:48px; */
    color: #fff;
  }
  span {
    color: #fff;
  }
  input {
    border: none;
    width: 50%;
    margin: 0 auto;
    border-radius: 5px;
    padding: 0.7rem;
    color: #061a40;
    font-size: 16px;
    :focus {
      outline: none;
    }
    @media (max-width: 1000px) {
      width: 60%;
    }
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;
const NavContainer = styled.div`
  padding-top: 10px;
  background: #061a40;
  top: 0;
  border-bottom: 1px solid #003559;
`;
export default FAQ;
