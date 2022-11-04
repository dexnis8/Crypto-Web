import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <ErrorContainer>
        <Image>
          <img src="./images/not-found.svg" alt="not-found" />
        </Image>
        <h2>Oops! THE PAGE YOU ARE LOOKING FOR IS NOT FOUND.</h2>
        <Link to="/">Back to Homepage</Link>
      </ErrorContainer>
    </>
  );
};
const ErrorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  flex-direction:column;
  width:400px;
  margin:0 auto;
`;

const Image = styled.div`
  align-self: center;
`;
export default ErrorPage;
