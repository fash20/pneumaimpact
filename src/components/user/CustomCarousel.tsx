import { Button, Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import cimage1 from "../assets/images/carousel/cimage1.png";
import cimage2 from "../assets/images/carousel/cimage2.png";
import cimage3 from "../assets/images/carousel/cimage3.png";
import CustomButton from "../ui/CustomButton";

// const ImageText1 = () => {
//   return (
//     // <div className="h-full w-full">
//     <div className=" flex flex-col space-y-2 md:space-y-8  items-end justify-start text-white">
//       <span className="text-right">
//         <h4 className="text-sm">SUMMER 2023</h4>
//       </span>

//       <h2 className=" text-xl md:text-2xl lg:text-4xl font-inter font-bold ">
//         NEW COLLECTION
//       </h2>
//       <span className="max-w-[270px]">
//         <p className=" text-gray text-[12px] lg:text-sm ">
//           We know how large objects will act, but things on a small scale.
//         </p>
//       </span>
//       <CustomButton
//         // variant="contained"
//         style={{ backgroundColor: "#fff", textTransform: "uppercase" }}
//         title="Buy now"
//       />
//     </div>
//     // </div>
//   );
// };

const ImageText2 = () => {
  return (
    <div className=" absolute flex  flex-col items-center justify-center space-y-2 text-white">
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
  );
};

const ImageText3 = () => {
  return (
    <div className="absolute flex-col items-start space-y-2   text-white">
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
  );
};

var items = [
  // {
  //   name: "Random Name #1",
  //   description: <ImageText1 />,
  //   image: cimage1,
  //   className: "right-[50%] lg:right-[10%] lg:top-[5%]",
  // },
  {
    name: "Random Name #2",
    description: <ImageText2 />,
    image: cimage2,
    className: "flex right-[-40%] top-[50%] ",
  },
  {
    name: "Random Name #2",
    description: <ImageText3 />,
    image: cimage3,
    className: "left-[50%] lg:left-[10%] lg:top-[5%]",
  },
];

function CustomCarousel() {
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default CustomCarousel;

function Item(props: {
  item: {
    description:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal;
    image: string;
    className: string;
  };
}) {
  return (
    <Paper>
      <div className={"absolute w-full h-full " + props.item.className}>
        <p>{props.item.description}</p>
      </div>

      <img src={props.item.image} />
      {/* <Button className="CheckButton">Check it out!</Button> */}
    </Paper>
  );
}
