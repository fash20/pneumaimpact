import React, { useState } from "react";
import "../styles/General.css";
import CountUp from "react-countup";


interface Stats {
  title?: string;
  value?: number;
}

const Stats: React.FC<Stats> = (props) => {
  const { title, value } = props;

  return (
      <div className="flex flex-col stats gap-1 p-4 w-[100px] ">
        <CountUp
          start={0}
          end={value}
          duration={3}
          separator=","
          decimals={0}
          decimal=","
          prefix=""
          suffix="+"
          className="sm:text-sm md:text-base lg:text-lg text-white"
      />
        <span className="text-xs md:text-sm lg:text-sm text-fadeWhite">{title}</span>
      </div>
  );
};

export default Stats;
