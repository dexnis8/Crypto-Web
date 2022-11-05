import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DashTable from "./Tables/DashboardTable/DashTable";
import BarChart from "./BarChart";
// import { UserData } from "./ChartData";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/auth";
import axios from "../../api/axios";

const CHART_URL = "/?action=get_chart_tx";
const TODAY_URL = '/?action=get_todays_tx'
const WEEK_URL = '/?action=get_weeks_tx'
const MONTH_URL = '/?action=get_months_tx'
const ALLTIME_URL = '/?action=get_alltime_tx'

const UserDashbaord = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [today, setToday]=useState(0)
  const [week, setWeek]=useState(0)
  const [month, setMonth]=useState(0)
  const [allTime, setAllTime]=useState(0)
  // const { token } = useAuth();
  
  const user_id = sessionStorage.getItem("userId");
  // console.log(user_id);
  const fetchData = () => {
    axios
      .post(CHART_URL, null, {
        params: {
          user_id,
        },
      })
      .then((resp) => {
        // console.log(resp.data.data);
        setUserData(resp.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTodayTransactions = () => {
    axios
      .post(TODAY_URL, null, {
        params: {
          user_id,
        },
      })
      .then((resp) => {
        // console.log(resp.data.data);
        setToday(resp.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    window.addEventListener("load", getTodayTransactions);
    return () => {
      window.removeEventListener("load", getTodayTransactions);
    };
  });

  const getWeekTransactions = () => {
    axios
      .post(WEEK_URL, null, {
        params: {
          user_id,
        },
      })
      .then((resp) => {
        // console.log(resp.data.data);
        setWeek(resp.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    window.addEventListener("load", getWeekTransactions);
    return () => {
      window.removeEventListener("load", getWeekTransactions);
    };
  });
  const getMonthTransactions = () => {
    axios
      .post(MONTH_URL, null, {
        params: {
          user_id,
        },
      })
      .then((resp) => {
        // console.log(resp.data.data);
        setMonth(resp.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
/* 
  useEffect(() => {
    window.addEventListener("load", getMonthTransactions);
    return () => {
      window.removeEventListener("load", getMonthTransactions);
    };
  }); */
  const getAllTimeTransactions = () => {
    axios
      .post(ALLTIME_URL, null, {
        params: {
          user_id,
        },
      })
      .then((resp) => {
        // console.log(resp.data.data);
        setAllTime(resp.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /* useEffect(() => {
    window.addEventListener("load", getAllTimeTransactions);
    return () => {
      window.removeEventListener("load", getAllTimeTransactions);
    };
  }); */
  
  const chartData = {
    labels: userData.map((date) => date.created_at),
    datasets: [
      {
        label: "Transactions",
        data: userData.map((amt) => amt.amount),
        backgroundColor: ["#061a40", "#ff5a5f", "#006daa"],
        borderColor: "black",
        borderWidth: 0.5,
      },
    ],
  };

 
  useEffect(() => {
    fetchData()
    getTodayTransactions()
    getWeekTransactions()
    getAllTimeTransactions()
    getMonthTransactions()
  },[]);
  return (
    <Main>
      <h4> Dashboard (payments statistics)</h4>
      <Container>
        <ChartContainer>
          <BarChart chartData={chartData} />
        </ChartContainer>
        <Statistics>
          <Card>
            <span>Today</span>
            <h1>{today}</h1>
          </Card>
          <Card>
            <span>This week</span>
            <h1>{week}</h1>
          </Card>
          <Card>
            <span>This Month</span>
            <h1>{month}</h1>
          </Card>
          <Card>
            <span>All Time</span>
            <h1>{allTime}</h1>
          </Card>
        </Statistics>
      </Container>
      <RecentPayments>
        <PaymentHeader>
          <h4>Recent Payments</h4>
          <button onClick={() => navigate("/user_dashboard/payments")}>
            See All
          </button>
        </PaymentHeader>
        <TableContainer>
          <DashTable />
        </TableContainer>
      </RecentPayments>
    </Main>
  );
};
const Main = styled.div`
  h4 {
    font-weight: bold;
  }
`;

const PaymentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
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
const TableContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  border-radius: 5px;
`;
const RecentPayments = styled.div``;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  margin-bottom: 4rem;
  row-gap: 2rem;

  @media (max-width: 1031px) {
    flex-direction: column;
  }
`;
const ChartContainer = styled.div`
  max-width: 50%;
  width: 700px;
  /* border: 1px solid red; */
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  height: 300px;
  border-radius: 5px;
  padding: 1rem;
  height: fit-content;
  @media (max-width: 1031px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

const Statistics = styled.div`
  width: 350px;
  display: grid;
  grid-template-columns: repeat(2, 47%);
  column-gap: 3%;
  flex-wrap: wrap;
  row-gap: 10px;
  align-self: flex-start;
  @media (max-width: 1031px) {
    width: 100%;
    grid-template-columns: repeat(2, 48.5%);
  }
`;

const Card = styled.div`
  background: #ffffff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  cursor: pointer;
  transition: 0.3s ease-in-out;

  span {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.6);
  }
  :hover {
    background: #f43b47;

    span,
    h1 {
      color: #fff;
      transform: scale(1.1);
    }
  }
`;

export default UserDashbaord;
