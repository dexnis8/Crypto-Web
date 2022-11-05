import React from "react";
import styled from "styled-components";
import Navbar from "../Landingpage/Navbar";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Footer from "../Landingpage/Footer";

const ContactUs = () => {
  return (
    <>
      <NavContainer>
        <Navbar />
      </NavContainer>
      <ContactUsHero>
        <h1>Contact Us </h1>
        <span>
          Want to get in touch? We'd love to hear from you. Here is how you can
          reach us...
        </span>
      </ContactUsHero>
      <CardContainer>
        <Card>
          <Image>
            {" "}
            <MyPhoneIcon />{" "}
          </Image>
          <h4>Phone Number</h4>
          <p>
            Having a problem? Just pick up the phone to chat with a member of
            our team.
          </p>
          <span>+2349065706757</span>
        </Card>
        <Card>
          <Image>
            {" "}
            <MyEmailIcon />{" "}
          </Image>
          <h4>Email Address</h4>
          <p>
            Sometimes you need a little help. Don't worry we're always here for
            you.
          </p>
          <span>evapayments@gmail.com</span>
        </Card>
      </CardContainer>

      <FormHeader>
        <h1>Send us a message</h1>
      </FormHeader>
      <FormContainer>
        <form>
          <InvalidAuthentication>
            Invalid credentials! Ensure you entered a correct email or password
          </InvalidAuthentication>
          <InputContainer>
            <InputLabel>Your name:</InputLabel>
            <input type="text" required />
            <ErrorMessage>Name field is required</ErrorMessage>
          </InputContainer>
          <InputContainer>
            <InputLabel>
              E-mail address:
            </InputLabel>
            <input type="email" required />
            <ErrorMessage>Email field is required</ErrorMessage>
          </InputContainer>
          <InputContainer>
            <InputLabel>Message:</InputLabel>
            <textarea id="story" name="story" rows="3" cols="20" />
            <ErrorMessage> password is required</ErrorMessage>
          </InputContainer>

          <button type="submit">Send Message</button>
        </form>
      </FormContainer>
      <Footer />
    </>
  );
};
const MyPhoneIcon = styled(PhoneIcon)`
  font-size: 48px !important;
  color: #fff;
  background: #061a40;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 50%;
`;
const MyEmailIcon = styled(EmailIcon)`
  font-size: 48px !important;
  color: #fff;
  background: #061a40;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 50%;
`;

const CardContainer = styled.div`
  max-width: 100%;
  width: 740px;
  margin: 0 auto;
  margin-top: -5rem;
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  justify-content: space-around;
  column-gap: 20px;
  padding: 10px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 /15%);
  background: #ffffff;
  text-align: center;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  h4 {
    font-size: 18px;
    font-weight: bold;
  }
  span {
    color: #ff5a5f;
    font-weight: bold;
  }
  @media (max-width: 739px) {
    width: 300px;
  }
  @media (max-width: 650px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
  :hover {
    transform: translateY(-10px);
  }
`;
const Image = styled.div``;
const ContactUsHero = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 10rem;
  /* row-gap: 1rem; */
  background: #061a40;

  h1 {
    /* font-size:48px; */
    color: #fff;
  }
  span {
    color: #fff;
  }
`;
const NavContainer = styled.div`
  padding-top: 10px;
  background: #061a40;
  top: 0;
  border-bottom: 1px solid #003559;
`;

const FormContainer = styled.div`
  padding: 2rem;
  max-width: 100%;
  width: 740px;
  margin: 0 auto 4rem auto;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  height: fit-content;
  /* align-self: center; */
  form {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding-left: 0;
  }
  button {
    width: 100%;
    text-align: center;
    border: none;
    background-color: #003559;
    padding: 8px;
    color: #fff;
    font-size: 18px;
    border-radius: 5px;
    margin-top: 10px;
    transition: 0.3s ease-in-out;
    :hover {
      background-color: #061a40;
      color: #fff;
    }
  }
  @media (max-width: 500px) {
    width: 400px;
  }
  @media (max-width: 416px) {
    width: 350px;
    padding: 1rem 10px;
  }
  @media (max-width: 360px) {
    width: 300px;
  }
`;

const FormHeader = styled.div`
  h1 {
    font-size: 28px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    margin: 4rem auto 2rem auto;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-bottom: 10px;
  input,
  textarea {
    max-width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding: 8px;
    :focus {
      outline: none;
      border: 1px solid #f43b47;
    }
  }
`;
const InputLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
`;
const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  font-style: italic;
  display: none;
`;
const InvalidAuthentication = styled(ErrorMessage)``;

export default ContactUs;
