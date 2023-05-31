import { IconButton, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import logo from "../assets/images/pneumaImpact-logo.svg";
import { Link, useLocation } from "react-router-dom";
import { BrandButtonStyle } from "../utils/UIThemes";
import axios from "axios";
import toast from "react-hot-toast";
import { VisibilityOff } from "@material-ui/icons";
import { Visibility } from "@mui/icons-material";
import OtpInput from "react-otp-input";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../store/auth/AuthProvider";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    document.title = "Pneumalmpact - Reset Password";
  }, []);

  const resetPassword = () =>{ 
    axios.post("https://api.pneumaimpact.ng/v1/api/auth/forgot-password", {email})
    .then(res=> {
      toast.success("Reset password link has been sent to your mail");
      setShowNext(!showNext)
    })
    .catch(err=>{
      toast.error("Something went wrong while attempting to rest your password")
    })
  } 


  return (
   <div className="grid grid-cols-1 mx-10 my-10 gap-y-14 ">
{
  !showNext && (
    <><div className="flex justify-center">
            <img
              src={logo}
              className="object-contain h-20 w-20 "
              alt="Pneumalmpact" />
          </div><div className="text-center">
              <h2 className="font-inter text-gray2 text-lg md:text-2xl">
                Forgot Password
              </h2>
            </div><div className="grid grid-cols-1 gap-y-4">
              <div className="grid grid-cols-1 gap-y-8 sm:gap-y-8 md:gap-y-10 lg:gap-y-12">
                <TextField
                  label="Email"
                  placeholder={"Email"}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} />
                <Button
                  variant="pneumaBlue"
                  onClick={resetPassword}
                  style={BrandButtonStyle}
                >
                  Next
                </Button>
              </div>
              <span className="font-inter text-[13px] md:text-[15px] text-center">
                Have an Account?
                <Link to="/login" className="text-primaryTextColor hover:underline">
                  Next
                </Link>
              </span>
            </div></>
  )
}
{
  showNext && (
    <PasswordResetToken email={email}  />
  )
}
    </div>
  );
};

export default PasswordReset;


interface ResetPasswordProp {
  email: string
  token?: string
}


export const PasswordResetToken:React.FC<ResetPasswordProp> = ({email}) => {

  const [values, setValues] = React.useState("");
  const navigate = useNavigate();
  return(
    <div className="grid grid-cols-1 mx-10 my-10 gap-y-14 ">
    <div className="flex justify-center">
      <img
        src={logo}
        className="object-contain h-20 w-20 "
        alt="Pneumalmpact"
      />
    </div>
    <div className="text-center">
      <h2 className="font-inter text-gray2 text-lg md:text-2xl">
        Forgot Password
      </h2>
    </div>
    <div className="grid grid-cols-1 gap-y-4">
      <div className="grid grid-cols-1 gap-y-8 sm:gap-y-8 md:gap-y-10 lg:gap-y-12">
      <OtpInput
            value={values}
            onChange={(values: any) => setValues(values)}
            numInputs={6}
            separator={<span> </span>}
            inputStyle="input-style"
            containerStyle="container"
            isInputNum={false}
            shouldAutoFocus={true}
          />
        <Button
          variant="pneumaBlue"
          onClick={()=> {
            navigate('/createpassword', { state: { token: values, email: email } });
          }}
          style={BrandButtonStyle}
        >
         Next
        </Button>
      </div>
      <span className="font-inter text-[13px] md:text-[15px] text-center">
        Have an Account?
        <Link to="/login" className="text-primaryTextColor hover:underline">
          Login
        </Link>
      </span>
    </div>
  </div>

  )
}



export const CreateNewPassword:React.FC = () =>{
  const [showPassword,setShowPassword] = useState(false)
  const [showPassword1,setShowPassword1] = useState(false)
  const [password, setPassword] = useState({
    password: "",
    password1: ""
  })
  const location = useLocation()
  const token = (location.state as { token: string })?.token;
  const email = (location.state as { email: string })?.email;
  // const {user: {email}} = useAuth();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleMouseDownPassword1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const changePassord = () => {
    axios.post('https://api.pneumaimpact.ng/v1/api/auth/reset-password?token='+token, {email: email, password : password.password})
    .then(res=>{
      toast.success("Your password has been changed")
      navigate('/login')
    })
    .catch(err=>{
      toast.error("Sorry, we are unable to reset yout password")
    })

  }

  return(
    <div className="grid grid-cols-1 mx-10 my-10 gap-y-14 ">
      <div className="flex justify-center">
        <img
          src={logo}
          className="object-contain h-20 w-20 "
          alt="Pneumalmpact"
        />
      </div>
      <div className="text-center">
        <h2 className="font-inter text-gray2 text-lg md:text-2xl">
          Create New Password
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-y-4">
        <div className="grid grid-cols-1 gap-y-8 sm:gap-y-8 md:gap-y-10 lg:gap-y-12">        
        <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password" 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword({...password, password: event.target.value})
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
        <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword1 ? 'text' : 'password'}
            placeholder="Password" 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword({...password, password1: event.target.value})
            }
            endAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword1}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            />

          <Button
            variant="pneumaBlue"
            onClick={changePassord}
            style={BrandButtonStyle}
          >
            Create Password
          </Button>
        </div>
        <span className="font-inter text-[13px] md:text-[15px]  text-center">
          Have an Account?
          <Link to="/login" className="text-primaryTextColor hover:underline">
            Login
          </Link>
        </span>
      </div>
    </div>

  )
}