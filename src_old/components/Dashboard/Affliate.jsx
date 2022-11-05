import React,{useEffect, useState} from "react";
import styled from "styled-components";
import AffliatTable from "./Tables/DashboardTable/AffliateTable";
import axios from "../../api/axios";


const user_id = sessionStorage.getItem("userId");



const Affliate = () => {
  const [totalRef, setTotalRef] = useState(0);
  const [weekRef, setWeekRef] = useState(0)
  const [estimate, setEstimate] = useState(0)
  const [refLink, setRefLink] = useState('')
  const getAffliatedetails=()=>{
    axios
    .post('/?action=get_total_ref', null, {
      params: {
        user_id,
      },
    })
    .then((resp) => {
      console.log(resp.data.data);
      const data = resp.data.data[0]
      setTotalRef(data.total)
      setWeekRef(data.weekly)
      setRefLink(data.url)
      setEstimate(data.est)
    
    })
    .catch((err) => {
      console.log(err);
    });
  }
  useEffect(()=>{
    getAffliatedetails()
  },[])
  return (
    <>
      <Header>
        <h4>Affliate Program (statistics)</h4>
        <button>Request payout</button>
      </Header>
      <Statistics>
        <Card>
          <span>Total Number of Referrals</span>
          <h1>{totalRef}</h1>
        </Card>
        <Card>
          <span>Referrals this week</span>
          <h1>{weekRef}</h1>
        </Card>
        <Card>
          <span>Estimated profit</span>
          <h1>{estimate}</h1>
        </Card>
      </Statistics>
      <RefferalProgram>
        <h4>Refferal Program</h4>
        <RefferalLink>
          <span>
            Pass this link to users so that we can determine that they were
            invited by you
          </span>
          <p>{refLink}</p>
          <button>Copy Link</button>
        </RefferalLink>
      </RefferalProgram>
      <MyRefferals>
        <h4>My Refferals</h4>
         <AffliatTable /> 
      </MyRefferals>
    </>
  );
};

const RefferalProgram = styled.div`
  margin-top: 3rem;
  h4 {
    font-weight: bold;
  }
`;
const MyRefferals = styled(RefferalProgram)`
  // div {
  //   padding: 1rem;
  //   box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  //   border-radius: 5px;
  //   background: #ffffff;
  //   margin-top: 1rem;
  //   // height: 3rem;
  // }
`;
const RefferalLink = styled.div`
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  border-radius: 5px;
  background: #ffffff;
  margin-top: 1rem;

  p {
    padding: 5px;
    /* background: rgba(0, 0, 0, 0.1); */
    background: #f5f5f5;
    margin-top: 10px;
  }

  button {
    padding: 8px 16px;
    border: none;
    background: #f43b47;
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
    :hover {
      background: #ff1361;
    }
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  row-gap: 1rem;
  h4 {
    font-weight: bold;
  }

  button {
    padding: 8px 16px;
    border: none;
    background: #f43b47;
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
    :hover {
      background: #ff1361;
    }
  }
`;

const Statistics = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  justify-content: space-between;
`;

const Card = styled.div`
  background: #ffffff;
  padding: 1rem;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-content: center;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  cursor: pointer;
  transition: 0.3s ease-in-out;
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
  span {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.6);
  }
  :hover {
    background: #061a40;

    span,
    h1 {
      color: #fff;
      transform: scale(1.1);
    }
  }
  @media (max-width: 520px) {
    width: 100%;
  }
`;

export default Affliate;
