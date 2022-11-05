import React from "react";
import PurchaseTable from "./Tables/DashboardTable/PurchasesTable";
import PaymentTable from "./Tables/DashboardTable/PaymentTable";

const Payment = () => {
  return (
    <>
    <h3>All Payments</h3>
    <PaymentTable/>
      {/* <PurchaseTable /> */}
    </>
  );
};

export default Payment;
