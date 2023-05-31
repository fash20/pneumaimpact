import { ChevronLeft, ChevronRight } from "@material-ui/icons";

import React, { ReactNode, useEffect, useState } from "react";
import CustomButton from "../ui/CustomButton";
import cimage1 from "../assets/images/carousel/cimage1.png";
import cimage2 from "../assets/images/carousel/cimage2.png";
import cimage3 from "../assets/images/carousel/cimage3.png";
import { Button, IconButton } from "@mui/material";
import "../styles/animations.css";

const Carousel = () => {
  const carousels = [<Carousel1 />, <Carousel2 />, <Carousel3 />];
  const [componentInView, setComponentInView] = useState(0);

  useEffect(() => {
    const interval = setInterval(()=>componentChanger(), 7000);
    return ()=>clearInterval(interval)
  }, [componentInView]);

  function componentChanger() {
    if (componentInView === carousels.length - 1) {
      setComponentInView(0);
    } else {
      setComponentInView(componentInView + 1);
    }
  }
  function componentChangerReverse() {
    if (componentInView === 0) {
      setComponentInView(carousels.length - 1);
    } else {
      setComponentInView(componentInView - 1);
    }
  }

  return (
    <div className="relative carousel-container bg-fadeWhite ">
      <span className="sm:flex  sm:justify-between w-full absolute z-50  top-[50%] sm:top-[40%] mb:top-[35%] md:top-[45%]">
        <IconButton onClick={componentChanger}>
          <ChevronLeft style={{ fontSize: "60px" }} className="text-white" />
        </IconButton>
        <IconButton onClick={componentChangerReverse}>
          <ChevronRight style={{ fontSize: "60px" }} className="text-white" />
        </IconButton>
      </span>
      {carousels[componentInView]}
    </div>
  );
};
export default Carousel;

export const Carousel1 = () => {
  return (
    <div className="relative c-animation-2 ">
      <div className="w-full h-[300px] sm:h-[450px] lg:h-[555px] rounded-md object-cover">
        <img
          // className="rounded-md max-h-full max-w-full"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={cimage1}
          alt="carousel"
        />
      </div>
      {/* <div className="relative"> */}

      <div className=" absolute flex flex-col space-y-2 md:space-y-8 items-end right-[8%] top-2 sm:top-4 md:top-10 text-white">
        <span className="text-right">
          <h4 className="text-sm">SUMMER 2020</h4>
        </span>

        <h2 className=" text-xl md:text-2xl lg:text-4xl font-inter font-bold ">
          NEW COLLECTION
        </h2>
        <span className="max-w-[270px]">
          <p className=" text-gray text-[12px] lg:text-sm ">
            We know how large objects will act, but things on a small scale.
          </p>
        </span>
        <CustomButton
          // variant="contained"
          style={{ backgroundColor: "#fff", textTransform: "uppercase" }}
          title="Buy now"
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export const Carousel2 = () => {
  return (
    <div className="relative c-animation-2">
      <div className="max-w-[1200px] h-[300px] sm:h-[450px] lg:h-[555px] rounded-md object-contain">
        <img
          // className="rounded-md max-h-full max-w-full object-cover"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={cimage2}
          alt="carousel"
        />
      </div>
      {/* <div className="relative"> */}
      <div className=" absolute flex  flex-col items-start space-y-2 md:space-y-8 left-[8%] top-2 sm:top-4 md:top-10 text-white">
        <span className="text-left">
          <Button style={{ backgroundColor: "#FFF" }} size="small">
            SUMMER 2023
          </Button>
        </span>

        <h2 className=" text-xl md:text-3xl lg:text-6xl font-inter font-bold ">
          Course Header
        </h2>
        <Button
          variant="pneumaRed"
          style={{ textTransform: "uppercase" }}
          size="large"
        >
          Get now
        </Button>
      </div>
    </div>
  );
};

export const Carousel3 = () => {
  return (
    <div className="relative  c-animation-2">
      <div className="h-[300px] sm:h-[450px] lg:h-[555px] rounded-md object-contain">
        <img
          // className="rounded-md max-h-full max-w-full"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={cimage3}
          alt="carousel"
        />
      </div>
      <div className="absolute top-0 left-[25%] w-[50%] h-full flex flex-col items-center justify-center space-y-8   text-white">
        <h2 className=" text-xl md:text-2xl lg:text-4xl font-inter font-bold ">
          NEW COLLECTION
        </h2>
        <span className="max-w-[350px] text-center">
          <p className=" text-gray text-[16px] lg:text-lg ">
            We know how large objects will act, but things on a small scale.
          </p>
        </span>
        <CustomButton
          // variant="contained"
          style={{
            backgroundColor: "#23A6F0",
            color: "#fff",
            textTransform: "none",
          }}
          title="Start Now"
        />
      </div>
    </div>
  );
};
