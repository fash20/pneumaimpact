import { InputLabel, TextField } from "@material-ui/core";
import { TextFieldProps, useMediaQuery } from "@mui/material";
import React, { useId } from "react";
import { theme } from "../utils/UIThemes";

interface Prop {
  label?: string;
  ContainerClassName?: string;
  TextFieldClassName?: string;
  type?: string;
  value?:string
  onChange?(event: React.ChangeEvent<HTMLInputElement>): any
}
const TextInput = ({
  label,
  ContainerClassName,
  TextFieldClassName,
  type,
  value,
  onChange
}: Prop) => {
  const id = useId();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className={`grid grid-cols-1 gap-2 m-2 font-inter` + ContainerClassName}>
      <InputLabel htmlFor={label + id}>{label}</InputLabel>
      <TextField
        variant="outlined"
        type={type || "text"}
        size={`${isScreenSmall? 'small':'medium'}`}
        className={`${TextFieldClassName}`}
        style={{ borderRadius: "12px" }}
        placeholder={label}
        id={label + id}
        onChange ={onChange}
        value={value}
      />
    </div>
  );
};

export default TextInput;
