import { FunctionComponent, ReactNode, useContext, useReducer } from "react";
import { AuthContext } from "./authContext";
import { reducer } from "./authReducer";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


interface AuthProviderProps{
    children: ReactNode
}

const userFromLocalStorage = localStorage.getItem("userData");
const initialUser = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;

export const AuthProvider:FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [userData, dispatch] = useReducer(reducer, initialUser);
  const navigate = useNavigate();


  const signIn = async (email: string, password: string) => {    
    const response = await fetch("https://api.pneumaimpact.ng/v1/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
  
    if (response.ok) {
      const {  token, user:{email, isVerified, role  } } = await response.json();
      const user = {  token, user: {email, isVerified, role}};
      dispatch({ type: "SIGN_IN", payload: user });
        navigate('/explore')
    } else {
      toast.error("Login error")
    }
  };


  const signOut = () => {
    dispatch({ type: "SIGN_OUT" });
  };

  return (
    <AuthContext.Provider value={{ userData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = ()=> useContext(AuthContext);