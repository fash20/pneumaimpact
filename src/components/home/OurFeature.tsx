import { Button, useMediaQuery } from "@mui/material";
import React, { ReactNode, useEffect, } from "react";
import { homeButtonStyle, theme } from "../utils/UIThemes";
import ProgramSVG from "./homeSVGs/ProgramSVG";
import MentorshipSVG from "./homeSVGs/MentorshipSVG";
import FundingSVG from "./homeSVGs/FundingSVG";
import training from '../assets/images/training.png'
// const animations = ["side-one", "side-two", "trans-up", "trans-down"];

function OurFeature() {
  return (
    <div className="grid grid-cols-1 gap-y-20 lg:gap-y-20 sm:px-5 px-5 md:px-10 lg:px-28 py-10">
      <div className="text-center flex flex-col space-y-8 md:space-x-10 lg:space-y-12 ">
        <div className="text-center">
          <span className="step-title-blue text-[20px]">How it </span>
          <span className="step-title-red">Works</span>
        </div>
        <div>
          {/* <p className="font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet
          </p> */}
        </div>
      </div>
      <div className="grid gap-y-14 lg:gap-y-16">
        <StepContainer
          // animationNumber={1}
          detail="The PnemaImpact Programme is open to everyone with scalable business ideas or business. Start your 
          application by filling in your details on the online form."
          title={<Title1 />}
        >
         <ProgramSVG />
        </StepContainer>
        <StepContainer 
          // animationNumber={3}
          direction="flex-row-reverse"
          detail="The PneumaImpact training is a 12 week training designed to equip entrepreneurs with basic and digital 
          skills required to launch and run their businesses at an early growth stage and scale In the digital age. It covers 
          several courses like; The Psychology of business mind(Mind Reformation), Executing your business ideas, Business ownership, Business leadership and strategies for business growth,
          The fundamental of business management, Implementation of marketing plan and improving sales outcome, Building a lasting brand and business networking,
          Wiring of a comprehensive business plan, discussion group and practice session, Pitching your idea, Submitting your business plan,
          The lean startup, Sales like crazy, Digital marketing for business, Internet marketing for business, Email marketing for business, Content creating for business, 
          Selling psychology starting and scaling a business, Business management, Art of negotiations and how to seal 
          business deals using win/win ideology, How to determine your target customers and how to build a mutual relationship with them etc "
          title={<Title2 />}
        >
          <div className='flex justify-center items-center  w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]'>
          <img src={training} alt='training' />
          </div>
        </StepContainer>
        <StepContainer
          title={<Title3 />}
          // animationNumber={1}
          detail="Upon successful completion of the Training, access to the mentorship community will be provided where seasoned mentors will be
           responsible for providing you with strategic guidance on your entrepreneurship journey.
          "
        >
          <MentorshipSVG />
        </StepContainer>
        <StepContainer
          // animationNumber={3}
          direction="flex-row-reverse"
          title={<Title4 />}
          detail="Entrepreneurs that have successfully passed the training will be eligible for grants of $1000. This is to support early growth, 
          and enhance their business operation. This fund is given to entrepreneurs who meet the participatory requirements.
          "
        >
          <FundingSVG />
        </StepContainer>
      </div>
    </div>
  );
}

export default OurFeature;

const StepContainer: React.FC<Step> = (props) => {
  const { children, detail, direction, title, animationNumber } = props;
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  // const ref = useRef<HTMLDivElement>(null);
  // const [isAnimatedDivVisible, setIsAnimatedDivVisible] = useState<boolean>();

  useEffect(() => {
    // const observer = new IntersectionObserver((entries) => {
    //   const entry = entries[0];
    //   setIsAnimatedDivVisible(entry.isIntersecting);
    //   if (entry.isIntersecting) {
    //     observer.disconnect();
    //   }
    // });
    // observer.observe(ref.current);

    return () => {};
    // observer.unobserve(ref.current)
  }, []);

  return (
    <div
      id="anim"
      // ref={ref}
      className={
        isScreenSmall
          ? " flex flex-col sm:gap-x-10 md:gap-x-16 items-center justify-center "
          : `flex items-left justify-start ${direction} lg:gap-x-20`
      }
    >
      <Step
        // id={isAnimatedDivVisible ? animations[animationNumber] : ""}
        detail={detail}
      >
        {title}
      </Step>
      <div
        // id={isAnimatedDivVisible ? animations[animationNumber - 1] : ""}
        className=" sm:text-center "
      >
        {children}
      </div>
    </div>
  );
};

interface Step {
  children?: ReactNode;
  detail?: ReactNode;
  direction?: string;
  id?: string;
  visible?: boolean;
  title?: ReactNode;
  animationNumber?: number;
}

const Step: React.FC<Step> = (props) => {
  const { children, detail, id } = props;
  return (
    <div
      id={id}
      className="flex flex-col space-y-4 justify-center items-center lg:items-start lg:max-w-4xl md:justify-start md:mt-20"
    >
      <div className="flex sm:justify-center lg:justify-center">{children}</div>
      <p className="step-detail text-center md:text-left font-roboto">{detail}</p>
      <Button
        variant="pneumaBlue"
        style={{ ...homeButtonStyle }}
        className="w-[50%] lg:w-[40%] h-[50px]rounded-lg"
      >
        Get started
      </Button>
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
        to help you with every step of the
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
