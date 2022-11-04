import React, { useState, useEffect } from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import Tooltip from "@mui/material/Tooltip";
import axios from "../../api/axios";
import { Navigate, useLocation } from "react-router-dom";


const qrCodeStyles = {
  height: "100px",
  width: "100px",
};


const user_id = sessionStorage.getItem("userId");
const Invoice = () => {
  const search = useLocation().search;
  const invoiceID = new URLSearchParams(search).get('invoiceID');
  const [active1, setActive1] = useState('')
  const [active2, setActive2] = useState('')
  const [active3, setActive3] = useState('')
  const [textArea, setTextArea] = useState("");
  const [copyed, setCopyed] = useState("Copy");
  const [invalidID, setInvalidID] = useState(false)
  const handleCopy = () => {
    setCopyed("Copy");
  };
  setTimeout(handleCopy, 4000);
  const copyText = () => {
    navigator.clipboard.writeText(textArea);
    setCopyed("Copied");
  };

  const [paymentID, setPaymentID] = useState("");
  const [cryptoValue, setCrptoValue] = useState("");
  const [coinAmount, setCoinAmount] = useState("");
  const [fundAddress, setFundAddress] = useState("");
  // const [qrCode, setQrCode] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  

  const getPaymentStatus = () => {
    axios
      .post("/?action=get_tx_status", null, {
        params: {
          user_id,
          invoiceID,
        },
      })
      .then((resp) => {
        const data = resp.data.data[0];
        if(data.status === 'completed'){
          setActive1('active')
          setActive2('active')
          setActive3('active')
        }else if(data.status === 'confirmed'){
          setActive1('active')
        }else if(data.status === 'sending'){
          setActive1('active')
          setActive2('active')

        }
       
      })
      .catch((err) => {
        console.log(err);
      });
  };
useEffect(()=>{
  setInterval(getPaymentStatus,5000)

},[active1,active2,active3])
  const getInvoice = () => {
    axios
      .post("/?action=get_invoice_details", null, {
        params: {
          user_id,
          invoiceID,
        },
      })
      .then((resp) => {
        console.log(resp.data)
        const data = resp.data.data[0];
        if(resp.data.status_code===200){
          setCoinAmount(`$${data.amount}`);
          setFundAddress(data.address);
          getPaymentStatus()
        } else  if(resp.data.status_code===403) {
          setInvalidID(true)
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    invoiceID && getInvoice();
  }, [invoiceID]);

  return (
    <>
    {
      invalidID? (<Navigate to='/unauthenticated_url-request' />) : (
        
    <Container>
      <Logo>
        <img src="./images/eva new white.png" alt="" />
      </Logo>
      <Content>
        <PaymentID>
          Payment ID: <strong>3245675105</strong>
        </PaymentID>
        <Exchange>
          <CoinValue>
            <h2>706.4 TRX</h2>
            <p>The rate will be updated in 19:47</p>
          </CoinValue>
          <ExchangePrice>{coinAmount}</ExchangePrice>
        </Exchange>
        <span>Send the funds to this address</span>
        <WalletAddress>
          {fundAddress}
          <Tooltip title={copyed} placement="top-start" arrow>
            <CopyAddress onClick={copyText} />
          </Tooltip>
        </WalletAddress>
        <QrContainer>
          <MyQRCode value={fundAddress} styles={qrCodeStyles} />
        </QrContainer>
      </Content>
      <OrderProcess>
        <div className="modal-body">
          <div className="progress-track">
            <ul id="progressbar">
              <li className="step0 active " id="step1">
                Waiting <br /> for payment
              </li>
              <li className={`step0 ${active1}  text-center` }id="step2">
                Confirmed <br /> on blockchain
              </li>
              <li className={`step0 ${active2}  text-center` } id="step3">
                <span id="three" className="pl-3 text-left">
                  Sending to <br /> seller
                </span>
              </li>
              <li className={`step0 ${active3}  text-right` }id="step4">
                Sent <br /> to seller
              </li>
            </ul>
          </div>
        </div>
      </OrderProcess>
    </Container>
    
    )
  }
    </>
  );
};
const MyQRCode = styled(QRCode)`
  transform: scale(0.6);
  margin-left: -1rem;
  margin-top: -2rem;
`;
const OrderProcess = styled.div`
  background: #061a40;
  padding: 1.5rem;
`;
const QrContainer = styled.div`
  margin-top: 2rem;
`;
const CopyAddress = styled(ContentCopyOutlinedIcon)`
  cursor: pointer;
  margin-left: 10px;
  align-self: center;

  /* font-size: 16px !important; */
`;
const ExchangePrice = styled.h2`
  margin-right: 1rem;
  color: #222;
`;
const CoinValue = styled.div`
  h2 {
    margin-bottom: 0;
  }
`;
const WalletAddress = styled.h5`
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  row-gap: 5px;
  @media (max-width: 500px) {
    font-size: 16px !important;
  }
`;

const Content = styled.div`
  padding: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const Exchange = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PaymentID = styled.span`
  /* margin-bottom: 1rem; */
  text-align: right;
`;
const Logo = styled.div`
  background-color: #061a40;
  height: 60px;
  overflow: hidden;
  padding: 1rem;
  img {
    width: 200px;
    height: 100%;
  }
`;
const Container = styled.div`
  max-width: 100%;
  width: 60%;
  margin: 2rem auto;
  /* border: 1px solid red; */
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  /* background:red; */
  background: #ffffff;
  @media (max-width:800px){
    width:95%;
  }
`;
export default Invoice;
