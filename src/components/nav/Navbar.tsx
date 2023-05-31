import {
  Avatar,
  Button,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Fade,
} from "@mui/material";
import { Dehaze } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/pneumaImpact-logo.svg";
import { navButtonStyle } from "../utils/UIThemes";
import { useScreenSize } from "../utils/useScreenSize";
import avatar from "../assets/images/user.png";
import { nameExtractor, wordShortner } from "../utils/utilityfunctions";
import { useAuth } from "../store/auth/AuthProvider";
import { signOut } from "../store/auth/AuthHelper";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [screenSize, isScreenSmall] = useScreenSize();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const [showDrawer, setShowDrawer] = useState({
    left: false,
  });

  
  const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const { userData   } = useAuth();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleDrawer =
    (anchor: "left", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setShowDrawer({ ...showDrawer, left: open });
    };
  return (
    <React.Fragment>
    <div className="navbar navbar-bg ">
      <div
        className={`h-16 grid justify-center  items-center ${
          isScreenSmall ? "grid-cols-2" : "grid-cols-3"
        }`}
      >
        <a href="/">
          <div className="flex justify-center items-center space-x-3 sm:space-x-4 ">
            <img className="w-10 h-10" src={logo} alt="logo" />
            <label className=" font-zcool text-lg sm:text-xl  md:text-2xl">
              Pneuma Impact
            </label>
          </div>
        </a>
        {isScreenSmall && (
          <div className=" text-right pr-10">
            <IconButton onClick={ toggleDrawer("left", true)}>
              <Dehaze />
            </IconButton>
          </div>
        )}
        {!isScreenSmall && (
          <div className="flex items-center  justify-around p-5 ">
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
        )}
        {!isScreenSmall &&
          (userData !== null   ? (
            <div className="flex flex-row space-x-3 justify-center items-center">
              {/* <Link > */}
                <div className="">
                  {/* <img src={avatar} /> */}
                  <Avatar  onClick={handleClick1}/>
                  <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl1}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem
                    onClick={() => {
                      navigate("/profile");
                      handleClose1();
                    }}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/explore");
                      handleClose1();
                    }}
                  >
                    Explore
                  </MenuItem>
                  <MenuItem onClick={signOut}>Logout</MenuItem>
                </Menu>
                </div>
              {/* </Link> */}
              <Link to="/profile">
                <div className="flex flex-col justify-start ">
                  <h3 className="font-inter text-primaryTextColor font-bold">
                    {showDrawer.left}
                  </h3>
                  <h4 className="font-inter text-primaryTextColor text-sm font-[100] ">
                    {/* {
                     selector.userData.user !== null ? nameExtractor(selector.userData.user): ''
                    } */}
                  </h4>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem
                      onClick={() => {
                        navigate("/profile");
                        handleClose();
                      }}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate("/explore");
                        handleClose();
                      }}
                    >
                      Explore
                    </MenuItem>
                    <MenuItem onClick={signOut}>
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              </Link>
            </div>
          ) : (
            <div className="flex justify-center gap-4 space-x-4 w-full">
              <Button
                variant="pneumaWhite"
                style={navButtonStyle}
                className=" shadow-lg h-10 sm:w-fit lg:w-[120px]"
                href="/login"
              >
                Log In
              </Button>
              <Button
                variant="pneumaBlue"
                style={navButtonStyle}
                className=" shadow-lg bg-white h-10  sm:w-fit lg:w-[120px]"
                href="/signup"
              >
                Sign Up
              </Button>
            </div>
          ))}
      </div>
      { isScreenSmall && (
          <Drawer
          anchor={"left"}
          open={showDrawer["left"]}
          onClose={toggleDrawer("left", false)}
        >
           <div className="flex flex-col space-y-5 w-[300px] p-5">
            <a href="/">
              <div className="flex justify-left space-x-2 ">
                <img className="w-8 h-8" src={logo} alt="logo" />
                <label className=" font-zcool text-xl">Pneumalmpact</label>
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
            { !userData === null  ? (
              <div className="flex flex-row gap-3">
                <Link to="/profile">
                  <div className="">
                    <Avatar src={avatar} />
                  </div>
                </Link>
                <Link to="/user/dashboard" >
                  <div className="flex flex-col justify-start">
                  <h3 className="font-inter text-primaryTextColor font-bold">
                    {
                    /* {userData && userData.user
                      ? nameExtractor(userData.user)
                      : ""} */  
                    }
                  </h3>
                    <h4 className="font-inter text-primaryTextColor text-sm font-[100] ">
                      Hello
                    </h4>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col  space-y-4 ">
                <Button
                  variant="pneumaWhite"
                  className=" w-full"
                  href="/login"
                >
                  Log In
                </Button>
                <Button
                  variant="pneumaBlue"
                  className=" w-full"
                  href="/signup"
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div> 
        </Drawer>
      )}
    </div>
    
    </React.Fragment>
  );
};

export default Navbar;
