import React from "react";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, setIsAuthState] = React.useState({
    isAuth: false,
    token: null,
  });

  const loginUser = (token) => {
    setIsAuthState({ isAuth: true, token: token });
  };

  const logoutUser = () => {
    setIsAuthState({ isAuth: false, token: null });
  };

  return (
    <AuthContext.Provider value={{ authState, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
