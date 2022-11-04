import { useState, createContext, useContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState(" ");
  const [auth, setAuth] = useState({ loggedin: false, userID: null });
  const [userEmail, setUserEmail] = useState("");

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        auth,
        setAuth,
        token,
        setToken,
        userEmail,
        setUserEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
