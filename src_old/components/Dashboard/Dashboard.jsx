import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import { Outlet, Navigate } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useAuth } from "../../auth/auth";

// import UserDashbaord from './UserDashbaord'
// import { useAuth } from "../../auth/auth";
// import { useNavigate } from "react-router-dom";
const userName = sessionStorage.getItem('userName')

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const { logout } = useAuth();
  // const navigate = useNavigate();
  // const auth = useAuth();
  // const handleLogout = () => {
  //   auth.logout();
  //   navigate("/");
  // };
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.reload(true);
    <Navigate to="/" />;
  };

  return (
    <GridContainer>
      <Backdrop
        show={showSidebar}
        onClick={() => setShowSidebar(false)}
      ></Backdrop>
      <SideBarContainer show={showSidebar}>
        <SideBar logoSrc="./images/logo2.svg" />{" "}
      </SideBarContainer>
      <ContentContainer>
        <DashboardNav>
          <h4>
            <MenuBar onClick={() => setShowSidebar(true)} />
            Welcome {userName}
          </h4>
          <User>
            <span
              onClick={() =>
                showLogout ? setShowLogout(false) : setShowLogout(true)
              }
            >
              <AccountCircleOutlinedIcon />
            </span>
            {showLogout ? (
              <LogoutDropDown>
                <button onClick={handleLogout}>Logout</button>
              </LogoutDropDown>
            ) : null}
          </User>
        </DashboardNav>
        <ChangingContent>
          {/* <UserDashbaord/> */}
          <Outlet />
        </ChangingContent>
      </ContentContainer>
    </GridContainer>
  );
}

const User = styled.div`
  position: relative;
  display: flex;
`;

const LogoutDropDown = styled.div`
  position: absolute;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 /15%);
  background: #ffffff;
  border-radius: 5px;
  right: 1rem;
  top: 3rem;
  button {
    border: none;
    padding: 8px 32px;
    border-radius: 5px;
    :hover {
      background-color: #f43b47;
      color: #fff;
    }
  }
`;
const Backdrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 5;
  transition: 0.3s ease-in-out;
  display: ${(props) => (props.show ? "block" : "none")};
`;
const MenuBar = styled(MenuOutlinedIcon)`
  cursor: pointer;
  margin-right: -10px;
  visibility: hidden;
  @media (max-width: 900px) {
    margin-right: 1rem;
    visibility: visible;
  }
`;

const GridContainer = styled.div`
  margin: 0 auto;
  background-color: #f5f5f5;
`;
const SideBarContainer = styled.div`
  width: fit-content;
  position: fixed;
  top: 0;
  left: 0;
  height: fit-content;
  z-index: 10;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
  @media (max-width: 900px) {
    transform: ${(props) =>
      props.show ? "translateX(0)" : "translateX(-100%)"};
  }
`;
const ContentContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  margin-left: 235px;
  @media (max-width: 900px) {
    margin-left: 0;
  }
`;
const DashboardNav = styled.div`
  background: #ffffff;
  padding: 1rem;
  position: sticky;
  top: 0;
  right: 0;
  left: 235px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  z-index: 5;
  h4 {
    align-self: center;
    font-weight: bold;
  }
  span {
    padding: 10px;
    background: #f43b47;
    border-radius: 50%;
    color: #fff;
    margin-right: 1rem;
    cursor: pointer;
  }
`;
const ChangingContent = styled.div`
  padding: 2rem;
`;
export default Dashboard;
