import React from "react";
import styled from "styled-components";
import Switch from "@mui/material/Switch";

const CoinSettings = () => {
  return (
    <ContainerFluid>
      <h3>Coins settings</h3>
      <span>Here, you can choose the cryptocurrencies you want to accept.</span>
      <ul>
        <li>To choose a coin - simply click on its logo.</li>
        <li>
          If a coin is not chosen, it will not be available for payments through
          plugins or the donation widget. It will also not be available via
          invoices without the ‘pay_currency’ parameter specified
        </li>
      </ul>
      <span>You can also search for your desired coin</span>
      <input type="text" placeholder="Type coin name here" />
      <CoinsContainer>
        <Header>
          <h4>Popuar coins</h4>
          <Switch checked={false} name="twoFactor" />
        </Header>
        <Coins>
          <Coin>
            <span>BTC</span>
            <img src="/images/btc (1).svg" alt="img" />
          </Coin>
          <Coin>
            <span>ETH</span>
            <img src="/images/eth (1).svg" alt="img" />
          </Coin>
          <Coin>
            <span>LTC</span>
            <img src="/images/ltc (1).svg" alt="img" />
          </Coin>
          <Coin>
            <span>BCH</span>
            <img src="/images/bch (1).svg" alt="img" />
          </Coin>
          <Coin>
            <span>XVG</span>
            <img src="/images/xvg.svg" alt="img" />
          </Coin>
          <Coin>
            <span>TRX</span>
            <img src="/images/trx.svg" alt="img" />
          </Coin>
          <Coin>
            <span>DGB</span>
            <img src="/images/dgb.svg" alt="img" />
          </Coin>
          <Coin>
            <span>RVN</span>
            <img src="/images/rvn.svg" alt="img" />
          </Coin>
          <Coin>
            <span>DOGE</span>
            <img src="/images/doge (1).svg" alt="img" />
          </Coin>
          <Coin>
            <span>EGLD</span>
            <img src="/images/egld.svg" alt="img" />
          </Coin>
          <Coin>
            <span>DASH</span>
            <img src="/images/dash (1).svg" alt="img" />
          </Coin>
        </Coins>

        <Header addMargin={true}>
          <h4>Stable coins</h4>
          <Switch checked={false} name="twoFactor" />
        </Header>
        <Coins>
          <Coin>
            <span>BTC</span>
            <img src="/images/btc (1).svg" alt="img" />
          </Coin>
          <Coin>
            <span>ETH</span>
            <img src="/images/eth (1).svg" alt="img" />
          </Coin>
          <Coin>
            <span>LTC</span>
            <img src="/images/ltc (1).svg" alt="img" />
          </Coin>
          <Coin>
            <span>BCH</span>
            <img src="/images/bch (1).svg" alt="img" />
          </Coin>
          <Coin>
            <span>XVG</span>
            <img src="/images/xvg.svg" alt="img" />
          </Coin>
          <Coin>
            <span>TRX</span>
            <img src="/images/trx.svg" alt="img" />
          </Coin>
          <Coin>
            <span>DGB</span>
            <img src="/images/dgb.svg" alt="img" />
          </Coin>
          <Coin>
            <span>RVN</span>
            <img src="/images/rvn.svg" alt="img" />
          </Coin>
          <Coin>
            <span>DOGE</span>
            <img src="/images/doge (1).svg" alt="img" />
          </Coin>
          <Coin>
            <span>EGLD</span>
            <img src="/images/egld.svg" alt="img" />
          </Coin>
          <Coin>
            <span>DASH</span>
            <img src="/images/dash (1).svg" alt="img" />
          </Coin>
         
        </Coins>

        <Header addMargin={true}>
          <h4>Other currencies</h4>
          <Switch checked={false} name="twoFactor" />
        </Header>
        <Coins>
          <Coin>
            <span>BTC</span>
            <img src="/images/btc (1).svg" alt="img" />
          </Coin>
          <Coin>
            <span>ETH</span>
            <img src="/images/eth (1).svg" alt="img" />
          </Coin>
          <Coin>
            <span>LTC</span>
            <img src="/images/ltc (1).svg" alt="img" />
          </Coin>
          <Coin>
            <span>BCH</span>
            <img src="/images/bch (1).svg" alt="img" />
          </Coin>
          <Coin>
            <span>XVG</span>
            <img src="/images/xvg.svg" alt="img" />
          </Coin>
          <Coin>
            <span>TRX</span>
            <img src="/images/trx.svg" alt="img" />
          </Coin>
          <Coin>
            <span>DGB</span>
            <img src="/images/dgb.svg" alt="img" />
          </Coin>
          <Coin>
            <span>RVN</span>
            <img src="/images/rvn.svg" alt="img" />
          </Coin>
          <Coin>
            <span>DOGE</span>
            <img src="/images/doge (1).svg" alt="img" />
          </Coin>
          <Coin>
            <span>EGLD</span>
            <img src="/images/egld.svg" alt="img" />
          </Coin>
          <Coin>
            <span>DASH</span>
            <img src="/images/dash (1).svg" alt="img" />
          </Coin>
         
        </Coins>
      </CoinsContainer>
    </ContainerFluid>
  );
};
const ContainerFluid = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  h3 {
    font-size: 30px;
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
`;
const CoinsContainer = styled.div`
  margin-top: 1rem;
`;
const Coins = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 1rem;
  width: 60%;
  margin-top: 1rem;
  /* opacity:0.5; */
`;
const Coin = styled.div`
  display: flex;
  justify-content: space-around;
  width: 110px;
  background: #ffffff;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;
  span {
    align-self: center;
  }
  img {
    width: 30px;
    height: 30px;
  }
  :hover {
    box-shadow: 0 4px 8px 0 rgb(0 0 0 /15%);
  }
`;
const Header = styled.div`
  display: flex;
  column-gap: 3rem;
  margin-top: ${(props) => (props.addMargin ? "4rem" : "2rem")};
`;
export default CoinSettings;
