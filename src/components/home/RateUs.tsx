import { TextareaAutosize, TextField, Button } from "@mui/material";
import React from "react";
import TextInput from "../ui/TextInput";
import { BrandButtonStyle } from "../utils/UIThemes";

const RateUs = () => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-20 px-5 md:px-10 lg:px-28 py-5 md:py-10 lg:py-20 bg-[#FCFCFF]">
      <div className="mb-28">
        <div className="flex flex-col space-y-5 ">
          <h1> Rate Our Service</h1>
          <div className="flex flex-col space-y-2">
            <span className="step-title-blue">
              Fill the form to submit your{" "}
            </span>
            <span className="step-title-red">feedback </span>
          </div>
        </div>
        <div>
          <p className="hiw-sub">
            Write back to us, we'll love to hear from you
          </p>
        </div>
      </div>
      <div>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default RateUs;

const FeedbackForm = () => {
  return (
    <div className="grid grid-cols-1 gap-5 p-10 bg-white rounded-xl md:rounded-2xl lg:rounded-3xl md:m-10 border-2 border-grayMarginColor ">
      <TextInput label="Name" TextFieldClassName="h-[40px]" />
      <TextInput label="Email" />
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Write your message"
        className=" min-h-[90px] border-[1px] mx-2 px-3 py-1 border-gray outline-1 outline-primaryTextColor"
      />
      <Button variant="pneumaBlue" style={BrandButtonStyle}>
        Submit
      </Button>
    </div>
  );
};
