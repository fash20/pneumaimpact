import ideaImage from "../assets/images/idea.svg";
import img from "../assets/images/img.svg";
import Stats from "./Stats";
import Button from "@mui/material/Button";
import { useScreenSize } from "../utils/useScreenSize";
import { homeButtonStyle } from "../utils/UIThemes";

const FrontPage = () => {
  const [screenSize, isScreenSmall] = useScreenSize();

  return (
    <div
      className={`relative grid ${
        isScreenSmall ? "grid-cols-1 py-5" : "grid-cols-2 py-20"
      } px-5 md:px-10 lg:px-28 pt-40`}
    >
      <div className='absolute curve -z-20'></div>
      <div className="flex space-y-8 flex-col  ">
        <div className="flex-0 ">
          <img src={ideaImage} alt="pnuemalmpact" />
        </div>
        <div>
          <p className=" frontpage-text">
            PneumaImpact has helped entrepreneurs with an idea to start a
            business while providing them skills, mentorship, and funds to get
            started.
          </p>
        </div>
        <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0 ">
          <Button variant="noBg" color="primary" style={homeButtonStyle} href='/register'>
            Get Started
          </Button>
          <Button variant="pneumaRed" style={homeButtonStyle} href="/">
            Become an Investor
          </Button>
        </div>
        <div className="flex">
          <div className="flex items-center justify-center lg:justify-start flex-row  space-x-10">
            <Stats title="Customer" value={5000} />
            <Stats title="Delivery" value={8000} />
            <Stats title="Rating" value={5.0} />
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center ">
              <div className="flex min-w-[300px] min-h-[200px] justify-center px-28 mb:px-20 sm:px16">
                <img
                  src={img}
                  alt="img"
                  className=" min-w-[140%] sm:min-w-[80%]  min-h-full m-auto block  "
                />
              </div>
          </div>
      
    </div>
  );
};

export default FrontPage;
