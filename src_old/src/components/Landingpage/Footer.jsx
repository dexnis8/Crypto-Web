import React from "react";
import { CDBFooter, CDBBtn, CDBIcon, CDBBox, CDBContainer } from "cdbreact";
import styled from "styled-components";

const Footer = () => {
  return (
    <ContainerFluid>
      <CDBContainer>
        <CDBFooter className="">
          <CDBBox
            display="flex"
            flex="column"
            className="mx-auto py-5"
            style={{ width: "90%" }}
          >
            <CDBBox
              display="flex"
              justifyContent="between"
              className="flex-wrap"
            >
              <CDBBox alignSelf="start" className="mb-4">
                <a href="/" className="d-flex align-items-center p-0 mb-3">
                  <img
                    src="/images/eva new white.png"
                    alt="logo"
                    width="200px"
                  />

                  {/* <span className="ml-3 h5 font-weight-bold">EVAPayments</span> */}
                </a>
                <CDBBox className="mt-1" display="flex">
                  <CDBBtn flat color="" className="p-2">
                    <CDBIcon fab icon="facebook-f" />
                  </CDBBtn>
                  <CDBBtn flat color="" className="mx-3 p-2">
                    <CDBIcon fab icon="twitter" />
                  </CDBBtn>
                  <CDBBtn flat color="" className="p-2">
                    <CDBIcon fab icon="instagram" />
                  </CDBBtn>
                </CDBBox>
              </CDBBox>
              <CDBBox alignSelf="end">
                <p
                  className="h5 mb-4"
                  style={{ fontWeight: "600" }}
                  alignSelf="end"
                >
                  EVAPayments
                </p>
                <CDBBox
                  display="flex"
                  flex="column"
                  style={{ cursor: "pointer" }}
                  className="mb-4"
                >
                  <a href="/affliate_program">Affliate Program</a>
                  <a href="/supported_coins"> Surported Coins</a>
                  <a href="/">Api Docs</a>
                  {/* <a href="/">Blog</a> */}
                </CDBBox>
              </CDBBox>
              <CDBBox alignSelf="start">
                <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                  Help
                </p>
                <CDBBox
                  display="flex"
                  flex="column"
                  style={{ cursor: "pointer" }}
                >
                  <a href="/">Contact us</a>
                  <a href="/">FAQ</a>
                  {/* <a href="/">Support</a> */}
                </CDBBox>
              </CDBBox>
              <CDBBox alignSelf="start">
                <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                  Membership
                </p>
                <CDBBox
                  display="flex"
                  flex="column"
                  style={{ cursor: "pointer" }}
                >
                  {/* <a href="/">Need help?</a> */}
                  <a href="/register">Sign Up</a>
                  <a href="/login">Sign In</a>
                </CDBBox>
              </CDBBox>
            </CDBBox>
            <small className="text-center mt-5">
              &copy; EVAPayments, 2022. All rights reserved.
            </small>
          </CDBBox>
        </CDBFooter>
      </CDBContainer>
    </ContainerFluid>
  );
};

const ContainerFluid = styled.div`
  background: #061a40;
  color: #fff;
  padding: 50px 0;
  a,
  span {
    color: #fff;
  }
`;
export default Footer;
