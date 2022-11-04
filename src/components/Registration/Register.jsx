import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, useNavigate,Navigate } from "react-router-dom";
import axios from "../../api/axios";
// import axios from "axios";
import EmailVerification from "./EmailVerification";
import CircularProgress from "@mui/material/CircularProgress";
import { useAuth } from "../../auth/auth";

const REGISTER_URL = "/?action=register";

function Register() {
  const nameRef = useRef();
  const [first_name, setFirst_Name] = useState("");
  //   const [validFname, setValidFname] = useState(true);
  // const [errMsg, setErrMsg] = useState(" ");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_Confirmation] = useState("");
  const [firstNameErrMsg, setFirstNameErrMsg] = useState(" ");
  const [lastNameErrMsg, setLastNameErrMsg] = useState(" ");
  const [emailErrMsg, setEmailErrMsg] = useState(" ");
  const [validEmail, setValidEmail] = useState(false);
  const [passwordErrMsg, setPasswordErrMsg] = useState(" ");
  const [passwordConfirmationErrMsg, setPasswordConfirmationErrMsg] =
    useState(" ");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [checkedAgreement, setCheckedAgreement] = useState(false);
  const [authorize, setAuthorize] = useState(false);
  const [matchPwd, setMatchPwd] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const navigate = useNavigate();
  const { setUserName, setUserEmail } = useAuth();

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  // console.log( JSON.stringify({
  //   first_name,
  //   last_name,
  //   email,
  //   password,
  //   password_confirmation,
  // }))
  // console.log(`https://api.evapayments.com${REGISTER_URL}`)
  const validateUser = () => {
    setLoading(true);
    axios
      .post(REGISTER_URL, null, {
        params: {
          first_name,
          last_name,
          email,
          password,
          password_confirmation,
        },
      })
      .then((resp) => {
       
        const statusCode = resp.data.status_code;
        statusCode === 201 && setSuccess(true);
        statusCode === 401 && setEmailErrMsg(resp.data.message);
        setUserEmail(email)
        setLoading(false);
        // setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  
 const handleSubmit = (e) => {
    e.preventDefault();
    !first_name && setFirstNameErrMsg("first name is required");
    !last_name && setLastNameErrMsg("last name is required");
    !email && setEmailErrMsg("email is required");
    !password && setPasswordErrMsg("password is required");
    !password_confirmation &&
      setPasswordConfirmationErrMsg("password confirmation is required");
    setLoading(false);
    if (password === password_confirmation) {
      setMatchPwd(true);
    } else {
      setPasswordConfirmationErrMsg("passwords do not match");
      setPasswordErrMsg("");
      setMatchPwd(false);
    }
    if (matchPwd && password.length < 6) {
      setPasswordErrMsg("password must not be less than 6 characters");
    } else {
      setValidPwd(true);
    }
    if (
      first_name &&
      last_name &&
      email &&
      password &&
      password_confirmation &&
      matchPwd &&
      validPwd
    ) {
      validateUser();
    }
  };

  return (
    <>
      {success ? (
        <Navigate to='/email_verification' replace={true}/>
           ) : (
        <ContainerFluid>
          <ContentContainer>
            <Logo onClick={() => navigate("/")}>
              <img src="./images/eva new new2.png" alt="" />
              {/* <h4>Logo</h4> */}
            </Logo>
            <FormContainer>
              <FormHeader>
                <h1>Please fill in your details</h1>
                {/* <p>
                  Already have an account? <Link to="/login">Sign In</Link>
                </p> */}
              </FormHeader>
              {/* <ErrorMessage>{errMsg}</ErrorMessage> */}
              <form onSubmit={handleSubmit}>
                <NameField>
                  <InputContainer>
                    <InputLabel>FirstName</InputLabel>
                    <input
                      type="text"
                      name="firstname"
                      ref={nameRef}
                      autoComplete="off"
                      aria-describedby="uidnote"
                      onChange={(e) => setFirst_Name(e.target.value)}
                      value={first_name}
                      onInput={() => setFirstNameErrMsg("")}
                    />
                    <ErrorMessage>{firstNameErrMsg}</ErrorMessage>
                  </InputContainer>
                  <InputContainer>
                    <InputLabel>LastName</InputLabel>
                    <input
                      type="text"
                      name="lastname"
                      value={last_name}
                      onChange={(e) => setLast_Name(e.target.value)}
                      onInput={() => setLastNameErrMsg("")}
                    />
                    <ErrorMessage>{lastNameErrMsg}</ErrorMessage>
                  </InputContainer>
                </NameField>
                {/* <InputContainer>
                  <InputLabel>Email-address</InputLabel>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setValidEmail(e.target.checkValidity());
                    }}
                    onInput={() => setEmailErrMsg("")}
                  />
                  <ErrorMessage>{emailErrMsg}</ErrorMessage>
                </InputContainer> */}
                {/* <PasswordField> */}
                <InputContainer>
                  <InputLabel>Create Password</InputLabel>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onInput={() => setPasswordErrMsg("")}
                  />
                  <ErrorMessage>{passwordErrMsg}</ErrorMessage>
                </InputContainer>
                <InputContainer>
                  <InputLabel>Confirm password</InputLabel>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={password_confirmation}
                    onChange={(e) => setPassword_Confirmation(e.target.value)}
                    onInput={() => setPasswordConfirmationErrMsg("")}
                  />

                  <ErrorMessage>{passwordConfirmationErrMsg}</ErrorMessage>
                </InputContainer>
                {/* </PasswordField> */}
                <CheckBoxField>
                  <CheckBox>
                    <div>
                      <input type="checkbox" />
                    </div>
                    <p>Subscribe to our Newsletter</p>
                  </CheckBox>
                  <CheckBox>
                    <div>
                      <input type="checkbox" required />
                    </div>
                    <p>
                      By clicking <strong>Sign Up</strong>, you agree to the
                      EVAPayments.com <a href=" ">Terms and Conditions</a> and
                      I've read the <a href=" ">Privacy Notice</a>{" "}
                    </p>
                  </CheckBox>
                </CheckBoxField>
                <Button>
                  <button type="submit" disabled={loading ? true : false}>
                    {loading && matchPwd && validPwd ? (
                      <MyCircularProgress size="1.5rem" />
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </Button>
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
const Button = styled.div`
  /* opacity: ${(props) => (props.blurButton ? "1" : "0.5")}; */
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
  width: 200px;
  /* height: 200px; */
  cursor: pointer;
  /* margin-top:4rem; */

  img {
    height: 100%;
    width: 100%;
  }
`;
const CheckBoxField = styled.div`
  display: flex;
  flex-direction: column;
`;
const CheckBox = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  margin-bottom: -10px;

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
  height: 100vh;
  width: 100vw;
  overflow: scroll;
`;

const FormContainer = styled.div`
  padding: 2rem;
  max-width: 100%;
  width: 500px;
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
const NameField = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
// const PasswordField = styled(NameField)``;
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
  color: red !important;
  font-size: 14px;
  /* font-style: italic; */
`;

export default Register;
