import styled from "styled-components";
import React, { useState } from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../auth/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropDown, setShowDropDown] = useState(false);
  // const [showLists, setShowLists] = useState(false);
  const [burgerStatus, setburgerStatus] = useState(false);
  const user_id = sessionStorage.getItem("userId");

  return (
    <ContainerFluid>
      <MaxContainer>
        <Logo>
          <img
            src="/images/eva new white.png"
            alt="logo"
            onClick={() => navigate("/")}
          />
          {/* <h3 onClick={() => navigate("/")}>EVAPayments</h3> */}
          <MenuIcon onClick={() => setburgerStatus(true)}>
            <Hamburger />
          </MenuIcon>
        </Logo>
        <MenuList>
          <ul>
            <li>
              <Link to="/affliate_program">Affliate Program</Link>
            </li>
            <li>
              <Link to="/supported_coins">Supported Coins</Link>
            </li>
            <li>
              <a href=" ">API</a>
            </li>
            {user_id && (
              <li>
                <Link to="/user_dashboard">Dashboard</Link>
              </li>
            )}
            {/* <li>
              <a href=" ">Blog</a>
            </li> */}

            <li
              className="relative"
              onClick={() =>
                showDropDown ? setShowDropDown(false) : setShowDropDown(true)
              }
            >
              <a href="#">
                Help{" "}
                {showDropDown ? (
                  <ArrowDropUpIcon onClick={() => setShowDropDown(false)} />
                ) : (
                  <ArrowDropDownOutlinedIcon
                    onClick={() => setShowDropDown(true)}
                  />
                )}
              </a>
              <DropDownMenu show={showDropDown}>
                <li>
                  {" "}
                  <a href="help_faq">FAQ</a>{" "}
                </li>
                {/* <li>
                  {" "}
                  <a href=" ">Status Page</a>{" "}
                </li> */}
                <li>
                  {" "}
                  <a href="/help_contact-us">Contact Us</a>{" "}
                </li>
                {/* <li>
                  {" "}
                  <a href=" ">Support</a>{" "}
                </li> */}
              </DropDownMenu>
            </li>
            {!user_id && (
              <li>
                <Link to="/login">Sign In</Link>
              </li>
            )}
            {!user_id && (
              <li>
                <Link to="/register">Sign Up</Link>
              </li>
            )}
          </ul>
        </MenuList>

        <BurgerNav show={burgerStatus}>
          <p onClick={() => setburgerStatus(false)}>
            <MyCloseOutlinedIcon />
          </p>
          <li>
            <a href="/affliate_program">Affliate Program</a>
          </li>
          <li>
            <a href=" ">API Documentation</a>
          </li>
          <li>
            <a href="/supported_coins">Supported coins</a>
          </li>
          {/* <li>
            <a href=" ">Blog</a>
          </li> */}
          <li>
            <a href="/help_faq">FAQ</a>
          </li>
          <li>
            <a href="/help_contact-us">Contact us</a>
          </li>
          {/* <li>
            <a href=" ">Status page</a>
          </li> */}
          {/* <li>
            <a href=" ">Support </a>
          </li> */}
          <li>
            <a href="/login">Sign In </a>
          </li>
          <li>
            <a href="/register">Sign Up </a>
          </li>
        </BurgerNav>
      </MaxContainer>
    </ContainerFluid>
  );
};

const ContainerFluid = styled.div`
  /* width: 100%;
  background-image: linear-gradient(to left, #f43b47 0%, #453a94 100%); */
  /* position:sticky;
  top:0; */
`;
const MyCloseOutlinedIcon = styled(CloseOutlinedIcon)`
  color: #fff;
`;
const MaxContainer = styled.div`
  max-width: 100%;
  width: 1128px;
  margin: 0 auto;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  @media (max-width: 1200px) {
    width: 1140px;
  }
  @media (max-width: 992px) {
    width: 960px;
  }
  @media (max-width: 768px) {
    width: 720px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    position: relative;
  }
  @media (max-width: 576px) {
    width: 540px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const Hamburger = styled(MenuOutlinedIcon)`
  font-size: 32px !important;
  align-self: center;
  margin-top: -5px;
`;
const MenuList = styled.div`
  width: 55%;
  padding-right: 1rem;
  margin-top: 5px;

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    /* padding-top: 10px; */
  }

  li a {
    text-decoration: none;
    color: #fff;
    transition: 0.2s ease-in-out;
    :hover {
      font-weight: bolder;
    }
  }
  @media (max-width: 1000px) {
    width: 70%;
    margin-top: 10px;
  }
  @media (max-width: 830px) {
    width: 80%;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const Logo = styled.div`
  width: 20%;
  height: 80%;
  /* overflow: hidden; */
  color: #fff !important;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  /* padding-top: 10px; */

  img {
    margin-left: -0.8rem;
    margin-top: 5px;
    width: 100%;
    height: 100%;
    align-self: center;
    @media (max-width: 1188px) {
      margin-left: 0;
    }
  }
  @media (max-width: 1024px) {
    img {
      margin-left: 1rem;
    }
    h3 {
      margin-left: 1rem;
      color: #fff;
      margin-top: 5px;
    }
  }
  @media (max-width: 700px) {
    width: 100%;
    align-content: center;
    img {
      width: 40%;
    }
  }
`;
const MenuIcon = styled.span`
  justify-self: center;
  align-self: center;
  display: none;
  @media (max-width: 700px) {
    display: block;
    margin-right: 2rem;
  }
`;
const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
  margin-top: 1rem;
  background: #ffffff;
  padding: 1rem;
  position: absolute;
  width: 130px;
  right: 0;
  text-align: left;
  border-radius: 5px;
  z-index: 20;
  transition: 0.2s ease-in-out;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: ${(props) => (props.show ? "translateY(0%)" : "translateY(-10%)")};
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  li a {
    color: black;

    :hover {
      font-weight: bolder;
    }
  }
  @media (max-width: 700px) {
    position: static;
    box-shadow: none;
    width: 100%;
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
    display: ${(props) => (props.show ? "block" : "none")};
    margin-left: -1rem;
    li a {
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const BurgerNav = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #061a40;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  text-align: left;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;
  border-radius: 5px;
  p {
    justify-self: flex-end;
    cursor: pointer;
  }
  li {
    padding: 15px 0;
    border-bottom: 1px solid #003559;
    a {
      font-weight: 600;
      text-decoration: none;
      color: #fff;
    }
  }
`;

/* background-image: linear-gradient(to left, #f43b47 0%, #453a94 100%); */
/* background-image: linear-gradient(120deg, #8526b0 0%, #dc295a 100%); */
/* background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%); */
/* background-image: linear-gradient(to left, #cc208e 0%, #6713d2 100%); */
/* background-image: linear-gradient(-225deg,  #562B7C 0%,#FF3CAC 52%, #2B86C5 100%); */
/* background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%); */
/* Button gradient */
/* background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%,   #FFF800  100%); */
/* background-repeat: no-repeat; */

export default Navbar;
