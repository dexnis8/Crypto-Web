import { Container } from "@mui/system";
import React from "react";
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'

const MarqueeCom = () => {
 
  return (
    <>
<ContainerFluid>
<Container>
<Marquee>
<Items>
<Item>
 <CoinLogo>
    <img src='' alt=''/>
    </CoinLogo>
    <CoinName>BTC</CoinName>
 </Item>

<Item>
 <CoinLogo>
    <img src='' alt=''/>
    </CoinLogo>
    <CoinName>BTC</CoinName>
 </Item>

<Item>
 <CoinLogo>
    <img src='' alt=''/>
    </CoinLogo>
    <CoinName>BTC</CoinName>
 </Item>

<Item>
 <CoinLogo>
    <img src='' alt=''/>
    </CoinLogo>
    <CoinName>BTC</CoinName>
 </Item>
</Items>
</Marquee>

</Container>
</ContainerFluid>
    </>
  );
};

const ContainerFluid = styled.div`

`
const Items = styled.div``
const Item = styled.div`
display:flex;
flex-direction:column;
row-gap:5px;
`
const CoinLogo = ''
const CoinName= styled.div``


export default MarqueeCom;
