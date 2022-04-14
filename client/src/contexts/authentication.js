import React, { useState } from "react";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });

  // make a login request
  const login = () => {};

  // register the user
  const register = () => {};

  // clear the token in localStorage and the user data
  const logout = () => {};

  return (
    <AuthContext.Provider value={{ state, login, logout, register }}>
      {props.children}
    </AuthContext.Provider>
  );
}

// this is a hook that consume AuthContext
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
