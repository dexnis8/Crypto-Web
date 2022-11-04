import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";

const NextHero = () => {
  return (
    <>
      <ContainerFluidNextHero>
        <Container>
          <Lists>
            <List>
              <h1>120k+</h1>
              <h4>User Active</h4>
            </List>
            <List>
              <h1>100k+</h1>
              <h4>Wallet Type</h4>
            </List>
            <List>
              <h1>150k+</h1>
              <h4>Partners</h4>
            </List>
          </Lists>
        </Container>
      </ContainerFluidNextHero>
    </>
  );
};
const ContainerFluid = styled.div`
  width: 100%;
  height: 100%;
`;
const Lists = styled.div`
  display: flex;
  justify-content: space-around;
  color: #fff;
  @media (max-width: 390px) {
    flex-direction: column;
    row-gap: 1rem;
  }
`;
const List = styled.div`
  border-right: 1px solid #ffffff;
  border-left: 1px solid #ffffff;
  width: calc(100% / 3);
  align-self: center;
  text-align: center;
  h1 {
    font-size: 32px;
  }
  h4 {
    font-weight: 300;
    opacity: 0.6;
  }
  @media (max-width: 390px) {
    border: none;
  }
`;
const ContainerFluidNextHero = styled(ContainerFluid)`
  background:#061a40;
  padding: 2rem 0;
`;

export default NextHero;
