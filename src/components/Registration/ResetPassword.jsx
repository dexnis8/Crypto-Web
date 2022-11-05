import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../auth/auth";
import axios from "../../api/axios";
import CircularProgress from "@mui/material/CircularProgress";
import EmailVerification from "./EmailVerification";

function ResetPassword() {
  const navigate = useNavigate();
  // const { setAuth } = useAuth();

  const emailRef = useRef();
  const errRef = useRef();
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [passwordCErr, setPasswordCErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  });

  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");

  const verifyEmail = (e) => {
    e.preventDefault();
    if (password && password_confirmation) {
      setLoading(true);
      axios
        .post("/?action=update_new_password", null, {
          params: {
            password,
            password_confirmation,
          },
        })
        .then((resp) => {
          console.log(resp);
          setLoading(false);
          if (resp.data.status_code === 200) {
            setSuccess(true);
          }
          if (resp.data.status_code === 403) {
            setErrMsg(resp.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
    !password && setPasswordErr("password is required");
    !password_confirmation &&
      setPasswordCErr("password confirmation is required");
  };
  return (
    <>
      {success ? (
        <h1>Successful</h1>
      ) : (
        <ContainerFluid>
          <ContentContainer>
            <Logo onClick={() => navigate("/")}>
              <img src="./images/eva new new2.png" alt="" />
              {/* <h4>Logo</h4> */}
            </Logo>

            <FormContainer>
              <FormHeader>
                <h1>Reset password</h1>
              </FormHeader>

              <form>
                <ErrorMessage ref={errRef} aria-live="assertive">
                  {errMsg}
                </ErrorMessage>
                <InputContainer>
                  <InputLabel>New password</InputLabel>
                  <input
                    type="password"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    onInput={() => setPasswordErr("")}
                  />
                  <ErrorMessage>{passwordErr}</ErrorMessage>
                </InputContainer>
                <InputContainer>
                  <InputLabel>Confirm password</InputLabel>
                  <input
                    type="password"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    onInput={() => setPasswordCErr("")}
                  />
                  <ErrorMessage>{passwordCErr}</ErrorMessage>
                </InputContainer>
                <button type="submit" onClick={verifyEmail}>
                  {loading ? (
                    <MyCircularProgress size="1.5rem" />
                  ) : (
                    "Reset password"
                  )}
                </button>
              </form>
            </FormContainer>
          </ContentContainer>
        </ContainerFluid>
      )}
    </>
  );
}

const MyCircularProgress = styled(CircularProgress)`
  color: #fff !important;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem 0;
  row-gap: 1rem;
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
const CheckBoxField = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CheckBox = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;

  div {
    align-self: flex-start;
  }
  p {
    font-size: 14px;
    /* font-style: italic; */
    align-self: center;
    a {
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;
const ContainerFluid = styled.div`
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-content: center;
  justify-items: center;
  padding: 3rem 0;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
`;

const FormContainer = styled.div`
  padding: 2rem;
  max-width: 100%;
  width: 450px;
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
    /* opacity: 0.6; */
    transition: 0.3s ease-in-out;
    :hover {
      background-color: #061a40;
      color: #fff;
      /* opacity: 1; */
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
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
  }
  p {
    font-size: 14px;
    /* font-style: italic; */
    font-weight: 400;
    margin-top: -5px;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-bottom: 10px;
  input {
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
  /* font-style: italic; */
`;
export default ResetPassword;
