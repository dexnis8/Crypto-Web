import axios from "axios";
import { useAuth } from ".././auth/auth";
const userToken = sessionStorage.getItem("token");
export default axios.create({
  baseURL: "https://api.evapayments.com",
  headers: { Authorization: `Bearer ${userToken}` },
});
