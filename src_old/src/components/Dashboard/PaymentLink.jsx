import React, { useState } from "react";
import styled from "styled-components";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import axios from "../../api/axios";
import CircularProgress from "@mui/material/CircularProgress";
import { Navigate,useNavigate, createSearchParams } from "react-router-dom";
import PaymentLinkTable from "./Tables/DashboardTable/PaymentLinkTable";

/* 
const productLink = [
  {
    paymentlink: "https//google.com",
    orderId: 12045793,
    price: 200,
    currency: "USD",
    invoiceURL: "url/images/www.you",
    date: "10/10/2022",
  },
]; */

const textStyle = {
  textAlign: "center",
  marginTop: "2rem",
  color: "rgba(0,0,0,0.7)",
};
const user_id = sessionStorage.getItem("userId");

const PaymentLink = () => {
  const [showModal, setShowModal] = useState(false);
  const [pay_currency, setpay_currency] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [priceErrMsg, setPriceErrMsg] = useState("");
  const [pay_currencyErr, setpay_currencyErr] = useState("");
  const [success, setSuccess] = useState(false);
  const [invoiceID, setInvoiceID] = useState('')

  const verifyPaymentLink = (e) => {
    e.preventDefault();
    if (price && pay_currency && price > 0) {
      console.log("fetching data");
      setLoading(true);
      axios
        .post("/?action=create_payment", null, {
          params: {
            user_id,
            amount: price,
            pay_currency,
          },
        })
        .then((resp) => {
          console.log(resp);
          console.log(resp.data);
          console.log(resp.data.data);
          // const data = resp.data.data;
          setLoading(false);
          // setUpdatedName(data);
          setPrice("");
          setpay_currency("");
          setInvoiceID(resp.data.data[0].invoiceID)
          setSuccess(true);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    } else {
      !price && setPriceErrMsg("Minimum price is $1");
      !pay_currency && setpay_currencyErr("No payment currency selected");
    }
  };
  const navigate = useNavigate();
  const params = { invoiceID: invoiceID, sort: 'date'};
  

  const generateInvoice = () =>
    navigate({
      pathname: '/payment_link-invoice',
      search: `?${createSearchParams(params)}`,
    });
  return (
    <>
      {success ? (
        generateInvoice()
        // <Navigate to="/payment_link-invoice" />
      ) : (
        <div>
          {showModal && <Backdrop />}
          <Header>
            <h4>Payment Link</h4>
            <span>
              You can‘t create invoices without API key, please go to Store
              Settings and create one.
              <div>
                <button onClick={() => setShowModal(true)}>
                  Create payment link
                </button>
                <input type="text" placeholder="payment ID/ order ID" />
              </div>
            </span>
          </Header>
          <Container>
            <Table>
             <PaymentLinkTable />
            </Table>
            {/* <p style={textStyle}>
              No payment links yet. It takes a couple of clicks to create one!
            </p> */}
          </Container>

          {showModal && (
            <Modal>
              <FormContainer>
                <Icon>
                  <CloseIcon onClick={() => setShowModal(false)} />
                </Icon>
                <FormHeader>
                  <h3>Create payment link</h3>
                </FormHeader>

                <form>
                  <InputContainer>
                    <InputLabel>Pay currency</InputLabel>
                    <select
                      name="coins"
                      id="coinsSelection"
                      value={pay_currency}
                      onChange={(e) => setpay_currency(e.target.value)}
                      onInput={() => setpay_currencyErr("")}
                    >
                      <option value="">All currencies</option>
                      <option value="DOGE">DOGE</option>
                      <option value="ETHERUM">ETHERUM</option>
                    </select>
                  </InputContainer>
                  <p
                    style={{
                      color: "red",
                      "font-weight": "lighter",
                      "margin-bottom": "-10px",
                      "margin-top": "-10px",
                    }}
                  >
                    {pay_currencyErr}
                  </p>
                  <InputContainer>
                    <InputLabel>Price</InputLabel>
                    <input
                      type="number"
                      placeholder="0.00"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                      onInput={() => setPriceErrMsg("")}
                    />
                    <Currency>USD</Currency>
                  </InputContainer>
                  <p
                    style={{
                      color: "red",
                      "font-weight": "lighter",
                      "margin-bottom": "-10px",
                      "margin-top": "-10px",
                    }}
                  >
                    {priceErrMsg}
                  </p>
                  <InputContainer>
                    <InputLabel>Order description</InputLabel>
                    <input type="text" placeholder="Optional" />
                  </InputContainer>
                  <InputContainer>
                    <InputLabel>Order ID</InputLabel>
                    <input type="text" placeholder="Optional" />
                  </InputContainer>

                  <button disabled={loading} onClick={verifyPaymentLink}>
                    {loading ? (
                      <MyCircularProgress size="1.5rem" />
                    ) : (
                      "Confirm payment"
                    )}
                  </button>
                </form>
              </FormContainer>
            </Modal>
          )}
        </div>
      )}
    </>
  );
};
const MyCircularProgress = styled(CircularProgress)`
  color: #fff !important;
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
const Modal = styled.div`
  position: absolute;
  top: 10%;
  z-index: 20;
  left: 40%;
  display: flex;
  justify-content: center;
  transition: 1s ease-in-out;
  @media (max-width: 1024px) {
    left: 30%;
    top: 10%;
  }
  @media (max-width: 719px) {
    left: 15%;
  }
  @media (max-width: 570px) {
    left: 10%;
  }
  @media (max-width: 500px) {
    left: 5%;
  }
`;
const Currency = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 2.5rem;
  font-weight: bold;
  color: rgb(0, 0, 0, 0.7);
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
  position: relative;
  input,
  select {
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

const Header = styled.div`
  margin-bottom: 2rem;
  div {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    flex-wrap: wrap;
    row-gap: 1rem;
    button {
      padding: 8px 32px;
      border: none;
      background: #f43b47;
      font-size: 16px;
      border-radius: 5px;
      color: #fff;
      :hover {
        background: #ff1361;
      }
    }
    input {
      border: 1px solid rgba(0, 0, 0, 0.3);
      padding: 10px;
      color: rgba(0, 0, 0, 0.7);
      border-radius: 5px;

      :focus {
        outline: none;
      }
    }
  }
`;
const Container = styled.div`
  background: #ffffff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
`;
const Table = styled.div`
  @media (max-width: 500px) {
    overflow-x: scroll;
  }
`;

export default PaymentLink;
