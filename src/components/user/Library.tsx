import React from "react";
import "../styles/General.css";
import boy from "../assets/images/boy.svg";
import { Avatar, Button, IconButton } from "@mui/material";
import profileImage from "../assets/images/profileimage.png";
import clocksvg from "../assets/images/clock.svg";
import {
  FolderOutlined,
  MoreVert,
  LocationOnOutlined,
  Check,
} from "@material-ui/icons";
import percentage from "../assets/images/percentage.svg";

const Library = () => {
  return (
    <div className="flex flex-col space-y-10 p-10 w-full">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
          <QuickInfo />
          <UserCard />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 sm:gap-y-0 sm:gap-x-5">
          <ItemsCard image={clocksvg} />
          <ItemsCard image={clocksvg} />
          <ItemsCard image={clocksvg} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 md:gap-x-5 ">
        <UserFiles />
        <UserActivities />
      </div>
    </div>
  );
};

export default Library;

const QuickInfo = () => {
  return (
    // <div className=" quick-info grid grid-cols-2  ">
    <div className=" bg-gray grid grid-cols-2  ">
    {/* <img src ={bgimage} className='absolute  -z-20' />  */}
      <div className="flex flex-col justify-center items-center space-y-4 ml-10">
        <div>
          <h3 className="font-inter text-fadeWhite">AD</h3>
        </div>
        <div>
          <h1 className="font-inter text-white text-5xl">Leorem Ipsum</h1>
        </div>
        <div className="flex gap-2">
          <h3 className="font-inter text-white">83,000 </h3>
          <h3 className="font-inter text-fadeWhite">monthly readers</h3>
        </div>
        <div className="flex gap-5">
          <Button
            style={{
              background: "#FF5364",
              color: "#fff",
              height: "40px",
              borderRadius: "30px",
            }}
          >
            Get
          </Button>
          <Button
            style={{
              color: "#fff",
              height: "40px",
              border: "1px solid #fff",
              borderRadius: "30px",
            }}
            variant="outlined"
          >
            <Check />
            {`  Following`}
          </Button>
        </div>
      </div>
      <img src={boy} />
    </div>
  );
};

const UserCard = () => {
  return (
    <div className="grid bg-white items-center p-5 text-center  border-2 border-grayMarginColor  border-slate-700 w-[80%]">
      <div className="flex justify-center">
        {/* <img
          sizes="large"
          src={profileImage}
          className="h-25 w-25 rounded align-middle items-center"
        /> */}
        <img
          className="rounded-full border border-gray-100 shadow-sm"
          src="https://randomuser.me/api/portraits/women/81.jpg"
          alt="user image"
        />
      </div>
      {/* <div className="relative w-24 h-24">
        <img
          className="rounded-full border border-gray-100 shadow-sm"
          src="https://randomuser.me/api/portraits/women/81.jpg"
          alt="user image"
        />
        <div className="absolute top-0 right-0 h-6 w-6 my-1 border-4 border-white rounded-full bg-gray-300 z-2"></div>
      </div> */}
      <div className="text-center">
        <h2 className="font-inter text-primaryTextColor text-2xl">
          Username
        </h2>
      </div>
      <div className="flex justify-center">
        <LocationOnOutlined className="text-fadeWhite" />
        <h3 className="font-inter text-fadeWhite text-sm">New York, USA</h3>
      </div>
      <div className="grid grid-cols-3 font-inter items-center ">
        <div>
          <h3 className=" text-sm">Courses</h3>
          <h3 className="text-2xl text-primaryTextColor">28</h3>
        </div>
        <div>
          <h3 className=" text-sm">Courses</h3>
          <h3 className="text-2xl text-primaryTextColor">28</h3>
        </div>
        <div>
          <h3 className=" text-sm">Courses</h3>
          <h3 className="text-2xl text-primaryTextColor">28</h3>
        </div>
      </div>
    </div>
  );
};

interface IItemCardProps {
  image?: string;
}

const ItemsCard = ({ image }: IItemCardProps) => {
  return (
    <div className="grid grid-cols-1 border-2 bg-white border-grayMarginColor p-5 gap-4 ">
      <div className="flex justify-between">
        <h2 className="font-inter  text-2xl">Courses</h2>
        <div className=" text-center">
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="font-inter  text-2xl">03</h2>
        <img src={image} alt={"file"} />
      </div>
    </div>
  );
};

const UserFiles = () => {
  return (
    <div className="bg-white  border-2 border-grayMarginColor w-full md:w-[70%] p-5">
      <div className="flex justify-between ">
        <h2 className="font-inter text-fadeWhite text-2xl ">My Files</h2>
        <Button>View All</Button>
      </div>
      <File />
    </div>
  );
};

const File = () => {
  return (
    <div className="grid grid-cols-4 items-center gap-5 text-center justify-center p-10">
      <FolderOutlined />
      <h3>File Name</h3>
      <div className=" bg-lightBlue p-5 rounded-lg text-PrimaryGray">4:00</div>
      <div>
        <img src={percentage} />
      </div>
    </div>
  );
};

const UserActivities = () => {
  return (
    <div className=" bg-white flex flex-col gap-5 p-5 border-2 border-grayMarginColor  w-full md:w-[30%]">
      <div className="flex  justify-between">
        <h2 className="font-inter text-2xl">Recent Activity</h2>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
      <div className="flex flex-col gap-5">
        <Activity />
        <Activity />
        <Activity />
      </div>
    </div>
  );
};

const Activity = () => {
  return (
    <div className=" flex gap-2 py-1 px-4 rounded-xl border-[1px] border-grayMarginColor items-center">
      <Avatar src={boy} className="bg-lightBlue" />
      <h3 className="font-inter ">Recent Activity 1</h3>
    </div>
  );
};
