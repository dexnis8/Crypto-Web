import React, {  useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import axios from "../../../../api/axios";

const user_id = sessionStorage.getItem("userId");

const columns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Refferal Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'sum',
        selector: row => row.sum,
        sortable: true,
    },
   
];

let data;
const fetchTableData = () => {
  console.log("fetching data");
  axios
    .post('/?action=get_all_ref', null, {
      params: {
        user_id,
      },
    })
    .then((resp) => {
      console.log(resp.data.data);
      data = resp.data.data
    
    })
    .catch((err) => {
      console.log(err);
    });
};
const customStyles = {
  rows: {
      style: {
          minHeight: '50px', // override the row height
      },
  },
  headCells: {
      style: {
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
          textAlign:'center'
      },
  },
  cells: {
      style: {
          paddingLeft: '10px', // override the cell padding for data cells
          paddingRight: '10px',

      },
  },
};

function AffliatTable() {
  useEffect(()=>{
    fetchTableData()
  },[])
  // useEffect(() => {
  //   window.addEventListener("load", fetchTableData);
  //   return () => {
  //     window.removeEventListener("load", fetchTableData);
  //   };
  // }, []);
 
    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
            customStyles={customStyles}
           
        />
    );
};
export default AffliatTable;
