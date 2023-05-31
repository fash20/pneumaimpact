import React, { useEffect, useRef, useState } from "react";
import ManWithOptions from "./animatedsvgs/ManWiithOptions";
import "../styles/animations.css";
const Target = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isAnimatedDivVisible, setIsAnimatedDivVisible] = useState<boolean>();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsAnimatedDivVisible(entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.disconnect()
      }
    });
    observer.observe(ref.current);
   
    return () => {};
    // observer.unobserve(ref.current
  }, []);
  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 md:grid-cols-2 px-5 md:px-10 lg:px-28 justify-center  items-center"
    >
      <div id={isAnimatedDivVisible ? "trans-up" : ""}>
        <div className="text-left ">
          <span className="step-title-blue">Who is this </span>
          <span className="step-title-red">training </span>
          <span className="step-title-blue">for ? </span>
        </div>
        <ul className="hiw-sub list-disc text-[18px] leading-9 tracking-wide my-5 px-4">
          <li className="mx-4 my-5">
            People who don't have basic entrepreneurship knowledge
          </li>
          <li className="mx-4 my-5">
            People with a business idea and don't have fund to execute it
          </li>
          <li className="mx-4 my-5">
            People who don't have any knowledge about entrepreneurship and are willing to start their businesses 
          </li>
          <li className="mx-4 my-5">
            People who don't have any digital skill to scale up their businesses 
          </li>
          <li className="mx-4 my-5">
            People who need a program to hold guide them through every step of their entrepreneurship journey
          </li>
          <li className="mx-4 my-5">
           People doing business and need funds to scale up
          </li>
          <li className="mx-4 my-5">
           People that needs foreign or local investors to invest in their ideas 
          </li>
          <li className="mx-4 my-5">
           People that need mentors to hold them hand-by-hand in their entrepreneurship journey e.t.c.  
          </li>
        </ul>
      </div>
      <div
        id={isAnimatedDivVisible  ? "trans-down" : ""}
        className="flex items-center justify-center"
      >
        <ManWithOptions />
      </div>
    </div>
  );
};

export default Target;
