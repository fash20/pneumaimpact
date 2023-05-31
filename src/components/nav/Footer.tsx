import React from "react";
import { MultiValueContainer } from "react-select/dist/declarations/src/components/MultiValue";
import logo from "../assets/images/pneumaImpact-logo-2.svg";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  const openTab = (link:string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }
  return (
    <div className="footer grid grid-cols-1 p-5 md:p-10  lg:p-20 space-y-20 text-white font-extralight">
      <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col space-y-6 m-3">
          <div className="inline-flex space-x-2 items-center">
            <img className="h-[45px] w-[45px]" src={logo} alt="logo" />
            <h3 className="font-zcool text-[22px] text-white">Pnuemalmpact</h3>
          </div>
          <p className="font-dmSansr text-gray">We train, we fund, we mentor.</p>
          <div className="inline-flex flex-row space-x-2">
            <a href='https://www.facebook.com/profile.php?id=100083285375332' target="_blank">
              <FacebookIcon />
            </a>
            <a href='https://twitter.com/PneumaImpact' target="_blank">
              <TwitterIcon />
            </a>
            <a href='https://instagram.com/pneuma_impact?igshid=YmMyMTA2M2Y=' target="_blank">
                <InstagramIcon />
            </a>
            <a href='https://www.linkedin.com/' target="_blank">
                <LinkedInIcon />
            </a>
            <a href='https://youtube.com/channel/UCQvXMPoVMgbKzO6QOYRsT6Q'  target="_blank">
                <YouTubeIcon />
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4  items-start  px-4  m-3">
          <h3 className="font-dmSans text-[bold]">Company</h3>
          <span className="font-dmSansr flex flex-col space-y-3 text-gray">
            <h4>About us</h4>
            <h4>Contact us</h4>
            <h4><a href='/explore'>Explore </a></h4>
          </span>
        </div>
        <div className="flex flex-col space-y-4 items-start px-4  m-3">
          <h3 className="font-dmSans text-[bold]">Support</h3>
          <span className="font-dmSansr flex flex-col space-y-3 text-gray">
            <h4>Getting Started</h4>
            <h4>Help Center</h4>
          </span>
        </div>
        <div className="flex flex-col space-y-4 items-start px-4  m-3">
          <h3 className="font-dmSans text-[bold]">Contact Us</h3>
          <span className="font-dmSansr flex flex-col space-y-3 text-gray">
            <span className="inline-flex space-x-2">
              <MailIcon /> <h4>About us</h4>
            </span>
            <span className="inline-flex space-x-2">
              <PhoneIcon /> <h4>+234 807 364 8625</h4>
            </span>
            <span className="inline-flex space-x-2">
              <LocationOnIcon />
              <h4>Bodija Estate, House no. 5, Ibadan</h4>
            </span>
          </span>
        </div>
      </div>
      <div className="font-dmSansr flex justify-between text-gray">
        <span>{`Copyright © ${year}  BRIX Templates`}</span>
        <span>All Rights Reserved | Terms and Conditions | Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
