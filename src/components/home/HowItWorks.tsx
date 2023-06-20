import React, { ReactNode } from "react";
import ProgramSVG from "./homeSVGs/ProgramSVG";
import { homeButtonStyle, theme } from "../utils/UIThemes";
import { Button, useMediaQuery } from "@mui/material";
import training from "../assets/images/training.png";
import MentorshipSVG from "./homeSVGs/MentorshipSVG";
import FundingSVG from "./homeSVGs/FundingSVG";
import bola from '../assets/images/bola.jpeg'

const HowItWorks = () => {
  return (
    <div className="grid grid-cols-1 gap-y-20 lg:gap-y-20   py-10">
      <div className="text-center">
        <span className="step-title-blue  lg:text-[20px]"> How it </span>
        <span className="step-title-red">Works</span>
      </div>
      <div className="grid gap-y-14 lg:gap-y-16 justify-center">
        <Step
          title={<Title1 />}
          body={`The Pnema Impact Programme is open to everyone with scalable business ideas or business.
             Start your application by filling in your details on the online form`}
          image={<ProgramSVG />}
          order={""}
          background={""}
        />
        <Step
          title={<Title2 />}
          body={<CoursesDetails coursesArray={coursesArray} />}
          imageString={training}
          order={"order-last"}
          background={"#F6F7FF"}
        />
        <Step
          title={<Title3 />}
          body={
            "Upon successful completion of the Training, access to the mentorship community will be provided where seasoned mentors will be"
          }
          image={<MentorshipSVG />}
          order={""}
          background={""}
        />
        <Step
          title={<Title4 />}
          body={<div className="flex flex-col space-y-3">
            <span>
            Upon successful completion of the Training, access to the mentorship community will be provided where seasoned mentors will be 
            responsible for providing you with strategic guidance on your entrepreneurship journey. 
            </span>
            <span>
            One  of our mentors is Bolaji Fesomade; He  is an experienced business consultant/coach with almost a decade in the business world. 
            He's founded two micro finance institutes with each having an annual turn over of  60m naira. He's richly  experienced in raising funds
             for start-ups. He's raised over 80m naira both in Nigeria and abroad for start-ups. 
            </span>

          </div>}
          // image={<FundingSVG />}
          imageString={bola}
          order={"order-last"}
          background={"#F6F7FF"}
        />
      </div>
    </div>
  );
};

export default HowItWorks;

interface Step {
  title: ReactNode;
  body: ReactNode;
  image?: ReactNode;
  imageString?: string;
  order?: string;
  background?: string;
  additionalComponent?: ReactNode;
}

const Step: React.FC<Step> = ({ title, body, image, imageString, order, background }) => {
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className={`grid grid-row lg:grid-cols-2 justify-center grid-cols-1 gap-y-5 min-h-[70vh] px-5 py-10 md:px-10 lg:px-40 `} style={{background:background}}>
      <div className={`flex flex-col m-5 lg:m-10 lg:${order} space-y-5 ${isScreenSmall ? "" : ""} `}>
        <span>{title}</span>
        <div className="step-detail text-center md:text-left font-roboto">
          {body}
        </div>
        <div
          className={`flex  ${
            isScreenSmall ? " justify-center " : " justify-start"
          } `}
        >
          <Button
            variant="pneumaBlue"
            style={{ ...homeButtonStyle }}
            className="w-[50%] lg:w-[40%] h-[50px]rounded-lg"
            href="/signup"
          >
            Get started
          </Button>
        </div>
      </div>
      <div className="flex  justify-center ">
        {image ? (
          image
        ) : (
          <img
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
            src={imageString}
          />
        )}
      </div>
    </div>
  );
};

interface CoursesArray {
  coursesArray: Array<{
    title: string;
    courses: Array<String>;
  }>;
}

const CoursesDetails: React.FC<CoursesArray> = ({ coursesArray }) => {
  return (
    <div className="font-roboto text-left leading-8">
      <p>
        The PneumaImpact training is a 12 week training designed to equip
        entrepreneurs with basic and digital skills required to launch and run
        their businesses at an early growth stage and scale In the digital age.
        It covers several courses like;
      </p>
      {coursesArray.map((item, key) => (
        <div className=" ">
          <span className="font-bold">{item.title}</span>
          <div>
            {item.courses.map((item, id) => (
              <div className=" ml-3">
                {id + 1}. {" " +item}
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* <span>{}</span> */}
    </div>
  );
};

const Title1 = () => {
  return (
    <div className="text-center font-bold text-[25px] md:text-left md:text-[30px] lg:text-[35px] w-full ">
      <span className="step-title-blue1 w-full ">Apply for the </span>
      <span className="step-title-red1"> Program</span>
    </div>
  );
};
const Title2 = () => {
  return (
    <div className="text-center font-bold text-[25px] md:text-left md:text-[30px] lg:text-[35px] w-full">
      <span className="step-title-blue1 ">Go through the </span>
      <span className="step-title-red1">Training</span>
    </div>
  );
};
const Title3 = () => {
  return (
    <div className="text-center font-bold text-[25px] md:text-left md:text-[30px]  lg:text-[35px] w-full">
      <span className="step-title-blue1">Get </span>
      <span className="step-title-red1">mentorship </span>
      <span className="step-title-blue1">
        to help you with every step of the{" "}
      </span>
      <span className="step-title-red1">way </span>
    </div>
  );
};
const Title4 = () => {
  return (
    <div className="text-center font-bold w-full  text-[25px] md:text-left md:text-[30px] lg:text-[35px]">
      <span className="step-title-blue1">Get </span>
      <span className="step-title-red1">funds up to $1000 </span>
      <span className="step-title-blue1">to help you get </span>
      <span className="step-title-red1">started </span>
    </div>
  );
};

const coursesArray = [
  {
    title: "Business Psychology",
    courses: [
      "Mind setting- The millionaire mind formation",
      "The lean start up",
    ],
  },
  {
    title: "Business Leadership",
    courses: [
      "Business leadership and strategies for growth",
      "Business ownership ",
    ],
  },
  {
    title: "Marketing/Branding",
    courses: [
      "Implementation of marketing plan and improving sales outcome",
      "Building a lasting brand and business networking",
      "Digital marketing",
      "Sell aggressively",
    ],
  },
  {
    title: "Business Management",
    courses: [
      "The fundamentals of business management",
      "The beginning of your business ",
    ],
  },
  {
    title: "Business Plan",
    courses: [
      "Writing business plan, practice session and discussion group",
      "Pitching your idea",
      "Grant winning business plan",
      "Business plan templates (up to 25 templates for different business sectors)",
    ],
  },
];
