import LandingPage from "./components/Landingpage/LandingPage";
// import Dashboard from "./components/Authentication/Dashboard";
// import Preference from "./components/Authentication/Preference";
import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "./components/Authentication/Login";
// import { useState } from "react";
import Register from "./components/Registration/Register";
import Login from "./components/Registration/Login";
import TwoFactorAuthentication from "./components/Registration/TwoFactorAuthentication";
import EmailVerification from "./components/Registration/EmailVerification";
import Invoice from "./components/Registration/Invoice";
import ErrorPage from "./components/ErrorPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Payment from "./components/Dashboard/Payment";
import Withdrawals from "./components/Dashboard/Withdrawals";
import Affliate from "./components/Dashboard/Affliate";
import PaymentSettings from "./components/Dashboard/Settings/PaymentSettings";
import AccountSettings from "./components/Dashboard/Settings/AccountSettings";
import CoinSettings from "./components/Dashboard/Settings/CoinSettings";
import UserDashbaord from "./components/Dashboard/UserDashbaord";
import PaymentLink from "./components/Dashboard/PaymentLink";
import AffliateProgram from "./components/Static Pages/AffliateProgram";
import SupportedCoins from "./components/Static Pages/SupportedCoins";
import { AuthProvider } from "./auth/auth";
import RequireAuth from "./components/RequireAuth";
import FAQ from "./components/Static Pages/FAQ";
import ContactUs from "./components/Static Pages/ContactUs";
import DashTable from "./components/Dashboard/Tables/DashboardTable/DashTable";
import InvoiceErrorPage from "./components/InvoiceErrorPage";
import InvoiceAuth from "./components/InvoiceAuth";
import PreSignUp from "./components/Registration/PreSignUp";
import VerifyEmail from "./components/Registration/VerifyEmail";


function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/email_verification" element={<EmailVerification />} />
          <Route path="/verification_successful" element={<VerifyEmail />} />
          <Route
            path="/payment_link-invoice"
            element={
              <InvoiceAuth>
                <Invoice />
              </InvoiceAuth>
            }
          />
          <Route path="" element={<Navigate to="/payment_link-invoice" />} />
          <Route
            path="/two_factor-authentication"
            element={<TwoFactorAuthentication />}
          />

          <Route path="/register" element={<PreSignUp />} />
          
          <Route path="/user_details" element={<Register />} />
          <Route
            path="user_dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<UserDashbaord />} />
            <Route path="payments" element={<Payment />} />
            <Route path="payment_link" element={<PaymentLink />} />
            <Route path="withdrawals" element={<Withdrawals />} />
            <Route path="affliate_program" element={<Affliate />} />
            <Route path="account_settings" element={<AccountSettings />} />
            <Route path="payment_settings" element={<PaymentSettings />} />
            <Route path="coin_settings" element={<CoinSettings />} />
          </Route>

          <Route path="/affliate_program" element={<AffliateProgram />} />
          <Route path="/supported_coins" element={<SupportedCoins />} />
          <Route path="/help_faq" element={<FAQ />} />
          <Route path="/help_contact-us" element={<ContactUs />} />
          <Route path="/unauthenticated_url-request" element={<InvoiceErrorPage />} />
          
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
