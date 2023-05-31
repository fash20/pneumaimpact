import { Button } from "@mui/material";
import React from "react";
import shirtman from "../assets/images/shirtman.svg";
import dubai from "../assets/images/dubai.png";

const Travel = () => {
  return (
    <div className="p-5 md:p-10 xl:p-20 flex flex-col space-y-20">
      <div className="grid  grid-col-1 space-y-4 lg:grid-cols-2 lg:space-y-0 mt-3 mb-2 ">
        <div className=" font-nuSans text-2xl text-primaryTextColor max-w-[500px]   ">
          <span className="step-title-blue tracking-widest leading-[50px]">
            Get an all expense paid trip to{" "}
          </span>
          <span className="step-title-red tracking-widest leading-[50px]">Dubai</span>
        </div>
        <span className=" hiw-sub text-sm leading-[40px] tracking-wider">
          We believe vacation is a good way to unwind, relax and rejuvenate. You
          have a chance as a student to travel to Dubai with our team members on
          an all expense paid trip for vacation and to meet with our foreign
          investors and have an opportunity to present your business/idea to
          them
        </span>
      </div>
      <div className="mt-3 h-40">
        <img alt="dubai" className="w-full h-full object-cover " src={dubai} />
      </div>
      <div className="grid grid-col-1 space-y-10 lg:grid-cols-2 lg:space-y-0  mt-3 mb-2 ">
        <div className="flex flex-col space-y-10 ml-3 md:ml-7 max-w-[550px] lg:ml-10 ">
          <div className="text-3xl max-w-[450px] ">
            <span className="step-title-blue1 tracking-widest ">
            Have access to both {" "}
          </span>
          <span className="step-title-red1 tracking-widest">local {" "}</span>
          <span className="step-title-blue1 tracking-widest">and {" "}</span>
          <span className="step-title-red1 tracking-widest">foreign </span>
          </div>
          <div className="hiw-sub text-sm leading-8 tracking-wider space-y-3">
            <p> We have an investment portfolios totaling 3M US dollars. </p>
            <p>
              PneumaImpact has a group of investors with a portfolio of about 3M
              US dollars. Our students will be given opportunity to meet with
              these investors, present their ideas, get business funds, and a
              right team from these investors to work with.
            </p>
          </div>
          <div>
            <Button variant="pneumaBlue" size="small" href="/signup">
              Register now
            </Button>
          </div>
        </div>
        <div className="max-h-[400px] max-w-[400p]">
          <img
            className="w-full h-full object-contain "
            alt="img"
            src={shirtman}
          />
        </div>
      </div>
    </div>
  );
};

export default Travel;
