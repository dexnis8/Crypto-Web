import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, NavLink, Link } from "react-router-dom";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import MediationOutlinedIcon from "@mui/icons-material/MediationOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import AddLinkOutlinedIcon from "@mui/icons-material/AddLinkOutlined";
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';

const navStyles = ({ isActive }) => {
  return {
    background: isActive ? "#003559" : "none",
    border: isActive && "none",
  };
};
const subNavStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "400",
    color: isActive ? "#f43b47" : "#fff",
  };
};

function SideBar({ logoSrc }) {
  const [showSettingsDropDown, setShowSettingsDropDown] = useState(false);
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      <BurgerNav>
        <Logo onClick={() => navigate("/")}>
          <img src="/images/eva new white.png" alt="Logo" />
          {/* <h3>Logo</h3> */}
          <hr />
        </Logo>
        <Link
          className={active ? "active2" : " "}
          to="/user_dashboard"
          onClick={() => setActive(true)}
        >
          <GridViewOutlinedIcon />
          Dashboard
        </Link>
        <NavLink
          style={navStyles}
          to="payments"
          onClick={() => setActive(false)}
        >
          <PaymentsOutlinedIcon />
          Payments
        </NavLink>
        <NavLink
          style={navStyles}
          to="payment_link"
          onClick={() => setActive(false)}
        >
           <AddLinkOutlinedIcon />
          Payment Link
        </NavLink>
        <NavLink
          style={navStyles}
          to="affliate_program"
          onClick={() => setActive(false)}
        >
          <GroupAddOutlinedIcon />
          Affliate
        </NavLink>
        <NavLink
          style={navStyles}
          to="withdrawals"
          onClick={() => setActive(false)}
        >
          <AccountBalanceWalletOutlinedIcon />
          Withdrawals
        </NavLink>
        <NavLink
          style={navStyles}
          to="account_settings"
          onClick={() => {
            showSettingsDropDown
              ? setShowSettingsDropDown(false)
              : setShowSettingsDropDown(true);
            setActive(false);
          }}
        >
          <SettingsOutlinedIcon />
          <div>
            Settings
            <MyArrowDropDownOutlinedIcon show={showSettingsDropDown} />
          </div>
        </NavLink>
        <DropDownItems show={showSettingsDropDown}>
          <NavLink
            style={subNavStyles}
            to="account_settings"
            onClick={() => setActive(false)}
          >
            Account Settings
          </NavLink>
          <NavLink
            style={subNavStyles}
            to="payment_settings"
            onClick={() => setActive(false)}
          >
            Payments Settings
          </NavLink>
          <NavLink
            style={subNavStyles}
            to="coin_settings"
            onClick={() => setActive(false)}
          >
            Coins Settings
          </NavLink>
        </DropDownItems>
        <ApiDoc>
          {/* <MediationOutlinedIcon /> */}
          <Link>API Docs</Link>
        </ApiDoc>
      </BurgerNav>
    </div>
  );
}
const ApiDoc = styled.span`
  color: #fff;
  display: flex;
  border-top: 1px solid #222;
  padding-top: 1rem;
  width: 100%;
`;
const MyArrowDropDownOutlinedIcon = styled(ArrowDropDownOutlinedIcon)`
  margin-left: 2rem;
  transition: 0.3s ease-in-out;
  transform: ${(props) => (props.show ? "rotate(180deg)" : "rotate(0deg)")};
`;
const DropDownItems = styled.div`
  transition: 0.3s ease-in-out;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-2rem)")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  a {
    font-size: 14px;
    margin-left: 20px;
  }
`;
const Logo = styled.div`
  height: 60px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center; 
  border-bottom: 1px solid #003559;
  padding-bottom: 2rem;
  align-content:center;
  margin-top:8px;
  
  img {
    height: 100%;
    width: 150px;
    margin-top: 10px;
    display:flex;
    justify-content: center; 

  }
`;
const BurgerNav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #061a40;
  max-width: 100%;
  width: 240px;
  z-index: 100;
  list-style: none;
  padding: 10px;
  text-align: left;
  transition: transform 0.2s ease-in-out;
  row-gap: 10px;
  height: 100vh;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 /15%);
  a {
    padding: 10px 25px;
    border-radius: 5px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    column-gap: 10px;
    cursor: pointer;
    color: #fff;
    /* font-weight: 600; */
    text-decoration: none;
    :hover {
      /* color: #111; */
      font-weight: bold;
    }
  }
`;

export default SideBar;
