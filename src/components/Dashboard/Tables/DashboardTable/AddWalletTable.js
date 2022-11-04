import React, {  useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import axios from "../../../../api/axios";

const user_id = sessionStorage.getItem("userId");

const columns = [
    {
        name: 'Currency',
        selector: row => row.currency,
        sortable: true,
    },
    {
        name: 'Invoice URL',
        selector: row => row.url,
        sortable: true,
    },
  
    {
        name: 'Date',
        selector: row => row.date,
        sortable: true,
    },
   
   
];

let data;
const fetchTableData = () => {
  console.log("fetching table data");
  axios
    .post('/?action=get_invoice_list', null, {
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
          textAlign:'center'

      },
  },
};

function AddWalletTable() {
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
export default AddWalletTable;
