import React from "react";
import logo from "../assets/images/pneumaImpact-logo.svg";
import { Link } from "react-router-dom";
import { Button, FormControl, Menu, MenuItem, Select, SelectChangeEvent } from "@mui/material";

const AdditionalInfo = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
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
        <h1 >Area Of Business</h1>
      </div>
      <div className="grid grid-cols-1 gap-y-10">
        <div className="grid gap-10 grid-cols-1 ">
          <div>
            {/* <Combobox
              inputHeight={50}
              label=""
              placeholder={"Choose one"}
              items={[]}
              style={{ width: "100%", height: 50 }}
            /> */}
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
          </div>

          <Button >Next</Button>
        </div>
        {/* <div className="flex flex-row justify-between">
          <Link t >Create an Account</Link>
          <Link>Forget Password?</Link>
        </div> */}
      </div>
    </div>
  );
};

export default AdditionalInfo;
