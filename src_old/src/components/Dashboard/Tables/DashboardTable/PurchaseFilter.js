import React from "react";
import styled from "styled-components";


const PurchaseFilter = ({ filter, setFilter }) => {
  return (
    <Container>
  <div>
  <span>Filter By Purchase ID:</span>
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Enter purchase ID"
      />
  </div>
   <div>
   <span>Filter by Date:</span>
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder=" (mm/dd/yyyy)"
      />
   </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  column-gap: 1rem;
  flex-wrap: wrap;
  row-gap: 1rem;
  
  span {
    margin-right: 10px;
  }
  input {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: 5px;
    padding-left: 10px;

    :focus {
      border: 1px solid #f43b47;
      outline: none;
    }
  }
`;
export default PurchaseFilter;
