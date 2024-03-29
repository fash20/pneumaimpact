
import React, { useState } from "react";
import logo from "../assets/images/pneumaImpact-logo.svg";
import enLocale from "i18n-iso-countries/langs/en.json";
import countries from "i18n-iso-countries";
import "../styles/General.css";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { BrandButtonStyle } from "../utils/UIThemes";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../store/auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const [selectedCountry, setSelectedCountry] = useState("Nigeria");
  const [selectedEducationalLevel, setSelectedEducationalLevel] = useState("");

  const selectCountryHandler = (value: string) => {
    setSelectedCountry(value);
  };
  countries.registerLocale(enLocale); 
  const { userData : {token} } = useAuth();
  const navigate = useNavigate();
  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map((key, value) => {
    return {
      label: value,
      value: key,
    };
  });
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    country: "",
    nationalCode: "",
    state: "",
    educationalLevel:"",
    phoneNumber: ""
  });

  const educationalLevel = [
    'Primary Education',
    'Secondary Education',
    'Tetiary Education',
  ]

  const handleSavePersonalInfo = () => {
    axios
      .post(
        "https://api.pneumaimpact.ng/v1/api/profile",
        {
          ...personalInfo
        }
        ,
        {
          headers: { Authorization: `Bearer ${token}` },
        })
      .then((res) => {
          toast.success("Your profile has been updated!")
          navigate("/explore");
        // }
      })
      .catch((err) => {
        toast.error('unable to complete the request');
      });
  }

  const onchange = (
    event: React.ChangeEvent<HTMLInputElement>,
    input: string
  ) => {
    switch (input) {
      case "firstname":
        setPersonalInfo({ ...personalInfo, firstName: event.target.value });
        break;
      case "lastname":
        setPersonalInfo({ ...personalInfo, lastName: event.target.value });
        break;
      case "country":
        setPersonalInfo({ ...personalInfo, country: selectedCountry });
        break;
      case "state":
        setPersonalInfo({ ...personalInfo, state: event.target.value });
        break;
      case "countryCode":
        setPersonalInfo({ ...personalInfo, nationalCode: event.target.value });
        break;
      case "educationallevel":
        setPersonalInfo({ ...personalInfo, educationalLevel: event.target.value });
        break;
      case "telephone":
        setPersonalInfo({ ...personalInfo, phoneNumber: event.target.value });
        break;
      default:
        break;
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCountry(event.target.value);
    setPersonalInfo({ ...personalInfo, country: event.target.value });
  };
  const handleEductionalLevelChange = (event: SelectChangeEvent) => {
    setSelectedEducationalLevel(event.target.value);
    setPersonalInfo({ ...personalInfo, educationalLevel: event.target.value });
  };

  return (
    <div className="grid grid-cols-1 mx-10 my-10 gap-y-14 ">
      <div className="flex justify-center">
        <img
          src={logo}
          className="object-contain h-20 w-20 "
          alt="Pneumalmpact"
        />
      </div>
      <div className="text-center">
        <h3 className=" text-lg">Personal Information</h3>
      </div>
      <div className="grid grid-cols-1 gap-y-10">
        <div className=" grid grid-cols-1 space-y-5">
          <TextField
            label="First Name"
            placeholder={"First Name"}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "firstname")
            }
          />
          <TextField
            label="Last Name"
            placeholder="LastName"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "lastname")
            }
          />
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            <div className="grid gap-2">
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={selectedCountry}
                label="Country"
                onChange={handleChange}
              >
                {countryArr.map(({ label, value }) => (
                  <MenuItem value={value[1]}>{value[1]}</MenuItem>
                ))}
              </Select>
            </div>
            <TextField label="State" placeholder={"State"}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "state")
            }
             />
            <TextField label="Code" placeholder={"123"} 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "countryCode")
            }
            />
            <TextField label="Phone Number" placeholder={"Phone"} 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "telephone")
            }
             />
             <Select
                labelId="helper-label"
                id="helper"
                value={selectedEducationalLevel}
                label="Educational Level"
                onChange={handleEductionalLevelChange}
              >
                {educationalLevel.map(value => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </Select>

          </div>
          <Button variant="pneumaBlue" style={BrandButtonStyle} onClick={handleSavePersonalInfo}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
