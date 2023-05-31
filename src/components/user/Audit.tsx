import React, { useState } from "react";
import TextInput from "../ui/TextInput";
import SettingSVG from "./SettingSVG";
import Radio from "@mui/material/Radio";
import { BrandButtonStyle } from "../utils/UIThemes";
import { Button, IconButton } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import axios, { Axios } from "axios";
import toast from "react-hot-toast";
import { ProfileSection } from "./Settings";
import { useAuth } from "../store/auth/AuthProvider";

interface AuditDocument {
  businessName: string;
  businessPlan: any;
  meansOfIdentification: any;
}
interface iAuditRadioGroupProps {
  selectedValue: string;
  setSelectedValue: (selectedValue: string) => void;
}

const Audit = () => {
  const [selectedValue, setSelectedValue] = useState("a");
  const [auditDocument, setAuditDocument] = useState<AuditDocument>({
    businessName: "",
    businessPlan: {},
    meansOfIdentification: {},
  });

  return (
    <div className="grid grid-cols-1 relative w-full " id="fade-in">
      <div className="relative h-[250px]">
        <SettingSVG />
        <ProfileSection />
      </div>
      <div className="flex flex-col space-y-5  md:flex-row  md:space-x-5 md:space-y-0 p-4 ">
        <AuditRadioGroup
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        {/* <div className="md:mr-20"> */}
        {selectedValue === "a" && (
          <BusinessNameForm
            auditDocument={auditDocument}
            setAuditDocument={setAuditDocument}
            setSelectedValue={setSelectedValue}
          />
        )}
        {selectedValue === "b" && (
          <BusinessPlanUpload
            auditDocument={auditDocument}
            setAuditDocument={setAuditDocument}
            setSelectedValue={setSelectedValue}
          />
        )}
        {selectedValue === "c" && (
          <MeansOfIdenficationForm
            auditDocument={auditDocument}
            setAuditDocument={setAuditDocument}
            setSelectedValue={setSelectedValue}
          />
        )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Audit;

const AuditRadioGroup = ({
  selectedValue,
  setSelectedValue,
}: iAuditRadioGroupProps) => {
  // const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="w-full md:w-[350px] p-9 border-[1px] border-grayMarginColor rounded-sm ">
      <div className="flex flex-col space-y-4 ">
        <div
          className={` ${
            selectedValue === "a" ? " aud-rad-bdr-clr " : "aud-rad-bdr"
          } relative  h-16`}
        >
          <Radio
            checked={selectedValue === "a"}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
            className="absolute top-[-18px] left-[-22px] "
            sx={{
              color: "#DBDBDB",
              "&.Mui-checked": {
                color: "#2F327D",
              },
            }}
          />
          <div className="absolute top-[-9px] pl-5">
            <h3>Business Name</h3>
            <h3>Click here to enter your official business name</h3>
          </div>
        </div>
        <div
          className={` ${
            selectedValue === "b" ? " aud-rad-bdr-clr " : "aud-rad-bdr"
          } relative  h-16`}
        >
          <Radio
            checked={selectedValue === "b"}
            onChange={handleChange}
            value="b"
            name="radio-buttons"
            inputProps={{ "aria-label": "B" }}
            className="absolute top-[-18px] left-[-22px] "
            sx={{
              color: "#DBDBDB",
              "&.Mui-checked": {
                color: "#2F327D",
              },
            }}
          />
          <div className="absolute top-[-9px] pl-5">
            <h3>Business Plan upload</h3>
            <h3>Click here to upload your business plan</h3>
          </div>
        </div>
        <div
          className={` ${
            selectedValue === "c" ? " aud-rad-bdr-clr " : "aud-rad-bdr"
          } relative  h-16`}
        >
          <Radio
            checked={selectedValue === "c"}
            onChange={handleChange}
            value="c"
            name="radio-buttons"
            inputProps={{ "aria-label": "C" }}
            className="absolute top-[-18px] left-[-22px] "
            sx={{
              color: "#DBDBDB",
              "&.Mui-checked": {
                color: "#2F327D",
              },
            }}
          />
          <div className="absolute top-[-9px] pl-5">
            <h3>Means of Identification</h3>
            <h3>Click here to upload your means of identification</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const BusinessNameForm = ({
  auditDocument,
  setAuditDocument,
  setSelectedValue,
}: AuditDocumentProp) => {
  const [businessName, setBusinessName] = useState("");
  return (
    <div className="flex flex-col space-y-10 border-[1px] border-grayMarginColor w-full p-9 md:w-[60%]  justify-center">
      <span>
        <h3>Business Name</h3>
        <h4>Your Business should be unique to what you are into</h4>
      </span>
      <TextInput
        label={"Business Name"}
        onChange={(e) => setBusinessName(e.target.value)}
        value={businessName === null ? "" : businessName}
      />
      <div className="flex justify-center items-center w-[full]">
        <Button
          variant="pneumaBlue"
          style={BrandButtonStyle}
          className="w-[50%]"
          onClick={() => {
            setAuditDocument({ ...auditDocument, businessName });
            setSelectedValue('b')
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

interface AuditDocumentProp {
  auditDocument: AuditDocument;
  setAuditDocument: (auditDocument: any) => void;
  setSelectedValue: (value: string) => void;
}
const MeansOfIdenficationForm = ({
  auditDocument,
  setAuditDocument,
  setSelectedValue
}: AuditDocumentProp) => {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [isFilePicked, setIsFilePicked] = useState(
    auditDocument.meansOfIdentification ? true : false
  );

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files[0]);
    console.log( event.target.files)
    setAuditDocument({...auditDocument, meansOfIdenfication:event.target.files})
    setIsFilePicked(true);
  };

  return (
    <div className="w-full flex flex-col space-y-10  md:w-[60%] ">
      <div className="text-[#667085] font-interlight">
        <h1 className="font-bold ">Means of Identification</h1>
        <p>
          Upload a mean of Identifcation. Upload either of the following
          National ID, Drivers Licence, CAC certicficate, Voters' Card
        </p>
      </div>
      <div className="flex relative w-full h-[100px] bg-lightBlue justify-center items-center space-x-4">
        <label
          id="upload-label"
          className="flex justify-center space-x-4 items-center w-full h-full text-center"
          htmlFor="upload-input1"
        >
          <CloudUploadIcon />
          <span>
            Drag and drop or <span className="text-red">Browse </span> your
            local device to upload
          </span>
        </label>
        <input
          id="upload-input1"
          onChange={changeHandler}
          accept=".doc,.docx,.pdf"
          type={"file"}
          multiple
        />
      </div>
      {!isFilePicked && (
        <div
          className="flex relative w-full h-[60px] bg-lightBlue justify-between items-center space-x-4 "
          id="fadein"
        >
          <SelectedItem
            fileSize={auditDocument.meansOfIdentification}
            fileName={auditDocument.meansOfIdentification.name}
          />

          <IconButton
            onClick={() => {
              setSelectedFile({});
              setIsFilePicked(false);
              // setAuditDocument({...auditDocument, selectedFile} )
            }}
          >
            <DeleteOutlined />
          </IconButton>
        </div>
      )}
      <div className="flex justify-center items-center w-[full]">
        <Button
          variant="pneumaBlue"
          style={BrandButtonStyle}
          className="w-[50%]"
          onClick={() => {
            axios
              .post("https://api.pneumaimpact.ng/v1/api/uploads", {
                file: selectedFile,
              })
              .then((res) => {
                console.log(res);
                setAuditDocument({
                  ...auditDocument,
                  meansOfIdentification: res,
                });
                setSelectedValue('c')
              })
              .catch((err) => {
                toast.error(
                  "Something went wrong while uploading the your Means of Identification"
                );
              });
          }}
        >
          Finish
        </Button>
      </div>
    </div>
  );
};
const BusinessPlanUpload = ({
  auditDocument,
  setAuditDocument,
}: AuditDocumentProp) => {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [isFilePicked, setIsFilePicked] = useState(
    auditDocument.businessPlan ? true : false
  );
  var formData = new FormData();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    formData.append("file", event.target.files[0]);
  };
  const {
    userData: { token },
  } = useAuth();

  return (
    <div className="w-full flex flex-col space-y-10  md:w-[60%]">
      <div className="text-[#667085] font-interlight">
        <h1 className="font-bold ">Business Plan</h1>
        <p>
          This section should explain what a business plan should look like and
          what it takes to get a business plan out.
        </p>
      </div>
      <div className="flex relative w-full h-[100px] bg-lightBlue justify-center items-center space-x-4">
        <label
          id="upload-label"
          className="flex justify-center space-x-4 items-center w-full h-full text-center"
          htmlFor="upload-input1"
        >
          <CloudUploadIcon />
          <span>
            Drag and drop or <span className="text-red"> Browse </span> your
            local device to upload
          </span>
        </label>
        <input
          id="upload-input1"
          onChange={changeHandler}
          accept=".doc,.docx,.pdf"
          type={"file"}
          multiple
        />
      </div>
      {selectedFile === null ? "" :  (
        <div
          className="flex relative w-full h-[60px] bg-lightBlue justify-between items-center space-x-4"
          id="fadein"
        >
         {/* { auditDocument.businessPlan && <SelectedItem
            fileSize={auditDocument.businessPlan.size }
            fileName={auditDocument.businessPlan.name}
          />} */}
         <SelectedItem
            fileSize={selectedFile.size}
            fileName={selectedFile.name}
          />
          

          <IconButton
            onClick={() => {
              setIsFilePicked(false);
              setSelectedFile(null);
            }}
          >
            <DeleteOutlined />
          </IconButton>
        </div>
      )}
      <div className="flex justify-center items-center w-[full]">
        <Button
          variant="pneumaBlue"
          style={BrandButtonStyle}
          className="w-[50%]"
          onClick={() => {
            axios
              .post("https://api.pneumaimpact.ng/v1/api/uploads", {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              })
              .then((res) => {
                setAuditDocument({ ...auditDocument, businessPlan: res });
              })
              .catch((err) => {
                toast.error("Something went wrong while uploading");
              });
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

interface SelectedItemProp {
  fileName: string;
  fileSize: string;
}

export const SelectedItem = ({ fileName, fileSize }: SelectedItemProp) => {
  return (
    <div className="flex flex-row space-x-5 p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="40"
        fill="none"
        viewBox="0 0 31 40"
      >
        <path
          fill="#E2574C"
          fillRule="evenodd"
          d="M2.5 0h17.241L31 11.215V37.5a2.5 2.5 0 01-2.5 2.5h-26A2.5 2.5 0 010 37.5v-35A2.5 2.5 0 012.5 0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#B53629"
          fillRule="evenodd"
          d="M30.964 11.25H22.25a2.5 2.5 0 01-2.5-2.5V.025L30.964 11.25z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#fff"
          d="M6.946 24.09c-.253 0-.447-.07-.58-.21-.133-.14-.2-.337-.2-.59v-5.55c0-.26.067-.457.2-.59.14-.133.337-.2.59-.2h2.43c.787 0 1.393.2 1.82.6.427.393.64.943.64 1.65s-.213 1.26-.64 1.66c-.427.4-1.033.6-1.82.6h-1.67v1.83c0 .253-.067.45-.2.59-.127.14-.317.21-.57.21zm.77-3.83h1.41c.4 0 .703-.09.91-.27.213-.18.32-.443.32-.79 0-.347-.107-.607-.32-.78-.207-.173-.51-.26-.91-.26h-1.41v2.1zm5.9 3.74c-.26 0-.46-.07-.6-.21-.14-.14-.21-.34-.21-.6v-5.43c0-.26.07-.46.21-.6.14-.14.34-.21.6-.21h1.95c1.207 0 2.137.307 2.79.92.66.607.99 1.473.99 2.6 0 .567-.086 1.07-.26 1.51-.166.433-.41.8-.73 1.1-.32.3-.713.53-1.18.69-.466.153-1.003.23-1.61.23h-1.95zm.74-1.27h1.12c.38 0 .71-.047.99-.14.28-.093.514-.233.7-.42.187-.187.327-.42.42-.7.094-.287.14-.62.14-1 0-.76-.19-1.323-.57-1.69-.373-.373-.933-.56-1.68-.56h-1.12v4.51zm6.985 1.36c-.254 0-.45-.07-.59-.21-.134-.14-.2-.343-.2-.61v-5.51c0-.26.07-.46.21-.6.14-.14.34-.21.6-.21h3.42c.2 0 .35.053.45.16.106.1.16.247.16.44 0 .2-.053.353-.16.46-.1.1-.25.15-.45.15H22.1v1.72h2.46c.2 0 .353.053.46.16.107.1.16.247.16.44s-.053.343-.16.45c-.107.107-.26.16-.46.16H22.1v2.18c0 .547-.253.82-.76.82z"
        ></path>
      </svg>
      <div className="flex flex-col font-interlight font-10px ">
        <span>{fileName}</span>
        <span>{`${(Number(fileSize) / 1000000).toFixed(3)}MB`}</span>
      </div>
    </div>
  );
};
