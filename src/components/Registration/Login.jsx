import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../../auth/auth";
import axios from "../../api/axios";
import CircularProgress from "@mui/material/CircularProgress";

const LOGIN_URL = "/?action=login";

function Login() {
  const navigate = useNavigate();
  // const { setAuth } = useAuth();

  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [passwordErr, setPasswordErr] = useState(" ");
  const [emailErr, setEmailErr] = useState(" ");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const validateUserInput = () => {
    !email && setEmailErr("email is required");
    !password && setPasswordErr("password is required");
    setLoading(false);
    if (email && password) {
      setValidated(true);
    }
  };
  const loginValidation = () => {
    setLoading(true);
    axios
      .post(LOGIN_URL, null, {
        params: {
          email,
          password,
        },
      })
      .then((resp) => {
        const statusCode = resp.data.status_code;
        if (statusCode === 200) {
          setSuccess(true);
          console.log("Successfully logged in");
          const userInfo = resp.data.data[0];
          // console.log(resp.data);
          // console.log(resp.data.data[0].id);
          const accessToken = resp.data.token;

          if (accessToken) {
            console.log(true);
            sessionStorage.setItem("loggedIn", "true");
            sessionStorage.setItem("userId", userInfo.id);
            sessionStorage.setItem('userName', userInfo.first_name)
            sessionStorage.setItem("token", accessToken);
            // localStorage.setItem("loggedIn", "true");
          }
        }

        statusCode === 403 && setErrMsg("Your email or password is incorrect ");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErrMsg("Something went wrong! Please try again ");
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validated) {
      loginValidation();
    }
  };
  return (
    <>
      {success ? (
        <div>
        window.location.reload()
        <Navigate to="/user_dashboard" />
        </div>
      ) : (
        <ContainerFluid>
          <ContentContainer>
            <Logo onClick={() => navigate("/")}>
              <img src="./images/eva new new2.png" alt="" />
              {/* <h4>Logo</h4> */}
            </Logo>

            <FormContainer>
              <FormHeader>
                <h1>Sign In </h1>
                <p>
                  Not a user? <Link to="/register">Create account</Link>
                </p>
              </FormHeader>

              <form onSubmit={handleSubmit}>
                <ErrorMessage ref={errRef} aria-live="assertive">
                  {errMsg}
                </ErrorMessage>
                <InputContainer>
                  <InputLabel>Email-address</InputLabel>
                  <input
                    type="email"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    onInput={() => setEmailErr("")}
                  />
                  <ErrorMessage>{emailErr}</ErrorMessage>
                </InputContainer>
                <InputContainer>
                  <InputLabel>Password</InputLabel>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    onInput={() => setPasswordErr("")}
                  />
                  <ErrorMessage>{passwordErr} </ErrorMessage>
                </InputContainer>

                <CheckBoxField>
                  <CheckBox>
                    <div>
                      <input type="checkbox" />
                    </div>
                    <p>Remember me</p>
                  </CheckBox>
                  <CheckBox>
                    <p>
                      <a href=" ">Forgot your password?</a>{" "}
                    </p>
                  </CheckBox>
                </CheckBoxField>

                <button type="submit" onClick={validateUserInput}>
                  {loading && validated ? (
                    <MyCircularProgress size="1.5rem" />
                  ) : (
                    "Sign In"
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
export default Login;
