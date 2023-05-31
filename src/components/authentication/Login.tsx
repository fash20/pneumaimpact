import React, { useState, useEffect, useContext } from "react";
import googleIcon from "../assets/images/icon-google.svg";
import logo from "../assets/images/pneumaImpact-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useScreenSize } from "../utils/useScreenSize";
import { Button, IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import TextField from '@mui/material/TextField';
import { BrandButtonStyle } from "../utils/UIThemes";
import { validateEmail } from "../utils/validator";
import toast, { Toaster } from "react-hot-toast";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import checkTokenExpired from "../utils/checkTokenExp";
import { AuthContext } from "../store/auth/authContext";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);


  const { signIn, userData } = useContext(AuthContext);
  

  const [screenSize, isScreenSmall] = useScreenSize();
  const navigate = useNavigate();
  const clientId =
    "643627771993-b1qcteo15v37rq14dld7rlnrh68uiveu.apps.googleusercontent.com";

  const onSuccess = (res: string) => {
    console.log("success:", res);
  };
  const onFailure = (err: string) => {
    console.log("failed:", err);
  };

  useEffect(() => {
    document.title = "Pneumalmpact - Login";
    // if(token){
    //   if ( checkTokenExpired(token)
    //   ) {
    //     navigate("/explore");
    //   }

      
    // }
    const initClient = () => {
      gapi.auth2.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, [navigate,]);

  const onchange = (
    event: React.ChangeEvent<HTMLInputElement>,
    input: string
  ) => {
    switch (input) {
      case "email":
        setUserCred({ ...userCred, email: event.target.value });
        break;
      case "password":
        setUserCred({
          ...userCred,
          password: event.target.value,
        });
        break;
      default:
        break;
    }
  };

  const handleLogin = () => {
    const validationResult = validateEmail(userCred.email);
    if (validationResult === undefined && userCred.password !== "") {
      // dispatch(loginUser(userCred));
      signIn(userCred.email, userCred.password);
    
    }
    else{
      toast.error("Ensure password field is not empty")
    }
    
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className="grid grid-cols-1 mx-5 mb:mx-5 md:mx-10 my-10 gap-y-14">
      <Toaster
        toastOptions={{
          className: "toaster",
        }}
      />
      <div className="flex justify-center">
        <img
          src={logo}
          className="object-contain h-20 w-20 "
          alt="Pneumalmpact"
        />
      </div>
      {<Toaster />}
      {isScreenSmall && (
        <div className="flex justify-around ">
          <IconButton className="gap-x-1">
            <img
              src={googleIcon}
              alt="googleIcon"
              className={`${!isScreenSmall ? "" : `drop-shadow-xl`}`}
            />
          </IconButton>
          {/* <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={() => onSuccess}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
          <IconButton className="flex gap-x-1 ">
            <img
              src={facebookIcon}
              alt="facebookIcon"
              className={`${!isScreenSmall ? "" : `drop-shadow-xl`}`}
            />
          </IconButton> */}
        </div>
      )}
      {!isScreenSmall && (
        <div className="flex justify-around ">
          {/* <Button className="gap-x-1" variant="outlined">
            <img
              src={googleIcon}
              alt="googleIcon"
              className={`${!isScreenSmall ? "" : `drop-shadow-xl`}`}
            />
            Login with Google
          </Button> */}
          {/* <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={() => onSuccess}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
          <Button className=" gap-x-1 " variant="outlined">
            <img src={facebookIcon} alt="facebookIcon" />
            Login with Facebook
          </Button> */}
        </div>
      )}
      <div className="text-center">
        {/* <Heading size={800}>OR</Heading> */}
      </div>
      <div className="grid grid-cols-1 gap-y-10">
        <div className="grid grid-cols-1 gap-y-8 sm:gap-y-8 md:gap-y-10 lg:gap-y-12">
          <TextField
            label="Email"
            className=""
            placeholder={"Email"}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "email")
            }
          />
            <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password" 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "password")
            }
            endAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            
          />
          <Button
            variant="pneumaBlue"
            onClick={() => handleLogin()}
            style={BrandButtonStyle}
          >
            Login
          </Button>
        </div>
        <div className="flex justify-between text-left">
          <Link
            to="/signup"
            className="font-inter text-[13px] md:text-[15px] text-primaryTextColor hover:underline"
          >
            Create an Account
          </Link>
          <Link
            to="/passwordreset"
            className="font-inter text-[13px] md:text-[15px]"
          >
            Forget Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
