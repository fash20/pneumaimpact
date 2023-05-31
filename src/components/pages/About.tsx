import React, { ReactNode, useEffect } from "react";
import bioImg from "../assets/images/bioimg.svg";
import { Button, TextField } from "@mui/material"
import { useScreenSize } from "../utils/useScreenSize";
import { BrandButtonStyle } from "../utils/UIThemes";

const services1 = [
  {
    text: "Entrepreneurial training and education",
    icon: "",
  },
  {
    text: "Mentorship and coaching",
    icon: "",
  },
  {
    text: "Business plan development",
    icon: "",
  },
  {
    text: "Investment and funding",
    icon: "",
  },
  {
    text: "Networking opportunities",
    icon: "",
  },
];

const services2 = [
  {
    text: "Incubation and acceleration",
    icon: "",
  },
  {
    text: "Legal, financial, and accounting services",
    icon: "",
  },
  {
    text: "Marketing and branding",
    icon: "", 
  },
  {
    text: "Internationalization and export support",
    icon: "",
  },
  {
    text: "Exit planning and strategy",
    icon: "",
  },
];

const About = () => {
  const [screenSize, isScreenSmall] = useScreenSize();
  useEffect(() => {
    document.title = "Pneumalmpact - About";
  }, []);
  return (
    <div className="flex flex-col pt-16 bg-aboutBlue ">
      <div className="flex justify-center flex-col sm:space-y-5 lg:flex-row lg:space-x-10 h-fit py-20 px-5  px-10 lg:px-20">
        <div className="h-100 w-[300px] md:w-[400px] lg:w-[526px]">
          <img src={bioImg} />
        </div>
        <Bio />
      </div>
      <div className="flex flex-col space-y-5 bg-white px-20 py-40">
        <span>
          <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold text-center">
            Our Service
          </h2>
        </span>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-x-5 md:space-y-0">
          {services2.map((item, key) => (
            <CustomCard>
              <div className="flex flex-col justify-center items-center" >
              {/* {
              !isScreenSmall &&<div className= "h-100 flex items-center justify-center">
                <AirplanemodeActiveSharp fontSize="large" />
              </div>
             }  */}
              <div>
                <h1 className="font-inter text-center  text-sm lg:text-lg">{item.text}</h1>
              </div>
              </div>
            </CustomCard>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-x-5 md:space-y-0">
          {services1.map((item, key) => (
            <CustomCard>
              <div className=" flex flex-col justify-center items-center ">
             {/* {
              !isScreenSmall &&<div className= " h-100 flex items-center justify-center ">
                <AirplanemodeActiveSharp fontSize="large" />
              </div>
             }  */}
              <span className=" h-10">
                <h1 className="font-inter text-center text-md lg:text-lg ">{item.text}</h1>
              </span>
              </div>
            </CustomCard>
          ))}
        </div>
      </div>
      <div className="bg-white lg:10 lg:px-20 py-40">
        <ReachUsForm />
      </div>
    </div>
  );
};

export default About;

const Bio = () => {
  return (
    <div className="max-w-[665px] flex flex-col gap-5">
      <h1 className="text-bold text-4xl ">Company's Bio</h1>

      <div className=" flex flex-col line-ht30 font-interlight">
        <p>
          At Pneuma Impact, we believe that entrepreneurship is a major driver
          of economic growth, and that every entrepreneur deserves the chance to
          succeed. Our team of experienced trainers and mentors work closely
          with entrepreneurs to help them develop the skills and knowledge
          including digital skills they need to create successful businesses,
          while our funding programs provide the resources needed to turn their
          ideas into reality.
        </p>
      </div>
    </div>
  );
};

interface CustomCardProps {
  children: ReactNode;
}

const CustomCard = ({ children }: CustomCardProps) => {
  return (
    <div className="flex flex-col justify-center space-y-10 items-center w-80 bg-lightBlue text-primaryTextColor hover:text-white hover:bg-primaryTextColor max-w-[200px] lg:max-w-[268px] h-[100px] lg:h-[200px] rounded-lg">
      {children}
    </div>
  );
};

const ReachUsForm = () => {
  return (
    <div className="px-5 flex flex-col space-y-8 lg:space-y-16 ">
      <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold text-center">
        You can reach out to Us
      </h1>
      <div className="flex  flex-col sm:space-y-5  lg:flex-row lg:space-x-5 ">
        <div className="flex space-y-5 flex-col sm:w-[100%] lg:w-[35%] leading-6 pt-10">
          {/* <p>
            apidiously reconceptualize visionary imperatives without 24/365
            catalysts for change. Completely streamline functionalized models
            and out-of-the-box functionalities. Authoritatively target
          </p> */}
          <span> pneumaimpact@gmail.com </span>
          <span> +234 807 364 8625 </span>
          <span> Bodija Estate, House no. 5, Ibadan </span>
          <div>
            <span>Follow us on:</span>
          </div>
        </div>
        <div className="flex flex-col space-y-5 w-[90%] lg:w-[65%]">
          <div className="grid grid-cols-2 space-x-5 ">
            <TextField variant="outlined" placeholder="Name" />
            <TextField variant="outlined" placeholder="E-mail" />
          </div>
          <TextField variant="outlined" placeholder="Subject" />
          <TextField disabled variant="outlined" multiline />
          <div className="flex justify-end">
            <Button variant="pneumaBlue"  style={BrandButtonStyle}>Send Message</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
