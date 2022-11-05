// import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  /*   {
    Header: "Id",
    accessor: "id",
//     Filter: ColumnFilter,
    disableFilters: true, // used to disable column filtering for a column
  }, */
  {
    Header: "Order ID",
    accessor: "id",
    //     Filter: ColumnFilter,
  },
 
  {
    Header: "Amount Sent",
    accessor: "amount",
    //     Filter: ColumnFilter,
  },
  {
    Header: "Amount Received",
    accessor: "amount_received",
    //     Filter: ColumnFilter,
  },
  {
    Header: "Date",
    accessor: "created_at",
    //     Filter: ColumnFilter,
  },
  {
    Header: "Status",
    accessor: "status",
    //     Filter: ColumnFilter,
  },
];
