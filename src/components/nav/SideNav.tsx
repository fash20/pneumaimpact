import React, { ReactNode } from "react";
import squarelogo from "../assets/images/square-logo.svg";
import compass from "../assets//images/compass.svg";
import CompassIcon from "../svgicons/CompassIcon";
import { Link, BrowserRouter as Router, useLocation } from "react-router-dom";
import LibraryIcon from "../svgicons/LibraryIcon";
import AuditIcon from "../svgicons/AuditIcon";
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import GearIcon from "../svgicons/GearIcon";
import HelpIcon from "../svgicons/HelpIcon";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useScreenSize } from "../utils/useScreenSize";
import { useAuth } from "../store/auth/AuthProvider";

const navItems = [
  {
    id: 1,
    name: "Explore",
    href: "/explore",
    icon: <ExploreOutlinedIcon />,
  },
  {
    id: 2,
    name: "Library",
    href: "/library",
    icon: <LibraryBooksOutlinedIcon />,
  },
  {
    id: 3,
    name: "Audit",
    href: "/audit",
    icon: <VerifiedUserOutlinedIcon />,
  },
  {
    id: 4,
    name: "Settings",
    href: "/settings",
    icon: <SettingsOutlinedIcon />,
  },
  {
    id: 5,
    name: "Admin",
    href: "/admin",
    icon: <AdminPanelSettingsOutlinedIcon fontSize="medium"  color="primary" />,
  },
  {
    id: 6,
    name: "Help",
    href: "/help",
    icon: <HelpOutlineOutlinedIcon  />,
  },
];

const SideNav = () => {
  const location = useLocation();
  const [screenSize, isScreenSmall] = useScreenSize();
  const {userData} = useAuth()

  return (
    <div className={`bg-white relative  flex flex-col min-w-[103px] h-[full] space-y-16 ${isScreenSmall ? '' : 'border-r-[1px] border-x-grayMarginColor' }  `}>
  
      <div className="flex flex-col sticky left-0  space-y-6 p-3">
        {navItems.map((item) => (
          item.name === "Admin" && userData.user.role.toLocaleLowerCase() === 'student' ?  '' : 
          <NavItem
            key={item.id}
            name={item.name}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

interface NavItemProps {
  name: string;
  href: string;
  icon: ReactNode;
}

const NavItem = ({ name, href, icon }: NavItemProps) => {
  const location = useLocation();
  return (
    <Link to={href} className="h-16 hover:scale-125 transition-[1s] my-5">
      <div
        className={`relative flex flex-col items-center gap-2 justify-end rounded-lg  bg-white ${
          location.pathname === href
            ? "bg-lightBlue side-nav-item text-base p-2 shadow-sm"
            : ""
        }`}
      >
        {icon}
        <h3 className="font-inter text-sm">{name}</h3>
        <span className="side-item"></span>
      </div>
    </Link>
  );
};

export default SideNav;
