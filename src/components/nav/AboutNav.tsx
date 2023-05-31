import { Avatar, Button, Drawer, IconButton } from "@mui/material";
import { Dehaze } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/pneumaImpact-logo-2.svg";
import "../styles/General.css";
import { BrandButtonStyle } from "../utils/UIThemes";
import { useScreenSize } from "../utils/useScreenSize";
import avatar from "../assets/images/avatar.svg";
import { useAuth } from "../store/auth/AuthProvider";

const AboutNav = () => {
  const { userData  } = useAuth();
  const [screenSize, isScreenSmall] = useScreenSize();
  const [showDrawer, setShowDrawer] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedin] = useState<Boolean>(userData === null ? false:true)
  // const dispatch = useDispatch<AppDispatch>()

  useEffect(()=>{
    // if(selector.userData){
    //   // dispatch(getUserDetails())      
    // }
  }, [])
  return (
    <div className="navbar bg-primaryTextColor">
      <div
        className={`h-16 grid justify-center  items-center ${
          isScreenSmall ? "grid-cols-2" : "grid-cols-3"
        }`}
      >
        <a href="/">
          <div className="flex justify-center items-center space-x-3 sm:space-x-4 ">
            <img className="w-10 h-10" src={logo} alt="logo" />
            <label className=" font-zcool text-lg sm:text-xl  md:text-2xl text-white">Pneuma impact</label>
          </div>
        </a>
        {isScreenSmall && (
          <div className=" text-right pr-10">
            <IconButton onClick={() => setShowDrawer(!showDrawer)}>
              <Dehaze />
            </IconButton>
          </div>
        )}
        {!isScreenSmall && (
          <div className="flex items-center font-poppins  justify-around p-5 text-white ">
            <a href="/explore" className="">
              Explore
            </a>
            <a href="/blogs" className="">
              Blog
            </a>
            <a href="/about" className="">
              About us
            </a>
          </div>
        )}
        {!isScreenSmall &&  (
          isUserLoggedIn ?
          <div className="flex flex-row space-x-3 justify-center items-center ">
              <Link to='/user/dashboard'>
              <div className="">
                <Avatar  />
              </div>
              </Link>
              <Link to='/user/dashboard'>
              <div className="flex text-sm flex-col justify-start ">
                <h3 className="font-inter  text-white font-bold">
                  Hi, there
                </h3>
                <h4 className="font-inter text-white text-sm font-[100] ">
                  {
                    // selector.userData.user
                  }
                </h4>
              </div>
              </Link>
            </div>
          :(
          <div className="flex justify-center gap-4 space-x-4 w-full">
            <Button
              variant="pneumaWhite"
              style={BrandButtonStyle}
              className=" shadow-md sm:w-fit lg:w-[120px]"
              href="/login"
            >
              Log In
            </Button>
            <Button
              variant="pneumaWhite"
              style={BrandButtonStyle }
              className="shadow-md bg-white  sm:w-fit lg:w-[120px] border-[1px] border-white"
              href="/signup"
            >
              Sign Up
            </Button>
          </div>)
        )}
      </div>
      {showDrawer && isScreenSmall && (
        <></>
        // <TopDrawer setShow={setShowDrawer} show={showDrawer} userData={selector.userData} isUserLoggedIn={isUserLoggedIn}/>
      )}
    </div>
  );
};

export default AboutNav;

interface TopDrawerProps {
  show: boolean;
  setShow: (show: boolean) => void;
  userData: {
    user: string
  }
  isUserLoggedIn:Boolean
}

const TopDrawer = ({ show, setShow, userData, isUserLoggedIn }: TopDrawerProps) => {

  const handleButtonClick = () => {
    setShow(!show)
  }
  return (
    <Drawer  anchor="left" open={show}>
      <div className='flex flex-col space-y-5 w-[300px] p-5'>
      <a href="/">
          <div className="flex justify-left space-x-2 ">
            <img className="w-8 h-8" src={logo} alt="logo" />
            <label className=" font-zcool text-xl">Pneuma Impact</label> 
          </div>
        </a>
        <div className="flex flex-col items-start space-y-10 justify-around ">
          <a href="/explore" className="nav-link">
            Explore
          </a>
          <a href="/blogs" className="nav-link">
            Blog
          </a>
          <a href="/about" className="nav-link">
            About us
          </a>
        </div>
        {isUserLoggedIn ?
          <div className="flex flex-row gap-3">
              <Link to='/user/dashboard'>
              <div className="">
                {/* <img src={avatar} /> */}
                {/* <Avatar src={avatar} /> */}
              </div>
              </Link>
              <Link to='/user/dashboard' onClick={handleButtonClick}>
              <div className="flex flex-col justify-start">
                <h3 className="font-inter text-primaryTextColor font-bold">
                  {/* Avatar */}
                </h3>
                <h4 className="font-inter text-primaryTextColor text-sm font-[100] ">
                  {
                    // userData.user
                  }
                </h4>
              </div>
              </Link>
            </div>
          :
        <div className="flex flex-col  space-y-4 ">
          <Button
            className=" w-full"
            href="/login"
            onClick={handleButtonClick}
          >
            Log In
          </Button>
          <Button
            variant="pneumaBlue"
            className=" w-full"
            href="/signup"
            onClick={handleButtonClick}
          >
            Sign Up
          </Button>
        </div>
}
      </div>
    </Drawer>
  );
};
