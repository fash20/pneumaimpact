import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import React, { useState } from "react";

const FAQ = () => {
  return (
    <div className="flex flex-col space-y-20 px-10 bg-[#FCFCFF] md:py-20">
      <div className="text-center ">
        <span className="step-title-blue">Frequently </span>
        <span className="step-title-red">Asked </span>
        <span className="step-title-blue">Questions </span>
      </div>
      <div className="flex flex-col space-y-5 md:flex-row md:space-x-8 md:space-y-0 justify-center ">
        <div className="flex flex-col items-center space-y-5">
          <Questions
            question="Who can apply for this program?"
            answer="The PneumaImpact training is open to everyone with a business idea or already in business and needing funds, training and mentorship to scale their businesses to a profitable level  from over all over the country."
          />
          <Questions
            question="How much is the whole program?"
            answer="The whole program costs N20,000."
          />
          <Questions
            question="How am I sure the courses will benefit me?"
            answer="The courses are well researched materials by our academic department before they are listed."
          />
          <Questions
            question="Would I need to pay to travel to Dubai?"
            answer="No! The Dubai trip expenses will be covered by Pneuma Impact."
          />
          <Questions
            question="How long will be the mentorship program?"
            answer="PneumaImpact will mentor her students for a period of one year. This mentorship program is to make sure students are  positioned and well groomed for their businesses to attract our investors."
          />
          <Questions
            question="Can my registration fee be refunded?"
            answer="Yes! If no value is added to you throughout the training. You can write to us via mail with your registration number to get your registration fee before our grants beneficiaries are been announced."
          />
        </div>
        <div className="flex flex-col items-center space-y-5">
          <Questions
            question="What do I do to have access to this Program?"
            answer="Click on Register and fill the necessary details."
          />
          <Questions
            question="How long is the training?"
            answer="The training phase of the programme will last for twelve (12) weeks."
          />
          <Questions
            question="Is the funding amount a fixed sum?"
            answer="Yes the funding is fixed at $1,000."
          />
          <Questions
            question="How can I be eligible for the pnuemaImpact funds?"
            answer="Funds are given to entrepreneurs who have received the training and mentorship and meet certain participatory requirements."
          />
          <Questions
            question="Who's eligible for the trip?"
            answer="Three best students."
          />
          <Questions
            question="How can I win the iPhone 13 Pro max?"
            answer="Always attend class and participate actively in the students' community provided for you by the school."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
interface IQuestionProps {
  question: string;
  answer: string;
}
const Questions = ({ question, answer }: IQuestionProps) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      className="flex first-letter drop-shadow-xl bg-white p-10 rounded-2xl w-[350px] md:w-[400px] lg:w-[500px] "
      // style={{ width: "600px"  }}
    >
      <div className="flex grow flex-col gap-y-5  ">
        <span
          className="font-smSans font-bold text-md md:tex-lg lg:text-xl "
          style={{ color: "#170F49" }}
        >
          {question}
        </span>
        {showDetails && (
          <p className="font-smSans" style={{ color: "#6F6C90" }}>
            {answer}
          </p>
        )}
      </div>
      <div className="flex-none pl-5">
        <IconButton
          size="large"
          onClick={() => setShowDetails(!showDetails)}
        >
          <Add />
        </IconButton>
      </div>
    </div>
  );
};
