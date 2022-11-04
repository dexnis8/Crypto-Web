import React, { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";
import MOCK_DATA from "../../../MOCK_DATA (2).json";
import { PURCHASE_COLUMNS } from "./PurchaseColumn";
import "./tableStyle.css";
import styled from "styled-components";
import PurchaseFilter from "./PurchaseFilter";

const tableBg = {
  backgroundColor: "#f5f5f5",
};

const PurchaseTable = () => {
  const columns = useMemo(() => PURCHASE_COLUMNS, []);
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
        <h4>Purchases</h4>
        <PurchaseFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </Header>
      <Table>
        <table {...getTableProps()} style={tableBg}>
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
  margin-top: 4rem;
`;

const Table = styled.div`
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
  border-radius: 5px;
  @media (max-width:450px){
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
export default PurchaseTable;
