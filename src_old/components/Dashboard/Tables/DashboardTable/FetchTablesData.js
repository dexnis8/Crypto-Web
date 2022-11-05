import React,{useState,useEffect} from 'react'
const user_id = sessionStorage.getItem("userId");
  console.log(user_id);

  

  const fetchTableData = () => {
    console.log("fetching data");
    axios
      .post(TABLE_URL, null, {
        params: {
          user_id,
        },
      })
      .then((resp) => {
        console.log(resp.data.data);
       sessionStorage.setItem('tableData', resp.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    window.addEventListener("load", fetchTableData);
    return () => {
      window.removeEventListener("load", fetchTableData);
    };
  }, []);
  console.log(tableData);
  import React, { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";
import MOCK_DATA from "../../../MOCK_DATA (2).json";
import { COLUMNS } from "./columns";
import "./tableStyle.css";
import styled from "styled-components";
import PaymentFilter from "./PaymentFilter";

const PaymentTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );
  const { globalFilter } = state;
  return (
    <Container>
      <Header>
        <h4>All Payments</h4>
        <PaymentFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </Header>
      <Table>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Table>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
`;

const Table = styled.div`
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  border-radius: 5px;
  margin-top: 2rem;
  @media (max-width: 450px) {
    overflow-x: scroll;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  h4 {
    font-weight: bold;
  }
  @media (max-width: 580px) {
    flex-direction: column;
    row-gap: 1rem;
  }
`;
export default PaymentTable;
