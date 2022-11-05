import React, {  useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import axios from "../../../../api/axios";

const user_id = sessionStorage.getItem("userId");

const columns = [
    {
        name: 'Order  ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Amount Sent',
        selector: row => row.amount,
        sortable: true,
    },
    {
        name: 'Amount Received',
        selector: row => row.amount_received,
        sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.created_at,
      sortable: true,
      conditionalCellStyles:[
        {
          when: row => row.created_at,
          style: {
              marginLeft:'-10px'
            
          },
      },
      ]
  },
  {
    name: 'Status',
    selector: row => row.status,
    conditionalCellStyles: [
      {
          when: row => row.status === 'completed',
          style: {
              
              color: 'green',
              '&:hover': {
                  cursor: 'pointer',
              },
          },
      },
      {
          when: row => row.status === 'pending',
          style: {
              
              color: 'black',
              '&:hover': {
                  cursor: 'pointer',
              },
          },
      },
      {
          when: row => row.status === 'partially_paid',
          style: {
              
              color: 'orange',
              '&:hover': {
                  cursor: 'pointer',
              },
          },
      },
      {
          when: row => row.status === 'incoming',
          style: {
              
              color: 'blue',
              '&:hover': {
                  cursor: 'pointer',
              },
          },
      },
      {
          when: row => row.status === 'cancelled',
          style: {
              
              color: 'red',
              '&:hover': {
                  cursor: 'pointer',
              },
          },
      },
  ],
    sortable: true,
},
];

let data;
const fetchTableData = () => {
  console.log("fetching data");
  axios
    .post('/?action=get_all_tx', null, {
      params: {
        user_id,
      },
    })
    .then((resp) => {
      // console.log(resp.data.data);
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

function DashTable() {
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
export default DashTable;
