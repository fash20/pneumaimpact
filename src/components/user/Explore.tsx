import { Avatar, Button, Divider, useMediaQuery } from "@mui/material";
import hScroll1 from "../assets/images/course-card.svg";
import mountainImg from "../assets/images/mountain.svg";
import { TabButtonStyle, theme } from "../utils/UIThemes";
import { ReactNode, useEffect, useState } from "react";
import { numberShortner } from "../utils/utilityfunctions";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import checkTokenExp from "../utils/checkTokenExp";
import ReactLoading from "react-loading";
import toast from "react-hot-toast";
import { Replay } from "@mui/icons-material";
import { logout } from "../store/userSlice";
import CustomCarousel from "./CustomCarousel";
import { useAuth } from "../store/auth/AuthProvider";


const Explore = () => {
 
  const { userData : {token} } = useAuth();
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState<Array<ICourseProps>>([]);
  const [loadingProp, setLoadingProp] = useState({
    isloading: true,
    failed: false,
  });

  const getData = () => {
     axios
      .get("https://api.pneumaimpact.ng/v1/api/courses/", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setCourseData(res.data.docs);
        setLoadingProp({ failed: false, isloading: false });
  
      })
      .catch((err) => {
        toast.error("Something went wrong try again");
        setLoadingProp({ failed: true, isloading: false });
      });
  };

  useEffect(() => {
    document.title = "Pneumalmpact - Explore";
    if (!checkTokenExp(token)) {
      logout();
      navigate("/login");
    } else {
      getData();
    }
  }, []);
  return (
    <div className="grid grid-cols-1 relative w-full">
      {(() => {
        {
      if (loadingProp.failed)
      return (
        <div className="flex flex-col items-center relative px-5 pt-5 space-y-5 ">
          <span className=" font-dmSans text-lg">
            Sorry, we are unable to fetch data. Please check your network connection and
            reload.
          </span>
          <Button variant="pneumaWhite"  onClick={() => getData()}>
            <Replay color="primary" />
          </Button>
        </div>
      );
    else if (loadingProp.isloading)
    return(
      <div className="flex justify-center py-20 ">
        <ReactLoading
          type="spin"
          color="#2F327D"
          height={50}
          width={50}
        ></ReactLoading>
      </div>);
    else 
      return(
      <div className="grid grid-cols-1 w-full p-5 gap-y-5 md:gap-y-10 pt:8 lg:px-6  overflow-x-hidden">
        <div className="relative max-w-full">
          <CustomCarousel />
          <div className="absolute top: top-[78%] flex flex-col z-50 max-w-full space-y-5 overflow-hidden">
            <h3 className="tex-xl text-white ml-6">Trending Courses</h3>
            <div className="flex flex-row space-x-6 px-4 h-scrollable ">
      {courseData.map((item, key) => (
        <CourseCard key={key} title={`${item.title.substring(0, 4)}...`} image={item.image} />
      ))}
    </div>
          </div>
        </div>
        <div className=" mt-20">
          <span className="p-5 text-center md:text-left ">
            <h1 className="text-2xl md:text-4xl text-gray ">Courses For You</h1>
          </span>
          <div className="grid justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {courseData.length === 0 ? (
              <div>No courses found</div>
            ) : (
              courseData.map((item, key) => (
                <Course
                  title={item.title}
                  image={item.image}
                  key={item._id}
                  tags={item.tags}
                  _id={item._id}
                />
              ))
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-6">
          <div className="flex space-x-7 mx-4">
            <Button size="large" style={TabButtonStyle}>
              All
            </Button>
            <Button size="large" style={TabButtonStyle}>
              Email
            </Button>
            <Button size="large" style={TabButtonStyle}>
              Copywriting
            </Button>
          </div>
          <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 md:items-start md:justify-left lg:grid-cols-3 gap-5 bg-white mb-10 md:mb-20 ">
            {/* <CourseCardBrief />
            <CourseCardBrief />
            <CourseCardBrief />
            <CourseCardBrief />
            <CourseCardBrief />
            <CourseCardBrief />
            <CourseCardBrief /> */}
          </div>
        </div>
      </div>)
    }})()}
    </div>
  );
 
};

export default Explore;

interface ICarouselProps {
  img: string;
  body: ReactNode;
}

interface CourseCardProps {
  title: string;
  image?: string;
}

const CourseCard = ({ title, image }: CourseCardProps) => {
  return (
    <div className="flex flex-col space-y-3 w-[80px] mb:w-[100px]  sm:w-[120px] lg:w-[150px] shrink-0  object-cover">
      <div className=" w-[80px] mb:w-[100px]  sm:w-[120px] lg:w-[150px] h-[80px] mb:h-[100px]  sm:h-[120px] lg:h-[150px] rounded-sm">
        <img
        src={image === undefined ? hScroll1 : image}
        className="w-full h-full object-cover rounded-sm"
        style={{ maxHeight: "100%", width: "100%", objectFit: "cover" }}
      />
      </div>
      
      <h4 className="text-gray text-center">{title}</h4>
    </div>
  );
};

// const HScrollable = () => {
//   return (
//     <div className="flex flex-row space-x-6 px-4 h-scrollable ">
//       {horizontalImage.map((item, key) => (
//         <CourseCard key={key} title={item.courseName} image={item.image} />
//       ))}
//     </div>
//   );
// };

interface ICourseProps {
  title?: string;
  subtitle?: string;
  image?: string;
  detail?: string;
  _id?: string;
  download?: number;
  status?: string;
  tags?: string[];
}

const Course = ({
  title,
  subtitle,
  image,
  detail,
  _id,
 tags
}: ICourseProps) => {
  return (
    <div className="max-w-[287px] md:max-w-[250px] h-[250px]  p-3 grid  items-center gap-2 border-[1px] border-grayMarginColor bg-white hover:scale-105 hover:transition-transform">
      <img className="w-[100%] h-[50px] object-cover " src={image}/>
      <div className="grid grid-cols-1 gap-2 font-inter text-PrimaryGray">
        <div className="flex space-x-1 ">

           {/* <Tag title="Design" className="" />  */}
          
           {/* { tags.length === 0 ? (<></>) :tags.map((item, key) => (
            <Tag title={item} key={key} className={""} />
           ))}   */}
        </div>
        <div className="py-2 h-[70px]">
          <Link to={`/course/id/${_id}`} className="hover:underline">
            <h4 className="text-md">{title}</h4>
          </Link>
        </div>

        <Divider />
        <div className="flex gap-2 justify-between font-interlight text-sm ">
          <h5>{numberShortner(1500)} downloads</h5>
          <h5>available</h5>
        </div>
      </div>
    </div>
  );
};

interface TagIconProp {
  title: string;
  className: string;
}
export const Tag = ({ title, className }: TagIconProp) => {
  const tagColors = ["#41BE90", "#FFB800", "#FF5364"];
  const rand = Math.floor(Math.random() * tagColors.length);

  let _className = "";
  className === undefined
    ? (_className = `text-[11px] text-white font-interlight w-fit  px-2 py-1 bg-[${rand}]`)
    : (_className =
        `text-[11px] text-white font-interlight w-fit  px-2 py-1 bg-[${rand}]` +
        className);
  return (
    <span className={_className} style={{ backgroundColor: tagColors[rand] }}>
      {title}
    </span>
  );
};

interface ICourseCardProps {
  avatar?: string;
  title?: string;
  subtitle?: string;
}
const CourseCardBrief = ({ avatar, title, subtitle }: ICourseCardProps) => {
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="flex justify-center items-center space-x-4 p-5 rounded-lg border-[1px] border-grayMarginColor w-fit bg-white shadow-sm">
      <div className="w-[60px] h-[60px] rounded-[50%] bg-[#f2f2f2] flex justify-center items-center">
        <Avatar
          sizes={isScreenSmall ? "medium" : "large"}
          src={mountainImg}
          alt="avatar"
        />
      </div>

      <div className="flex flex-col space-3">
        <span className="text-lg md:text-2xl lg:text-2xl">
          Email Personalisation
        </span>
        <span className=" text-sm md:text-lg lg:text-xl  text-gray text-">
          Personalised Email for Outreach
        </span>
      </div>
    </div>
  );
};
