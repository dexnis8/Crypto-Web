import React from "react";
import styled from "styled-components";
import Navbar from "../Landingpage/Navbar";
import "./AffliateTableStyles.css";
import Footer from "../Landingpage/Footer";
import { useNavigate } from "react-router-dom";

function SupportedCoins() {
  const navigate = useNavigate();
  return (
    <ContainerFluid>
      <HeroSection>
        <NavContainer>
          <Navbar />
        </NavContainer>
        <Container>
          <TextContainer>
            <h3>Supported Coins</h3>
            <span>
              The list of supported cryptocurrencies below is not final. We
              always work on bringing new tokens to the network. Most
              importantly, we listen to our user suggestions when they mention a
              new cryptocurrency we should support. The crypto world is growing,
              and we are looking to provide a service for everyone to use.
              Paying with any crypto is possible with EVAPayments, and you can
              easily embed it to your stores and websites simply by registering
              an account with EVAPayments!
            </span>
          </TextContainer>

          <CoinsContainer>
            <Header>
              <h4>Popular coins</h4>
              <input type="text" placeholder="Search..." />
            </Header>
            <Coins>
              <Coin>
                <img src="./images/btc.svg" alt="" />
                <span>Bitcoin (BTC)</span>
              </Coin>
              <Coin>
                <img src="./images/bch.svg" alt="" />
                <span>Bitcoin Cash (BCH)</span>
              </Coin>
              <Coin>
                <img src="./images/eth.svg" alt="" />
                <span>Etherum(ETH)</span>
              </Coin>
              <Coin>
                <img src="./images/xrp.svg" alt="" />
                <span>XRP (XRP)</span>
              </Coin>
              <Coin>
                <img src="./images/ltc.svg" alt="" />
                <span>Litecoin (LTC)</span>
              </Coin>
              <Coin>
                <img src="./images/usdt omni.svg" alt="" />
                <span>Tether (USDT OMNI)</span>
              </Coin>
              <Coin>
                <img src="./images/xmr.svg" alt="" />
                <span>Monero (XMR)</span>
              </Coin>
            </Coins>
          </CoinsContainer>

          <CoinsContainer>
            <Header>
              <h4>Stable Coins</h4>
            </Header>
            <Coins>
              <Coin>
                <img src="./images/btc.svg" alt="" />
                <span>Bitcoin (BTC)</span>
              </Coin>
              <Coin>
                <img src="./images/bch.svg" alt="" />
                <span>Bitcoin Cash (BCH)</span>
              </Coin>
              <Coin>
                <img src="./images/eth.svg" alt="" />
                <span>Etherum(ETH)</span>
              </Coin>
              <Coin>
                <img src="./images/xrp.svg" alt="" />
                <span>XRP (XRP)</span>
              </Coin>
              <Coin>
                <img src="./images/ltc.svg" alt="" />
                <span>Litecoin (LTC)</span>
              </Coin>
              <Coin>
                <img src="./images/usdt omni.svg" alt="" />
                <span>Tether (USDT OMNI)</span>
              </Coin>
              <Coin>
                <img src="./images/xmr.svg" alt="" />
                <span>Monero (XMR)</span>
              </Coin>
            </Coins>
          </CoinsContainer>

          <CoinsContainer>
            <Header>
              <h4>Other Coins & Tokens</h4>
            </Header>
            <Coins>
              <Coin>
                <img src="./images/xno.svg" alt="" />
                <span>nano (XNO)</span>
              </Coin>
              <Coin>
                <img src="./images/doge.svg" alt="" />
                <span>Dogecoin (DOGE)</span>
              </Coin>
              <Coin>
                <img src="./images/eth.svg" alt="" />
                <span>DASH (DASH)</span>
              </Coin>
              <Coin>
                <img src="./images/xrp.svg" alt="" />
                <span>XRP (XRP)</span>
              </Coin>
              <Coin>
                <img src="./images/ltc.svg" alt="" />
                <span>Litecoin (LTC)</span>
              </Coin>
              <Coin>
                <img src="./images/usdt omni.svg" alt="" />
                <span>Tether (USDT OMNI)</span>
              </Coin>
              <Coin>
                <img src="./images/xmr.svg" alt="" />
                <span>Monero (XMR)</span>
              </Coin>
              <Coin>
                <img src="./images/xrp.svg" alt="" />
                <span>XRP (XRP)</span>
              </Coin>
              <Coin>
                <img src="./images/ltc.svg" alt="" />
                <span>Litecoin (LTC)</span>
              </Coin>
              <Coin>
                <img src="./images/usdt omni.svg" alt="" />
                <span>Tether (USDT OMNI)</span>
              </Coin>
              <Coin>
                <img src="./images/xmr.svg" alt="" />
                <span>Monero (XMR)</span>
              </Coin>
            </Coins>
          </CoinsContainer>
        </Container>
      </HeroSection>

      <Footer />
    </ContainerFluid>
  );
}
const Coin = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 /15%);
  row-gap: 1rem;
  padding: 1rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
  :hover {
    transform: scale(1.1);
  }
  img {
    width: 50px;
    align-self: center;
  }
  span {
    text-align: center;
  }
  @media (max-width: 700px) {
    width: 200px;
    /* column-gap:10px; */
  }
  @media (max-width: 440px) {
    width: 160px;
  }
  @media (max-width: 360px) {
    width: 150px;
  }
  @media (max-width: 338px) {
    width: 100%;
  }
`;
const Coins = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 18%);
  column-gap: 2%;
  row-gap: 1rem;
  @media (max-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  row-gap: 1rem;

  h4 {
    font-size: 32px;
  }
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
    @media (max-width: 440px) {
      width: 100%;
    }
  }
`;
const CoinsContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
`;
const ContainerFluid = styled.div`
  overflow: hidden;
  h3 {
    /* text-align: center; */
    font-size: 40px;
    margin-top: 3rem;
    color: #111;
  }
`;
const HeroSection = styled.div``;

const Container = styled.div`
  /* padding-top: 2rem; */
  max-width: 100%;
  width: 1128px;
  margin: 0 auto;
  @media (max-width: 992px) {
    padding: 1rem;
  }
`;
const TextContainer = styled.div`
  color: #111;
  /* padding-top: 4rem; */
  display: flex;
  flex-direction: column;
  /* width: 500px; */
  align-content: center;
  row-gap: 1rem;
  h3 {
    font-weight: 700;
    line-height: 1.3;
  }
`;
const NavContainer = styled.div`
  padding-top: 10px;
  background: #061a40;
  position: sticky;
  top: 0;
`;

export default SupportedCoins;
