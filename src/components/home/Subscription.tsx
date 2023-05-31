import { Button, useMediaQuery } from "@mui/material";
import React from "react";
import { theme } from "../utils/UIThemes";

const Subscription = () => {
  const isScreenSmall = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div className="bg-white flex justify-center items-center ">
      <div className="my-28 flex flex-col gap-7 justify-center  items-center text-center mb-20 bg-[#F7F7FF]   lg:rounded-3xl p-5 md:p-16 lg:p-20 w-[100%]  md:w-[75%]">
        <h3 className=" font-poppins "> Our News</h3>
        <div>
          <span className="step-title-blue"> Subscribe To Get Our </span>
          <span className="step-title-red">Latest </span>
          <span className="step-title-blue">News</span>
        </div>
        <div>
          <p
            className="font-poppins text-gray2 leading-7"
            style={{ maxWidth: "600px" }}
          >
            We recommend you to subscribe to our weekly newsletter. 
            Drop your email below to get weekly update about us.
          </p>
        </div>

        <div className="flex flex-col space-y-5 justify-center items-center w-full">
          <div className="sub-form ">
            <input
              placeholder="Enter your email address"
              className="sub-input h-[190px]"
            />
            {isScreenSmall && (
              <Button variant="pneumaBlue" style={{ borderRadius: "40px", height:'60px', width:'160px', marginRight:'10px' }}>
                Subscribe
              </Button>
            )}
          </div>
          {!isScreenSmall && (
            <Button
              variant="pneumaBlue"
              style={{ borderRadius: "40px", width: "90%" }}
            >
              Subscribe
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
