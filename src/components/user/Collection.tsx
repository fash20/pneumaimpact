import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  Box,
  Button,
  LinearProgress,
  LinearProgressProps,
  Menu,
  Typography,
} from "@mui/material";
import { FilterSharp, Replay } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import checkTokenExp from "../utils/checkTokenExp";
import ReactLoading from "react-loading";
import { useAuth } from "../store/auth/AuthProvider";

const Collection = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState<Array<ICourseProps>>([]);
  const [isLoading, setIsLoadng] = useState(true);
  const { userData : {token} } = useAuth();
  const [loadingProp, setLoadingProp] = useState({
    isloading: true,
    failed: false,
  });

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const ITEM_HEIGHT = 48;

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
      navigate("/login");
    } else {
      getData();
    }
  }, []);

  return (
    <div className="w-full min-h-[100vh] p-5">
       {(() => {
        {
      if (loadingProp.failed)
      return (
        <div className=" w-full h-[100vh] flex flex-col items-center pt-10 ">
          <span className=" font-dmSans text-lg">
          Sorry, we are unable to fetch data . Please check your network connection and
          reload.
          </span>
          <Button style={{ color: "#2F327D" }} onClick={() => getData()}>
            <Replay color="primary" />
          </Button>
        </div>
      );
    else if (loadingProp.isloading)
    return(
      <div className=" w-full h-[100vh] flex justify-center py-20">
        <ReactLoading
          type="spin"
          color="#2F327D"
          height={50}
          width={50}
        ></ReactLoading>
      </div>);
    else 
      return(
      <div className="mb-24 grid grid-cols-1 gap-8 lg:mx-6 w-full">
        <div className="flex justify-between">
          <h3 className="font-interlight text-PrimaryGray text-md ">
            All My courses
          </h3>

          <Button
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <div className="flex space-x-1">
              <FilterSharp />
              <span>Sort By All Category</span>
            </div>
          </Button>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {/* {course.map((option) => (
              <MenuItem
                key={option.title}
                selected={option.title === "All"}
                onClick={handleClose}
              >
                {option.title}
              </MenuItem>
            ))} */}
          </Menu>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 items-center justify-center">
          {courseData.length === 0 ? (
            <div>No courses found</div>
          ) : (
            courseData.map((item, key) => (
              <Course
                title={item.title}
                image={item.image}
                id={item.id}
                key={item.id}
              />
            ))
          )} 
        </div>
      </div>
      )
    }})()}
    </div>
  );
};

export default Collection;

export interface ICourseProps {
  title?: string;
  subtitle?: string;
  image?: string;
  detail?: string;
  id?: string;
  download?: number;
  status?: string;
  tags?: string[];
  completionStatus?: number;
  author?: {
    name: string;
    avartar: string;
  };
}

const Course = ({
  title,
  subtitle,
  image,
  detail,
  id,
  tags,
  author,
}: ICourseProps) => {
  return (
    <Link to="/courses">
      <div className="w-[287px] md:w-[250px] h-[300px] p-3 grid gap-2 border-[1px] border-grayMarginColor">
        <img
          className="w-[100%] h-[50px] object-cover "
          src={image}
        />
        <div className="grid grid-cols-1 gap-4 font-inter text-PrimaryGray">
          <h4 className="text-sm h-[70px]">{title}</h4>
          <div className="flex space-x-2 items-center">
            <Avatar
              variant="square"
              style={{ width: 25, height: 25 }}
              // src={author.avatar}
            />
            <h4 className="text-[12px] font-interlight">Admin</h4>
          </div>
          <div className="flex gap-2 font-interlight text-sm ">
            <span className="flex space-x-1 ">
              <ImportContactsIcon
                className="text-primaryTextColor"
                fontSize="small"
              />
              <h5>Leson 1</h5>
            </span>
            <span className="flex space-x-1">
              <AccessTimeIcon
                className="text-primaryTextColor"
                fontSize="small"
              />
              <h5>5 Hours</h5>
            </span>
          </div>
          <div className="font-interlight text-sm">
            {/* {  === 100 ? (
            <span>
              <CheckCircleIcon color="success" fontSize="small" /> Completed
            </span>
          ) : (
            <LinearProgressWithLabel value={properties.completionStatus} />
          )} */}
          </div>
        </div>
      </div>
    </Link>
  );
};

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          color={props.value < 50 ? "warning" : "success"}
          variant="determinate"
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
