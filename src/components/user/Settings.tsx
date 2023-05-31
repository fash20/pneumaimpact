import Button from "@mui/material/Button";
import React, { useState } from "react";
import TextInput from "../ui/TextInput";
import SettingSVG from "./SettingSVG";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Avatar, useMediaQuery } from "@mui/material";
import { BrandButtonStyle, theme } from "../utils/UIThemes";
import toast from "react-hot-toast";
import axios from "axios";
import avatar from "../assets/images/user.png";
import { useAuth } from "../store/auth/AuthProvider";

const Settings = () => {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [profileImage, setProfileImage] = useState("");

  // var loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files) {
  //     setProfileImage(URL.createObjectURL(event.target.files[0]));
  //     console.log(URL.createObjectURL(event.target.files[0]));
  //   }
  // };
  // const { userData, loading } = useSelector(
  //   (state: { user: any }) => state.user
  // );
  const {userData: {token}} = useAuth();
  const [course, setCourse] = useState({
    title: "",
    body: "",
  });
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    const formData = new FormData();
    formData.append("File", selectedFile);

    setCourse({ ...course, body: selectedFile });
  };
  const handleUpload = () => {
    axios
      .post(
        "https://api.pneumaimpact.ng/v1/api//",
        {
          course,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {})
      .catch((err) => toast.error("unable to send verifcation code "));

    console.log(course);
  };
  const [selected, setSelected] = useState("a");
  return (
    <div className="grid grid-cols-1 relative w-full  " id="fade-in">
      <div className="relative h-[250px]">
        <SettingSVG />
        <ProfileSection />
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-10 text-left w-full p-5 md:p-10">
        <Options selected={selected} setSelected={setSelected} />
        {selected === "a" && <SettingsForm />}
        {selected === "b" && <PasswordChange />}
      </div>
    </div>
  );
};

export default Settings;

export function ProfileSection() {
  const [profileImage, setProfileImage] = useState("");

  var loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setProfileImage(URL.createObjectURL(event.target.files[0]));
      console.log(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div
      className="avatar"
      style={{
        backgroundImage: `url(${profileImage ? profileImage : avatar})`,
      }}
    >
      <label
        id="upload-label"
        className="flex justify-center space-x-4 items-center w-full h-full text-center"
        htmlFor="upload-input"
      >
        <CameraAltIcon
          className="cameraicon"
          sx={{ color: "#FFF", position: "relative", top: "100%" }}
        />
      </label>
      <input
        id="upload-input"
        onChange={loadFile}
        accept=".jpg, .jpeg, .png"
        type={"file"}
        multiple
      />
    </div>
  );
}

interface SelectionProp {
  selected: string;
  setSelected: (selected: string) => void;
}

const Options = ({ selected, setSelected }: SelectionProp) => {
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      className={` ${
        isScreenSmall ? "w-full" : ""
      } flex flex-row space-x-4 md:flex-col md:space-y-10 md:space-x-0 md:justify-start items-center md:border-r-2 border-r-fadeWhite md:h-72 md: 1/4  px-10 md:mt-36`}
    >
      <Button
        className="font-inter bg-textgray"
        variant={selected === "a" ? "pneumaBlue" : null}
        style={{ width: isScreenSmall ? "100%" : "" }}
        onClick={() => {
          setSelected("a");
        }}
      >
        Edit Profile
      </Button>
      <Button
        style={{ width: isScreenSmall ? "100%" : "" }}
        variant={selected === "b" ? "pneumaBlue" : null}
        onClick={() => setSelected("b")}
      >
        Password & Security
      </Button>
    </div>
  );
};

interface UserInfo {
  firstname: string;
  lastname: string;
  nationalCode: string;
  educationLevel: string;
  email: string;
  phone: string;
  country: string;
  city: string;
}

const SettingsForm = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstname: "",
    lastname: "",
    nationalCode: "",
    educationLevel: "",
    email: "",
    phone: "",
    country: "",
    city: "",
  });

  const onchange = (
    event: React.ChangeEvent<HTMLInputElement>,
    input: string
  ) => {
    switch (input) {
      case "firstname":
        setUserInfo({ ...userInfo, firstname: event.target.value });
        break;
      case "lastname":
        setUserInfo({ ...userInfo, lastname: event.target.value });
        break;
      case "nationalCode":
        setUserInfo({ ...userInfo, nationalCode: event.target.value });
        break;
      case "educationLevel":
        setUserInfo({ ...userInfo, educationLevel: event.target.value });
        break;
      case "email":
        setUserInfo({ ...userInfo, email: event.target.value });
        break;
      case "phone":
        setUserInfo({ ...userInfo, phone: event.target.value });
        break;
      case "country":
        setUserInfo({ ...userInfo, country: event.target.value });
        break;
      case "city":
        setUserInfo({ ...userInfo, city: event.target.value });
        break;
      default:
        break;
    }
  };

  return (
    <div className="grid grid-cols-1 justify-center gap-y-3 items-center pt-10 w-full md:w-[60%] text-clip ">
      <h2 className="text-2xl ">Edit Profile</h2>
      <div className="grid grid-cols-1">
        <h3 className="font-inter text-base  my-4">Personal</h3>
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4">
          <TextInput
            label="First Name"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "firstname")
            }
          />
          <TextInput
            label="Surname Name"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "lastname")
            }
          />
        </div>
      </div>
      <div className="grid gap-y-3">
        <TextInput
          label="National Code"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onchange(event, "nationalCode")
          }
        />
        <TextInput
          label="Education Level"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onchange(event, "educationLeve")
          }
        />
      </div>
      <div className="grid gap-y-3">
        <h3 className="font-inter text-base  my-8">Contact</h3>
        <TextInput
          label="Email"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onchange(event, "email")
          }
        />
        <TextInput
          label="Phone number"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onchange(event, "phone")
          }
        />
        <TextInput
          label="Country"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onchange(event, "country")
          }
        />
        <TextInput
          label="City"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onchange(event, "city")
          }
        />
      </div>

      <Button  style={BrandButtonStyle} variant="pneumaBlue" onClick={() => alert(userInfo)}>
        Done
      </Button>
    </div>
  );
};

const PasswordChange = () => {
  const [userInfo, setUserInfo] = useState({
    oldpassword: "",
    newpassword: "",
  });
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const onchange = (
    event: React.ChangeEvent<HTMLInputElement>,
    input: string
  ) => {
    switch (input) {
      case "oldpassword":
        setOldPassword(event.target.value);
        break;
      case "newpassword":
        setPassword(event.target.value);
        break;
      case "confirmpassword":
        setPassword1(event.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="grid grid-cols-1 justify-center  gap-y-2  items-center pt-10 w-full md:w-[60%]">
      <h3 className="font-inter text-center text-lg">Password & Security</h3>
      <div className="grid grid-cols-1 justify-center gap-y-3 items-center pt-10 w-full">
        <TextInput
          label="Old Password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onchange(event, "phone")
          }
        />
        <TextInput
          label="New Password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onchange(event, "phone")
          }
        />
        <TextInput
          label="Confirm Neww Password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onchange(event, "phone")
          }
        />
      </div>
      <Button
        style={BrandButtonStyle}
        variant="pneumaBlue"
        onClick={() => {
          if (password === "" || password1 === "") {
            toast.error("Password can't be empty string");
          } else if (password === password1 && password !== "") {
            setUserInfo({ oldpassword: oldPassword, newpassword: password });
            // handlePasswordUpdate();
          } else {
            toast.error("Password Inconsistent");
          }
        }}
      >
        Done
      </Button>
    </div>
  );
};
