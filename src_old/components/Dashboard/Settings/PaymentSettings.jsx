import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ApiKeyTable from "../Tables/SettingsTable/ApiKeyTable";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PaymentWalletTable from "../Tables/SettingsTable/PaymentWalletTable";
import axios from "../../../api/axios";
import CircularProgress from "@mui/material/CircularProgress";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import Tooltip from "@mui/material/Tooltip";
import AddWalletTable from "../Tables/DashboardTable/AddWalletTable";

const user_id = sessionStorage.getItem("userId");
// const timeOut = 60000;
const ADDWALLET_ADDRESS = "/?action=save_wallet";
const API_KEY = "/?action=generate_api";
const GET_API_KEY = "/?action=get_api_key";
const GET_IPN = "/?action=get_ipn";
const GENERATE_IPN = "/?action=generate_ipn";
const PaymentSettings = () => {
  const [addWallet, setAddWallet] = useState(false);
  const [textArea, setTextArea] = useState("");
  // const [copy, setCopy] = useState(false);
  const [coin, setCoin] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [invalidWallet, setInvalidWallet] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copyed, setCopyed] = useState("Copy");
  const [successMsg, setSuccessMsg] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [ipnKey, setIpnKey] = useState("");
  const [showIpnKey, setShowIpnKey] = useState(false);
  const [getIpnKey, setGetIpnKey] = useState("");
  const [time_out, setTimeout] = useState('')
  const [recurrent, setRecurrent] = useState('')
  const [timeMsg, setTimeMg] = useState('')
  const [recurrMsg, setRecurrMsg] = useState('');
  const [timeSucc, setTimeSucc] = useState(false)
  const [recurrSucc, setRecurrSucc] = useState(false)

  const getTimeout = ()=>{
    axios
    .post('/?action=get_time_out', null, {
      params: {
        user_id,
      },
    })
    .then((resp) => {
      console.log(resp);
      console.log(resp.data);
      setTimeout(resp.data.data[0].time_out);
      setTimeMg('')
     
    })
    .catch((err) => {
      console.log(err);
      
    });
  }
  useEffect(() => {
    window.addEventListener("load", getTimeout);
    return () => {
      window.removeEventListener("load", getTimeout);
    };
  }, []);
  const getRecurrent = ()=>{
    axios
    .post('/?action=get_recurrent', null, {
      params: {
        user_id,
       
      },
    })
    .then((resp) => {
      console.log(resp);
      console.log(resp.data);
      setRecurrent(resp.data.data[0].recurrent);
      setRecurrMsg('')
     
    })
    .catch((err) => {
      console.log(err);
      
    });
  }
  useEffect(() => {
    window.addEventListener("load", getRecurrent);
    return () => {
      window.removeEventListener("load", getRecurrent);
    };
  }, []);
  
const updateTimeout = ()=>{
  axios
  .post('/?action=update_time_out', null, {
    params: {
      user_id,
      time_out
    },
  })
  .then((resp) => {
    console.log(resp);
    // console.log(resp.data);
     setTimeMg('Updated successfully')
    setTimeSucc(true)
   
  })
  .catch((err) => {
    console.log(err);
    
  });
}

const updateRecurrent = ()=>{
  axios
  .post('/?action=update_recurrent', null, {
    params: {
      user_id,
      recurrent
    },
  })
  .then((resp) => {
    console.log(resp);
    console.log(resp.data);
    setRecurrMsg('Updated successfully')
    setRecurrSucc(true)
  })
  .catch((err) => {
    console.log(err);
    
  });
}

useEffect(()=>{
  updateRecurrent()
},[recurrent])

useEffect(()=>{
  updateTimeout()
},[time_out])



  const hideSuccessMsg = () => {
    setSuccessMsg("");
  };

  const handleCopy = () => {
    setCopyed("Copy");
  };
  // setTimeout(handleCopy, 4000);
  const copyText = () => {
    navigator.clipboard.writeText(textArea);
    setCopyed("Copied");
  };
  const copyKey = () => {
    navigator.clipboard.writeText(ipnKey);
    setCopyed("Copied");
  };

  const addAnotherWallet = () => {
    if (coin && walletAddress) {
      console.log("Adding wallet");
      setLoading(true);
      axios
        .post(ADDWALLET_ADDRESS, null, {
          params: {
            user_id,
            address: walletAddress,
            coin,
          },
        })
        .then((resp) => {
          console.log(resp);
          console.log(resp.data);
          setLoading(false);
          setCoin("");
          setWalletAddress("");
          setInvalidWallet(resp.data.message);
          setAddWallet(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      setInvalidWallet("Please enter a valid wallet address");
    }
  };

  const getApiKey = () => {
    console.log("Getting API");

    axios
      .post(GET_API_KEY, null, {
        params: {
          user_id,
        },
      })
      .then((resp) => {
        console.log(resp);
        const data = resp.data.data[0].api_key;
        setApiKey(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    window.addEventListener("load", getApiKey);
    return () => {
      window.removeEventListener("load", getApiKey);
    };
  }, []);

  const generateAPIkey = () => {
    console.log("Generating API");
    setLoading2(true);
    axios
      .post(API_KEY, null, {
        params: {
          user_id,
        },
      })
      .then((resp) => {
        console.log(resp);
        console.log(resp.data);
        setLoading2(false);
        setTextArea(resp.data.data[0].api_key);
        setSuccess(true);
        setSuccessMsg("API key generated Successfully");
        getApiKey();
      })
      .catch((err) => {
        console.log(err);
        setLoading2(false);
      });
  };

  // setInterval(hideSuccessMsg, timeOut);

  const getIPNKey = () => {
    console.log("Getting IPN key");

    axios
      .post(GET_IPN, null, {
        params: {
          user_id,
        },
      })
      .then((resp) => {
        console.log(resp);
        const data = resp.data.data[0].ipn_key;
        setIpnKey(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    window.addEventListener("load", getIPNKey);
    return () => {
      window.removeEventListener("load", getIPNKey);
    };
  }, []);

  const generateIPNkey = () => {
    console.log("Generating IPN key");
    setLoading3(true);
    axios
      .post(GENERATE_IPN, null, {
        params: {
          user_id,
        },
      })
      .then((resp) => {
        console.log(resp);
        console.log(resp.data);
        setLoading3(false);
        setIpnKey(resp.data.data[0].ipn_key);
        setShowIpnKey(true);
        // setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading3(false);
      });
  };

  useEffect(()=>{
    setInterval(()=>{setTimeMg('')},6000)
  },[time_out])

  useEffect(()=>{
    setInterval(()=>{setRecurrMsg('')},6000)
  },[recurrent])
useEffect(()=>{
  setRecurrMsg('')
  setTimeMg('')
},[])

useEffect(()=>{
  getIPNKey()
  getApiKey()
  getRecurrent()
  getTimeout()
},[])

  return (
    <ContainerFluid>
      <Container>
        <Header>
          <h4>Payment wallet</h4>
          <BaseCurrency>
            <label for="coins">Base Currency:</label>
            <select name="coins" id="coinsSelection">
              <option value="select">Select coin</option>
              <option value="BTC">BTC</option>
              <option value="USDT">USDT</option>
              <option value="DOGE">DOGE</option>
              <option value="ETHERUM">ETHERUM</option>
            </select>
          </BaseCurrency>
        </Header>
        <CardContainer>
          <Table>
            {/* <PaymentWalletTable /> */}
            <AddWalletTable />
          </Table>
          {/* <p>You have not defined your wallet to receive payments.</p> */}
          <p
            style={{
              color: "red",
              "font-weight": "lighter",
              "margin-bottom": "-5px",
              "margin-top": "5px",
            }}
          >
            {invalidWallet}
          </p>
          <AddwalletInput show={addWallet}>
            <select
              name="coins"
              id="coinsSelection"
              onChange={(e) => setCoin(e.target.value)}
              value={coin}
            >
              <option value="select">Select coin</option>
              <option value="BTC">BTC</option>
              <option value="USDT">USDT</option>
              <option value="DOGE">DOGE</option>
              <option value="ETHERUM">ETHERUM</option>
            </select>
            <input
              type="text"
              placeholder="Wallet Address"
              onInput={() => setInvalidWallet("")}
              onChange={(e) => setWalletAddress(e.target.value)}
              value={walletAddress}
            />
            <ActionBTN>
              <button disabled={loading} onClick={addAnotherWallet}>
                {loading ? <MyCircularProgress size="1.5rem" /> : "Add"}
              </button>
              <span
                onClick={() => setAddWallet(false)}
                className={addWallet ? " " : "hide"}
              >
                <CloseOutlinedIcon />
              </span>
            </ActionBTN>
          </AddwalletInput>
          <Buttons show={addWallet}>
            <button onClick={() => setAddWallet(true)}>
              Add another wallet
            </button>
          </Buttons>
        </CardContainer>
      </Container>
      {/* Next Section */}
      <h4>API Keys</h4>
      <Container2>
        {/* <Table>
          <ApiKeyTable />
        </Table> */}
        <p>Please define you wallet before creating API key.</p>
        <SaveName>
          <p style={{ "font-weight": "lighter" }}>{apiKey}</p>
          <div>
            {" "}
            <Tooltip title={copyed} placement="top-start" arrow>
              <Copy onClick={copyText} />
            </Tooltip>
          </div>
        </SaveName>

        <p
          style={{
            color: "green",
            "font-weight": "lighter",
            "margin-bottom": "-5px",
            "margin-top": "5px",
          }}
        >
          {successMsg}
        </p>

        <button disabled={loading2} onClick={generateAPIkey}>
          {loading2 ? (
            <MyCircularProgress size="1.5rem" />
          ) : apiKey ? (
            "Generate another API"
          ) : (
            "Generate API"
          )}
        </button>
      </Container2>
      <h4>Instant Payment Notification</h4>
      <Container3>
        <span>IPN secret key</span>
        <h6>Note! this key can only be viewed once</h6>
        <SaveName>
            <p style={{ "margin-top": "25px",}}>{ipnKey}</p>
          <div>
            <Tooltip title={copyed} placement="top-start" arrow>
              <Copy onClick={copyKey} />
            </Tooltip>
          </div>
        </SaveName>

        <button disabled={loading3} onClick={generateIPNkey}>
          {loading3 ? <MyCircularProgress size="1.5rem" /> : "Generate"}
        </button>

        <span>Recurent notifications</span>
        <Label>Timeout</Label>
        <p style={{'margin-top':'-10px', 'margin-bottom':'-5px','color':'green'}}>{ timeSucc ? timeMsg : ''}</p>
        <input type="number" placeholder="0" onInput={(e)=> setTimeout(e.target.value)} value={time_out}  />

        <Label>Number of recurrent notifications</Label>
        <p style={{'margin-top':'-10px', 'margin-bottom':'-5px','color':'green'}}>{ recurrSucc ? recurrMsg : ''}</p>
        <input type="number" placeholder="0" onInput={(e)=> setRecurrent(e.target.value)} value={recurrent} />
      </Container3>
    </ContainerFluid>
  );
};

const SaveName = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  border: none;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  border-radius: 5px;
  background: #f5f5f5;
  padding: 10px;
  font-size: 18px;
  align-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  p {
    /* margin-top:10px;
    margin-left:10px; */
    color: rgba(0, 0, 0, 0.7) !important;
    font-size: 20px !important;
    line-height: 0;
  }
  div {
    cursor: pointer;
    background: #ffffff;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-top: 2px;
    /* margin-right:10px; */
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
const BaseCurrency = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  label {
    font-weight: bold;
    margin-right: 10px;
  }
  select {
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    :focus {
      outline: none;
    }
  }
`;
const Label = styled.div``;
const ContainerFluid = styled.div`
  h4 {
    font-weight: bold;
  }
`;

const MyCircularProgress = styled(CircularProgress)`
  color: #fff !important;
`;
const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background: #ffffff;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 2rem;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  color: rgba(0, 0, 0, 0.7);
 
  span {
    font-weight: bold;
  }

  input {
    width: 40%;
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    @media (max-width: 400px) {
      width: 100%;
    }

    :focus {
      outline: none;
    }
  }
  button {
    border: none;
    border-radius: 5px;
    padding: 8px 32px;
    background-color: #f43b47;
    color: #fff;
    width: fit-content;
  }
`;
const Container = styled.div`
  margin-bottom: 3rem;
`;
const CardContainer = styled.div`
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1.5rem;

  p {
    font-size: 16px;
    padding: 10px;
    /* background: rgba(0, 0, 0, 0.1); */
    color: #f43b47;
    border-radius: 5px;
    font-weight: 300;
    margin-top: 10px;
    /* text-align:center; */
  }
`;
const Table = styled.div`
  /* box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  border-radius: 5px; */
`;
const AddwalletInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
  flex-wrap: wrap;
  row-gap: 1rem;
  transition: 0.3s ease-in-out;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-20px)")};
  @media (max-width: 400px) {
    flex-direction: column;
  }
  select {
    width: 20%;
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    @media (max-width: 400px) {
      width: 100%;
    }

    :focus {
      outline: none;
    }
  }
  input {
    width: 50%;
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    margin-left: -5%;
    @media (max-width: 400px) {
      width: 100%;
      margin-left: 0;
    }

    :focus {
      outline: none;
    }
  }
`;
const Container2 = styled(CardContainer)`
  margin-bottom: 3rem;
  input {
    width: 40%;
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin-right: 3rem;
    color: rgba(0, 0, 0, 0.7);

    :focus {
      outline: none;
    }
  }
  button {
    border: none;
    border-radius: 5px;
    padding: 8px 32px;
    background-color: #f43b47;
    color: #fff;
    /* background-image: linear-gradient(to right bottom, #e8962e, #e45131) !important; */
  }
`;
const AddKey = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  button {
    border: 1px solid mediumseagreen;
    background: none;
    color: mediumseagreen;
    transition: 0.3s ease-in-out;
    :hover {
      background: mediumseagreen;
      color: #fff;
    }
  }
`;

const ActionBTN = styled.div`
  align-self: center;
  margin-right: 3%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  color: #f43b47;
  transition: 0.2s ease-in-out;
  width: 10%;
  button {
    border-radius: 5px;
    border: none;
    /* padding:8px; */
    padding: 8px 16px;
    background: mediumseagreen;
    color: #fff;
  }
  span {
    border-radius: 5px;
    padding: 8px;
    cursor: pointer;
    color: #f43b47;
    transition: 0.3s ease-in-out;
    :hover {
      background: #f43b47;
      color: #fff;
    }
  }
  @media (max-width: 400px) {
    width: 100%;
    margin-right: 0;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 1rem;
  margin-top: 2rem;
  transition: 0.3s ease-in-out;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-4rem)")};

  button {
    border: none;
    border-radius: 5px;
    z-index: 1;
    padding: 8px 32px;
    background-color: #f43b47;
    color: #fff;
  }
`;
export default PaymentSettings;
