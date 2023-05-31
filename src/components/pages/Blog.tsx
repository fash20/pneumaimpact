import { Button, Divider, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { Tag } from "../user/Explore";
import blogPost from "../assets/images/blogpost.svg";
import Avatar from "@mui/material/Avatar";
import Pagination from "@mui/material/Pagination";
import { theme } from "../utils/UIThemes";
import {
  Facebook,
  FacebookOutlined,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Blog = () => {
  useEffect(() => {
    document.title = "Pnuemalmpact - Blog";
  }, []);
  return (
    <div className="mt-28 p-5 md:p-8 lg:p-10">
      <div className="flex sm:flex-col lg:flex-row">
        <div>
          <BlogHeader
            contianerClassName=" mb-12"
            title1={"Featured "}
            title2="This Month"
            type="large"
          />
          <div className="h-[750px] overflow-y-scroll">
            <BlogPost type="horizontal" />
            <BlogPost type="horizontal" />
            <BlogPost type="horizontal" />
            <BlogPost type="horizontal" />
          </div>
        </div>
        <div>
          <div>
            <BlogHeader
              contianerClassName=" mb-12"
              title1={"Popular "}
              title2="Posts"
              type="large"
            />
          </div>
          <BlogPost type="horizontalCompact" />
          <BlogPost type="horizontalCompact" />
          <BlogPost type="horizontalCompact" />
          <BlogPost type="horizontalCompact" />
        </div>
      </div>
      <div></div>
      <BlogHeader
        contianerClassName=" mb-12"
        title1={"Recently "}
        title2="Posted"
        type="large"
      />
      <div className="grid grid-flow-row-dense grid-col-1 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2 ">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 ">
            <BlogPost type="vertical" />
            <BlogPost type="vertical" />
            <BlogPost type="vertical" />
            <BlogPost type="vertical" />
            <BlogPost type="vertical" />
            <BlogPost type="vertical" />
            <BlogPost type="vertical" />
            <BlogPost type="vertical" />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col space-y-20">
            <div>
              <BlogHeader title1="Top" title2="Authors" type="large" />
              <AuthourCard />
              <AuthourCard />
              <AuthourCard />
              <AuthourCard />
            </div>
            <div className="">
              <AdComponent />
            </div>
            <div>
              <BlogHeader title1="Categories " type="large" />
            </div>
            <div className="flex flex-col space-y-10">
              <BlogHeader title1="Todays" title2="Update" type="large" />
              <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-y-4 justify-center items-center w-fit">
                <StatsCard />
                <StatsCard />
                <StatsCard />
                <StatsCard />
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <BlogHeader title1="Search" title2="With tags" type="large" />
              <div className="flex  flex-wrap space-x-6 space-y-3">
                <Button variant="contained" color="primary" size="large">
                  Travel
                </Button>
                <Button variant="contained" color="primary" size="large">
                  Life Style
                </Button>
                <Button variant="contained" color="primary" size="large">
                  Technology
                </Button>
                <Button variant="contained" color="primary" size="large">
                  Business
                </Button>
                <Button variant="contained" color="primary" size="large">
                  Design
                </Button>
                <Button variant="contained" color="primary" size="large">
                  Fashion
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex justify-center my-20 items-center">
        <Pagination count={10} variant="outlined" shape="rounded" />
      </div>
    </div>
  );
};

export default Blog;

interface BlogPostProps {
  type: string;
}

const BlogPost = ({ type }: BlogPostProps) => {
  let _className = "";
  let _imgClassName = "";
  let _textClassName = "";
  const isScreenSmall = useMediaQuery(theme.breakpoints.up("sm"));

  switch (type) {
    case "vertical":
      _className = " flex-col w-[410px] space-y-3 box-border ";
      _imgClassName = " w-[410px] bg-contain";
      _textClassName = " text-3xl ";
      break;
    case "horizontal":
      _className = " flex-row w-[820px] space-x-3 box-border ";
      _imgClassName = " w-[373px] h-[271px] bg-contain ";
      _textClassName = " text-3xl over break-words ";
      break;
    case "horizontalCompact":
      _className = " flex-row w-[360px] h-[112px] space-x-2";
      _imgClassName = " w-[125px] h-[112px] ";
      _textClassName = "text-sm over break-words";
      break;
    case "verticalCompact":
      _className = " flex-col w-[325px] box-border space-y-2";
      _imgClassName = " w-[325px] h-[165px] ";
      _textClassName = "text-md over break-words ";
      break;
  }
  isScreenSmall ? (type = "verticalCompact") : (type = type);
  return (
    <div className={`flex ${_className} mx-4 my-8 `}>
      <div className={_imgClassName}>
        <img src={blogPost} alt="BlogPost" />
      </div>
      <div className={`flex flex-col space-y-3  `}>
        <div className="">
          <Tag
            title={"Travel"}
            className={`rounded-sm ${
              type === "horizontalCompact" || type === "verticalCompact"
                ? "text-[10px] "
                : " text-[12px]"
            } `}
          />
        </div>
        <div className={_textClassName}>
          <h2>set video playback speed with javascript</h2>
        </div>
        <div className=" flex space-x-1 items-center text-[12px] text-gray ">
          <Avatar sx={{ width: 15, height: 15 }} />
          <Divider variant="middle" />
          {type === "horizontalCompact" || type === "verticalCompact" ? (
            ""
          ) : (
            <span className="w-fit">02 December 2021</span>
          )}
          <Divider variant="middle" />
          <span>3min read</span>
        </div>
        {type === "horizontalCompact" ? (
          ""
        ) : (
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        )}
      </div>
    </div>
  );
};

interface BlogHeaderProps {
  title1: string;
  title2?: string;
  type: string;
  contianerClassName?: string;
}

const BlogHeader = ({
  title1,
  title2,
  type,
  contianerClassName,
}: BlogHeaderProps) => {
  let _className = "";
  switch (type) {
    case "small":
      _className = "text-md";
      break;
    case "large":
      _className = "text-lg";
      break;
  }
  return (
    <div className={"flex my-4" + contianerClassName}>
      <span
        className={
          " bg-primaryTextColor text-white w-fit px-2 py-1 " + _className
        }
      >
        {title1}
      </span>
      <span className={" w-fit px-2 py-1 " + _className}>
        <h2>{title2}</h2>
      </span>
    </div>
  );
};

interface AuthorCardProps {
  name: string;
  field: string;
  links: string[];
}

const AuthourCard = () => {
  return (
    <div className="flex space-x-3 items-center py-5">
      <div>
        <Avatar sx={{ width: 70, height: 70 }} />
      </div>
      <div className="flex flex-col space-y-2 ">
        <span className="font-bold text-md">Jenny kia</span>
        <span className="font-interlight text-[12px] text-PrimaryGray">
          fashion designer blogger
        </span>
        <span className="flex space-x-2 text-gray text-[12px]">
          <Link
            to="/"
            className="border-[1px] border-gray rounded-md hover:border-primaryTextColor hover:text-primaryTextColor "
          >
            <FacebookOutlined sx={{ fontSize: "20px" }} />
          </Link>
          <Link
            to="/"
            className="border-[1px] border-gray rounded-md hover:border-primaryTextColor hover:text-primaryTextColor "
          >
            <Twitter sx={{ fontSize: "20px" }} />{" "}
          </Link>
          <Link
            to=""
            className="border-[1px] border-gray rounded-md hover:border-primaryTextColor hover:text-primaryTextColor "
          >
            <Instagram sx={{ fontSize: "20px" }} />{" "}
          </Link>
        </span>
      </div>
    </div>
  );
};

const AdComponent = () => {
  return (
    <div className="text-white bg-primaryTextColor p-5">
      <span>Want to travel to skkimm buy car</span>
      <p>
        et video playback speed with javascript et video playback speed with
      </p>
      <Button>Visit us</Button>
    </div>
  );
};

interface StatCardProp {
  tile: string;
  number: number;
}

const StatsCard = () => {
  return (
    <div className="flex flex-col justify-center items-center space-x-3 rounded-lg bg-lightBlue w-[161px] h-[107px] mr-5 ">
      <span className=" text-primaryTextColor text-2xl ">480</span>
      <span className="text-gray text-lg">New Users</span>
    </div>
  );
};
