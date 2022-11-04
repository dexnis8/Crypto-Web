import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import QRCode from "react-qr-code";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import axios from "../../../api/axios";
import CircularProgress from "@mui/material/CircularProgress";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { Modal, Button } from "react-bootstrap";
import Tooltip from "@mui/material/Tooltip";

const user_id = sessionStorage.getItem("userId");
const COMPANY_NAME_URL = "/?action=save_company";
const EDIT_URL = "/?action=get_company";
const CHANGE_PASSWORD_URL = "/?action=update_password";
const AUTH_STATUS = "/?action=get_2fa_status";
const AUTH_SECRET = "/?action=get_2fa_secret";
const VERIFY_2FA = "/?action=verify_2fa";
const TOGGLE_2FA = "/?action=toggle_2fa";

const AccountSettings = () => {
  const [twoFactor, setTwoFactor] = useState(true);
  const [googleAuth, setGoogleAuth] = useState(false);
  const [company_name, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [nameErr, setNameErr] = useState("");
  const [editName, setEditName] = useState(false);
  const [updatedName, setUpdatedName] = useState([]);
  const [old_password, setOldPwd] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPwd_Confirmation] = useState("");
  const [oldPwdErr, setOldPwdErr] = useState("");
  const [pwdErr, setPwdErr] = useState("");
  const [confirmpwdErr, setConfirmPwdErr] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [activeAuth, setActiveAuth] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [sucessAuth, setSuccessAuth] = useState(false);
  const [codeCopy, setCode] = useState("");
  const [qrCode, setQrCode] = useState("");
 
  const [codeNum, setCodeNum] = useState({
    digit1: "",
    digit2: "",
    digit3: "",
    digit4: "",
    digit5: "",
    digit6: "",
  });
  const [verifyErr, setVerrifyErr] = useState("");
  const [isShow, setShow] = React.useState(false);

  const [textArea, setTextArea] = useState("");
  const [copyed, setCopyed] = useState("Copy");
  const handleCopy = () => {
    setCopyed("Copy");
  };
  setTimeout(handleCopy, 4000);
  const copyText = () => {
    navigator.clipboard.writeText(textArea);
    setCopyed("Copied");
  };
  const verificationCode = (e) => {
    setCodeNum({ ...codeNum, [e.target.name]: e.target.value });
  };

  const code = `${codeNum.digit1}${codeNum.digit2}${codeNum.digit3}${codeNum.digit4}${codeNum.digit5}${codeNum.digit6}`;
  console.log(code);

  const getCompanyName = () => {
    console.log("fetching data");
    setLoading(true);
    axios
      .post(EDIT_URL, null, {
        params: {
          user_id,
          company_name,
        },
      })
      .then((resp) => {
        // console.log(resp);
        // console.log(resp.data);
        // console.log(resp.data.data[0].company_name);
        const data = resp.data.data[0].company_name;
        setLoading(false);
        setUpdatedName(data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
    if (updatedName) {
      setEditName(false);
    } else {
      setEditName(true);
    }
  };
  useEffect(() => {
    window.addEventListener("load", getCompanyName);
    return () => {
      window.removeEventListener("load", getCompanyName);
    };
  }, []);

  // Changing company name

  const saveCompanyName = () => {
    if (company_name) {
      // console.log("updating name");
      setLoading(true);
      axios
        .post(COMPANY_NAME_URL, null, {
          params: {
            user_id,
            company_name,
          },
        })
        .then((resp) => {
          // console.log(resp);
          setLoading(false);
          setEditName(false);
          getCompanyName();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setNameErr("Please input company name");
    }
  };

  const changePassword = () => {
    !old_password && setOldPwdErr("old password is required");
    !password && setPwdErr("new password is required");
    !password_confirmation && setConfirmPwdErr("confirm password is required");
    if (old_password && password && password_confirmation) {
      console.log("updating password");
      setLoading2(true);
      axios
        .post(CHANGE_PASSWORD_URL, null, {
          params: {
            user_id,
            old_password,
            password,
            password_confirmation,
          },
        })
        .then((resp) => {
          console.log(resp);
          setLoading2(false);
          setErrMsg(resp.data.message);
          if (resp.data.status_code === 201) {
            setSuccess(true);

            setOldPwd("");
            setPassword("");
            setPwd_Confirmation("");
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading2(false);
        });
    }
  };

  const getAuthStatus = () => {
    console.log("getting status");
    setLoading(true);
    axios
      .post(AUTH_STATUS, null, {
        params: {
          user_id,
        },
      })
      .then((resp) => {
        console.log(resp);
        console.log(resp.data);
        const status = resp.data.data[0].secret;
        if (status) {
          setActiveAuth(status);
          setTwoFactor(false);
        } else {
          setTwoFactor(true);
          setGoogleAuth(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    window.addEventListener("load", getAuthStatus);
    return () => {
      window.removeEventListener("load", getAuthStatus);
    };
  }, []);

  const handleGoogleAuth = () => {
    setGoogleAuth(true);
    setTwoFactor(false);
    console.log("two factor loading");
    setLoadingAuth(true);
    axios
      .post(AUTH_SECRET, null, {
        params: {
          user_id,
        },
      })
      .then((resp) => {
        console.log(resp);
        console.log(resp.data);
        console.log(resp.data.data);

        if (resp.data.status_code === 200) {
          setLoadingAuth(false);
          setSuccessAuth(true);
          setCode(resp.data.data[0].secret);
          setTextArea(resp.data.data[0].secret);
          setQrCode(resp.data.data[0].qr_url);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoadingAuth(false);
      });
  };

  const handle2faVerification = () => {
    if (code) {
      console.log("Authorizing");
      setLoading3(true);
      axios
        .post(VERIFY_2FA, null, {
          params: {
            user_id,
            code,
          },
        })
        .then((resp) => {
          console.log(resp);
          console.log(resp.data);
          console.log(resp.data.data);
          setLoading3(false);

          if (resp.data.status_code === 401) {
            setVerrifyErr(resp.data.message);
          } else if (resp.data.status_code === 200) {
            setSuccessAuth(false);
            setShow(true);
            setGoogleAuth(false);
            getAuthStatus();
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading3(false);
        });
    }
  };

  const toggle2fa = () => {
    console.log("getting status");
    setLoading(true);
    axios
      .post(TOGGLE_2FA, null, {
        params: {
          user_id,
        },
      })
      .then((resp) => {
        console.log(resp);
        console.log(resp.data);
        const status = resp.data.data[0].secret;
        console.log(status);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const emailVerify = () => {
    setTwoFactor(true);
    setGoogleAuth(false);
    toggle2fa();
    getAuthStatus();
  };

  //  const handleAuth = (e) => {
  //   if (e.target.name === "twoFactor") {
  //     setGoogleAuth(false);
  //     setTwoFactor(true);
  //     toggle2fa()
  //     getAuthStatus()
  //   } else if (e.target.name === "googleAuth") {
  //     setTwoFactor(false);
  //     setGoogleAuth(true);
  //   }
  // };

  return (
    <>
      {googleAuth && <Backdrop />}

      <Containerfluid>
        <h4>Profile</h4>
        <Container>
          <p>Company Name</p>
          {editName && (
            <div>
              <Input>
                <input
                  type="text"
                  placeholder="Enter company name"
                  onInput={() => setNameErr("")}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </Input>
              <p
                style={{
                  color: "red",
                  "font-weight": "lighter",
                  "margin-bottom": "-5px",
                  "margin-top": "5px",
                }}
              >
                {nameErr}
              </p>

              <button disabled={loading} onClick={saveCompanyName}>
                {loading ? (
                  <MyCircularProgress size="1.5rem" />
                ) : (
                  "Save changes"
                )}
              </button>
            </div>
          )}
          {!editName && (
            <SaveName>
              <p>{updatedName}</p>
              <div onClick={() => setEditName(true)}>
                {" "}
                <Edit />
              </div>
            </SaveName>
          )}
        </Container>

        <h4>Password</h4>
        <Container>
          <span>
            You can change your password anytime, after which you would be asked
            to sign in
          </span>
          <Input>
            {!success ? (
              <p
                style={{
                  "font-weight": "lighter",
                  "margin-bottom": "-5px",
                  "margin-top": "5px",
                }}
              >
                {errMsg}
              </p>
            ) : (
              <SaveName style={{ width: "60%" }}>
                <p style={{ color: "green", "font-weight": "lighter" }}>
                  Password updated Successfully
                </p>
                <div>
                  {" "}
                  <CheckedIcon />
                </div>
              </SaveName>
            )}

            <input
              type="text"
              placeholder="Old password"
              onInput={() => {
                setOldPwdErr("");
                setSuccess(false);
              }}
              onChange={(e) => setOldPwd(e.target.value)}
              value={old_password}
            />
            <p
              style={{
                color: "red",
                "font-weight": "lighter",
                "margin-bottom": "-5px",
                "margin-top": "5px",
              }}
            >
              {oldPwdErr}
            </p>

            <input
              type="text"
              placeholder="New password"
              onInput={() => {
                setPwdErr("");
                setSuccess(false);
              }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <p
              style={{
                color: "red",
                "font-weight": "lighter",
                "margin-bottom": "-5px",
                "margin-top": "5px",
              }}
            >
              {pwdErr}
            </p>

            <input
              type="text"
              placeholder="Confirm new password"
              onInput={() => {
                setConfirmPwdErr("");
                setSuccess(false);
              }}
              onChange={(e) => setPwd_Confirmation(e.target.value)}
              value={password_confirmation}
            />
            <p
              style={{
                color: "red",
                "font-weight": "lighter",
                "margin-bottom": "-5px",
                "margin-top": "5px",
              }}
            >
              {confirmpwdErr}
            </p>
          </Input>

          <button disabled={loading2} onClick={changePassword}>
            {loading2 ? <MyCircularProgress size="1.5rem" /> : "Save changes"}
          </button>
        </Container>
        <h4>Two-factor Authentication</h4>

        <Container>
          <Authentication>
            <Auth>
              <h5>Verify by E-mail</h5>
              <Texts>
                <span>
                  A verification code will be sent to your email-address each
                  time you want to login
                </span>
                <FormControlLabel
                  control={
                    <Switch
                      checked={twoFactor}
                      onClick={emailVerify}
                      name="twoFactor"
                    />
                  }
                  label={twoFactor ? "On" : "Off"}
                />
              </Texts>
            </Auth>
            <Auth>
              <h5>Use Google Authentication</h5>
              <Texts>
                <span>
                  A verification code will be sent to your email-address each
                  time you want to login
                </span>
                <FormControlLabel
                  control={
                    <Switch
                      checked={googleAuth || activeAuth}
                      onClick={handleGoogleAuth}
                      disabled={activeAuth}
                      name="googleAuth"
                    />
                  }
                  label={googleAuth || activeAuth ? "On" : "Off"}
                />
              </Texts>
            </Auth>
          </Authentication>
        </Container>
      </Containerfluid>
      {googleAuth && loadingAuth && <Loading />}
      {sucessAuth && (
        <GoogleAuthModal>
          <Icon>
            <CloseIcon
              onClick={() => {
                setGoogleAuth(false);
                setTwoFactor(true);
                setSuccessAuth(false);
              }}
            />
          </Icon>
          <h3>Google Authentication</h3>

          <div>
            <h6>Step1: Download an authenticator app</h6>
            <p>
              Download and install Google Authenticator app on your phone. If
              app is already installed, you can skip this step.
            </p>
          </div>
          <div>
            <h6>Step 2: Scan the QR code</h6>
            <p>
              Open the google authenticator app and scan the image below using
              your phone's camera or copy the code below.
            </p>
          </div>
          <SaveName style={{ width: "100%" }}>
            <p style={{ "font-weight": "lighter" }}>{codeCopy}</p>
            <div>
              {" "}
              <Tooltip title={copyed} placement="top-start" arrow>
                <Copy onClick={copyText} />
              </Tooltip>
            </div>
          </SaveName>
          <QrContainer>
            <MyQRCode value={qrCode} />
          </QrContainer>
          <div>
            <h6>Step 3: Verify your code</h6>
            <p>Enter the 6-digit verifcation code generated.</p>
          </div>
          <p
            style={{
              color: "red",
              "font-weight": "lighter",
              "margin-bottom": "-5px",
              "margin-top": "5px",
            }}
          >
            {verifyErr}
          </p>
          <InputsContainer>
            <Inputs>
              <input
                type="text"
                maxLength={1}
                name="digit1"
                onInput={() => setVerrifyErr("")}
                onChange={verificationCode}
              />
              <input
                type="text"
                maxLength={1}
                name="digit2"
                onInput={() => setVerrifyErr("")}
                onChange={verificationCode}
              />
              <input
                type="text"
                maxLength={1}
                name="digit3"
                onInput={() => setVerrifyErr("")}
                onChange={verificationCode}
              />
              <input
                type="text"
                maxLength={1}
                name="digit4"
                onInput={() => setVerrifyErr("")}
                onChange={verificationCode}
              />
              <input
                type="text"
                maxLength={1}
                name="digit5"
                onInput={() => setVerrifyErr("")}
                onChange={verificationCode}
              />
              <input
                type="text"
                maxLength={1}
                name="digit6"
                onInput={() => setVerrifyErr("")}
                onChange={verificationCode}
              />
            </Inputs>
          </InputsContainer>

          <button disabled={loading3} onClick={handle2faVerification}>
            {loading3 ? <MyCircularProgress size="1.5rem" /> : "Verify"}
          </button>
        </GoogleAuthModal>
      )}
    </>
  );
};
const Loading = styled(CircularProgress)`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 20;
  color: #fff !important;
  font-size: 5rem;
`;

const SaveName = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: none;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  border-radius: 5px;
  background: #f5f5f5;
  padding: 10px 10px auto 10px;
  font-size: 18px;
  align-content: center;
  margin-top: 1rem;
  /* markin-left:1rem; */
  p {
    margin-top: 1rem;
    margin-left: 1rem;
  }
  div {
    cursor: pointer;
    background: #ffffff;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-top: 7px;
    margin-right: 1rem;
    :hover {
      background: red;
      color: #fff;
    }
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const Copy = styled(ContentCopyOutlinedIcon)`
  margin-top: 10px;
  margin-left: 8px;
`;
const CheckedIcon = styled(DoneOutlinedIcon)`
  color: green;
  margin-top: 10px;
  margin-left: 8px;
  font-weight: bolder;
`;

const Edit = styled(ModeEditOutlineOutlinedIcon)`
  margin-top: 8px;
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.7);
  :hover {
    color: #fff;
  }
`;
const MyCircularProgress = styled(CircularProgress)`
  color: #fff !important;
`;
const MyQRCode = styled(QRCode)`
  transform: scale(0.6);
`;

const QrContainer = styled.div`
  align-self: center;
`;
const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CloseIcon = styled(CloseOutlinedIcon)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  cursor: pointer;
`;
const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.3) 100%, transparent);
  z-index: 15;
  left: 0;
  position: fixed;
  top: 0;
`;
const GoogleAuthModal = styled.div`
  padding: 1rem;
  width: 500px;
  display: flex;
  flex-direction: column;
  column-gap: 1rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 /15%);
  background: #ffffff;
  position: absolute;
  top: 25%;
  margin-left: 15%;
  z-index: 20;
  h3 {
    margin-bottom: 1rem;
    font-weight: 600;
  }
  h6 {
    font-weight: bolder;
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
    margin-top: 1.5rem;
    :hover {
      background-color: #061a40;
      color: #fff;
    }
  }
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
const Texts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 10px;
`;
const Auth = styled.div`
  h5 {
    /* color: black; */
    font-size: 18px;
    font-weight: bold;
  }
`;
const Authentication = styled.div`
  display: flex;
  flex-direction: column;
`;
const Containerfluid = styled.div`
  h4 {
    font-weight: bold;
  }
`;
const Container = styled.div`
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 /15%);
  border-radius: 5px;
  margin-bottom: 3rem;
  p {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
  }
  button {
    border: none;
    border-radius: 5px;
    padding: 8px 32px;
    background-color: #f43b47;
    color: #fff;
    margin-top: 1rem;
  }
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 1rem;
  input {
    width: 40%;
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.7);

    :focus {
      outline: none;
    }
    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;

export default AccountSettings;
