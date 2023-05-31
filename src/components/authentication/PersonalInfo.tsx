
import React, { useState } from "react";
import logo from "../assets/images/pneumaImpact-logo.svg";
import enLocale from "i18n-iso-countries/langs/en.json";
import countries from "i18n-iso-countries";
import ReactFlagsSelect from "react-flags-select";
import "../styles/General.css";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { BrandButtonStyle } from "../utils/UIThemes";

const PersonalInfo = () => {
  const [selectedCountry, setSelectedCountry] = useState("Nigeria");
  const selectCountryHandler = (value: string) => {
    setSelectedCountry(value);
  };
  countries.registerLocale(enLocale);

  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map((key, value) => {
    return {
      label: value,
      value: key,
    };
  });
  const [personalInfo, setPersonalInfo] = useState({
    firstname: "",
    lastname: "",
    country: "",
    state: "",
    countryCode: "",
    telephone: "",
  });

  const onchange = (
    event: React.ChangeEvent<HTMLInputElement>,
    input: string
  ) => {
    switch (input) {
      case "firstname":
        setPersonalInfo({ ...personalInfo, firstname: event.target.value });
        break;
      case "lastname":
        setPersonalInfo({ ...personalInfo, lastname: event.target.value });
        break;
      case "country":
        setPersonalInfo({ ...personalInfo, country: selectedCountry });
        break;
      case "state":
        setPersonalInfo({ ...personalInfo, state: event.target.value });
        break;
      case "countryCode":
        setPersonalInfo({ ...personalInfo, countryCode: event.target.value });
        break;
      case "telephone":
        setPersonalInfo({ ...personalInfo, telephone: event.target.value });
        break;
      default:
        break;
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCountry(event.target.value);
    setPersonalInfo({ ...personalInfo, country: event.target.value });
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
        <h3 className=" text-lg">Personal Inofrmation</h3>
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
          </div>
          <Button variant="pneumaBlue" style={BrandButtonStyle} onClick={()=> {
            alert(JSON.stringify(personalInfo  ))
            
          }}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
