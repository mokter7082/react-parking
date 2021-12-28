import React, { createContext } from "react";
import useLocality from "../Hooks/useLocality";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allContext = useLocality();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
