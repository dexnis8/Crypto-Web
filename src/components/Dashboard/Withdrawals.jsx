import React from "react";
import styled from "styled-components";

const Withdrawals = () => {
  return (
    <ContainerFluid>
      <h4>Withdrawals</h4>
      <Container>
        <span>No withdrawals yet</span>
      </Container>
    </ContainerFluid>
  );
};
const ContainerFluid = styled.div`
  h4 {
    font-weight: bold;
  }
`;
const Container = styled.div`
  background: #ffffff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 /15%);
  span {
    text-align: center;
    margin: 2rem;
  }
`;
export default Withdrawals;
