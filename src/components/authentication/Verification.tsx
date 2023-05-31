import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import logo from "../assets/images/pneumaImpact-logo.svg";
import "../styles/General.css";
import { Link, useNavigate } from "react-router-dom";
import { BrandButtonStyle } from "../utils/UIThemes";
import OtpInput from "react-otp-input";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../store/auth/AuthProvider";
import jwtDecode from "jwt-decode";

const Verification = () => {
  const { userData : {token} } = useAuth();
  const [values, setValues] = React.useState("");
  const navigate = useNavigate();

  const handleVefrifcation = () => {
  
    axios
      .post(
        "https://api.pneumaimpact.ng/v1/api/auth/verify-user-account",
        {
          token: values,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        })
      .then((res) => {
        // userData.isverified = true;
        // let user = JSON.parse(localStorage.getItem("user"));
        // if (user) {
        //   user.isVerified = true;
        //   localStorage.clear();
        //   localStorage.setItem("user", JSON.stringify(user));
          navigate("/personalinfo");
        // }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  useEffect(() => {
    if (token ) {
      toast.success("Verication code was sent to " + jwtDecode(token));
      axios
        .post(
          "https://api.pneumaimpact.ng/v1/api/auth/resend-verification-email",
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => toast.success("verifcation code sent to your mail"))
        .catch((err) => toast.error("unable to send verifcation code "));
    } else {
      toast.error("Login or create an account");
      navigate("/login");
    }
  }, []);
  return (
    <div className="grid grid-cols-1 mx-10 my-10 gap-y-14 ">
      <div className="flex justify-center">
        <img
          src={logo}
          className="object-contain h-20 w-20 "
          alt="Pneumalmpact"
        />
      </div>
      <div className=" grid text-center gap-y-5">
        <h2 className="font-inter text-gray2 text-lg md:text-2xl">
          Authentication
        </h2>
        <h2 className="font-inter text-sm md:text-xl">
          Copy and paste the code sent to your mail
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-y-5">
        <div className="flex justify-center items-center grid-cols-1 gap-x-1 w-full">
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
        </div>
        <Button
          variant="pneumaBlue"
          style={BrandButtonStyle}
          onClick={handleVefrifcation}
        >
          Done
        </Button>
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

export default Verification;
