import React, { useEffect, useReducer, useState } from "react";
// import googleIcon from "../assets/images/icon-google.svg";
// import facebookIcon from "../assets/images/icon-facebook.svg";
import logo from "../assets/images/pneumaImpact-logo.svg";
import { Link, useNavigate, } from "react-router-dom";
import { useScreenSize } from "../utils/useScreenSize";
import { emailValidator, validateEmail } from "../utils/validator";
import toast from "react-hot-toast";
import {
  Button,
  Checkbox,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { BrandButtonStyle } from "../utils/UIThemes";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { register1 } from "../store/auth/AuthHelper";
import { reducer } from "../store/auth/authReducer";

interface User {
  loading: boolean;
  userInfo: undefined;
  userToken: string;
  error: string;
  success: boolean;
}

const Registration = () => {
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [screenSize, isScreenSmall] = useScreenSize();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [user, dispatch] = useReducer(reducer, null);


  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Pneumalmpact - Signup";
  }, [navigate]);

  const onchange = (
    event: React.ChangeEvent<HTMLInputElement>,
    input: string
  ) => {
    switch (input) {
      case "email":
        setUserCred({ ...userCred, email: event.target.value });
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "password1":
        setPassword1(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

  const handleMouseDownPassword1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleRegistration = () => {

    if (emailValidator(userCred.email)) {
      register1(userCred.email, password, password1).then(res=>{
        toast.success("registration successful")
        const { token, user:{email, role, isVerified} } = res.data;
        const user = { token, user:{email, role, isVerified} }
        dispatch({ type: "SIGN_IN", payload: user });
        toast.success("registration successful")
        navigate('/verification')
      })
      .catch(err=>{
        toast.error("Unable to complete registration: "+err )
      })
      
    }
    else {
      toast.error("Ensure no password field is empty")
    }
    
  };

  

  return (
    <div className="grid grid-cols-1 mx-5 mb:mx-5 md:mx-10 my-10 gap-y-14 ">
      <div className="flex justify-center">
        <img
          src={logo}
          className="object-contain h-20 w-20 "
          alt="Pneumalmpact"
        />
      </div>
      <div className="flex  ">
        {isScreenSmall && (
          <div className="flex justify-around w-full ">
            {/* <IconButton className="gap-x-1">
              <img
                src={googleIcon}
                alt="googleIcon"
                className={`${!isScreenSmall ? "" : `drop-shadow-xl`}`}
              />
            </IconButton>
            <IconButton className="flex gap-x-1 ">
              <img
                src={facebookIcon}
                alt="facebookIcon"
                className={`${!isScreenSmall ? " w-[15px]" : `drop-shadow-xl`}`}
              />
            </IconButton> */}
          </div>
        )}
        {!isScreenSmall && (
          <div className="flex justify-around w-full ">
            {/* <Button className="gap-x-1" variant="outlined">
              <img
                src={googleIcon}
                alt="googleIcon"
                className={`${!isScreenSmall ? "" : `drop-shadow-xl`}`}
              />
              Register with Google
            </Button>
            <Button className=" gap-x-1 " variant="outlined">
              <img src={facebookIcon} alt="facebookIcon" />
              Register with Facebook
            </Button> */}
          </div>
        )}
      </div>
      <div className="text-center">
        {/* <span className=" text-2xl font-inter">OR</span> */}
      </div>
      <div className="grid grid-cols-1 gap-y-4">
        <div className="grid grid-cols-1 gap-y-8 sm:gap-y-8 md:gap-y-10 lg:gap-y-12 ">
          <TextField
            label="Email"
            placeholder={"Email"}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "email")
            }
          />
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "password")
            }
            placeholder="Password"
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
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword1 ? 'text' : 'password'}
            placeholder="Confirm Password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "password1")
            }
            endAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword1}
                  edge="end"
                >
                  {showPassword1 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            
          />
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center">
                <Checkbox defaultChecked />
                <Link
                  to="/termsandconditions"
                  className="font-inter text-[13px] md:text-[15px] text-primaryTextColor hover:underline"
                >
                  Accept All
                </Link>
              </div>
              <Link
                to="/passwordreset"
                className="font-inter text-[13px] md:text-[15px]"
              >
                Forget Password?
              </Link>
            </div>
            <Button
              variant="pneumaBlue"
              style={BrandButtonStyle}
              onClick={() => {
                if (password === "" || password1 === "") {
                  toast.error("Password can't be empty");
                } else if (password === password1 && password !== "") {
                  setUserCred({ ...userCred, password });
                  handleRegistration();
                } else {
                  toast.error("Password Inconsistent");
                }
              }}
            >
              Next
            </Button>
          </div>
        </div>
        <span className="font-inter text-[13px] md:text-[15px] text-center">
          Have an Account?{" "}
          <Link to="/login" className="text-primaryTextColor hover:underline">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Registration;
