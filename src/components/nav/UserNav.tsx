import { Link, Navigate, useNavigate } from "react-router-dom";
import React, { ReactNode, useEffect, useState } from "react";
import "../styles/General.css";
import NotificationIcon from "../svgicons/Notification";
import { useScreenSize } from "../utils/useScreenSize";
import avatar from "../assets/images/user.png";
import squarelogo from "../assets/images/square-logo.svg";
import {
  Avatar,
  InputAdornment,
  TextField,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "../svgicons/SearchIcon";
import SideNav from "./SideNav";
import MenuItem from "@mui/material/MenuItem";
import { Button, Drawer, Fade, Menu } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { nameExtractor, wordShortner } from "../utils/utilityfunctions";
import { BrandButtonStyle } from "../utils/UIThemes";
import logo from "../assets/images/pneumaImpact-logo.svg";
import {  useAuth } from "../store/auth/AuthProvider";
import { signOut } from "../store/auth/AuthHelper";

interface RenderComponent {
  children?: ReactNode;
}

const UserNav = ({ children }: RenderComponent) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [screenSize, isScreenSmall] = useScreenSize();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const [showDrawer, setShowDrawer] = useState({
    left: false,
  });
  const {userData} = useAuth()

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
  useEffect(() => {}, [open]);
  return (
    <React.Fragment>
      <div className="flex flex-col w-full bg">
        <div
          className={`h-12 top-0 blur-1 grid  sm:space-x-10 md:h-16 lg:h-20 mb-2  lg:gap-20 w-[100%] items-center
            ${isScreenSmall ? "grid-cols-2" : "grid-cols-3"}
          `}
        >
          <div className="flex w-[50px] md:w-[75px] lg:w-[103px]">
            <a href="/">
              <img className="w-full h-full " src={squarelogo} alt="logo" />
            </a>
          </div>

          {!isScreenSmall ? (
            <div className="flex items-center ">
              <TextField
                variant="outlined"
                placeholder="Search Files"
                className="w-full  md:w-[250px] lg:w-[500px]"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          ) : (
            <Button onClick={toggleDrawer("left", true)}>
              <MenuOutlined />
            </Button>
          )}
          {!isScreenSmall ? (
            // && userData && userData.user
            <div className="relative px-5 flex gap-4 justify-left items-center">
              <IconButton>
                <NotificationIcon />
              </IconButton>

              <div className="flex flex-row items-center justify-center gap-3">
                <IconButton
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Avatar />
                </IconButton>
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
                  <MenuItem
                    onClick={()=> {
                      signOut()
                      navigate("/login")
                     } }
                  >
                    Logout
                  </MenuItem>
                </Menu>
                {/* <div className="flex flex-col justify-start">
                  <h3 className="font-inter text-primaryTextColor font-bold">
                    {userData && userData.user
                      ? nameExtractor(userData.user)
                      : ""}
                  </h3>
                  <h4 className="font-inter text-primaryTextColor text-sm font-[100] ">
                    {userData && userData.user ? userData.user : ""}
                  </h4> 
                </div> */}
              </div>
            </div>
          ) : (
            <div className="flex justify-center gap-4 space-x-4 w-full">
              {!isScreenSmall && (
                <>
                  <Button
                    variant="pneumaWhite"
                    style={BrandButtonStyle}
                    className=" shadow-md sm:w-fit lg:w-[120px]"
                    href="/login"
                  >
                    Log In
                  </Button>
                  <Button
                    variant="pneumaBlue"
                    style={BrandButtonStyle}
                    className="shadow-md bg-white  sm:w-fit lg:w-[120px]"
                    href="/signup"
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          )}
        </div>
        <div className="flex">
          {!isScreenSmall && <SideNav />}
          {children}
        </div>
      </div>
      {isScreenSmall && (
        <Drawer
          anchor={"left"}
          open={showDrawer["left"]}
          onClose={toggleDrawer("left", false)}
        >
          <div className="flex flex-col space-y-5 w-[300px] p-5">
            <a href="/">
              <div className="flex justify-left space-x-2 ">
                <img className="w-8 h-8 " src={logo} alt="logo" />
                <label className=" font-zcool text-xl">Pneumalmpact</label>
              </div>
            </a>
            {
                userData ? (
                 <SideNav />
               ) :
              <div className="flex flex-col  space-y-4 ">
                <Button variant="pneumaWhite" className=" w-full" href="/login">
                  Log In
                </Button>
                <Button variant="pneumaBlue" className=" w-full" href="/signup">
                  Sign Up
                </Button>
              </div>
            }
          </div>
        </Drawer>
      )}
    </React.Fragment>
  );
};

export default UserNav;
