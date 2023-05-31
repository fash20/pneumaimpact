import React, { useState } from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Button, IconButton, TextField } from "@mui/material";
import { SelectedItem } from "../user/Audit";
import { DeleteOutlined, CameraAlt } from "@mui/icons-material";
import { BrandButtonStyle } from "../utils/UIThemes";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import courseimg from "../assets/images/courseimg.svg";
import { uploadFile } from "../utils/utilityfunctions";
import { useAuth } from "../store/auth/AuthProvider";

interface Course {
  title: string;
  body: string;
  description: string;
  image: string;
  filename: string;
  subtitle: string;
  tags: Array<string>;
}

const CourseUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const {
    userData: { token },
  } = useAuth();
  const [course, setCourse] = useState<Course>();
  const [image, setImage] = useState("");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file);
    console.log(file);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      let filePath = uploadFile(formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      filePath
        .then((result: any) => {
          toast.success("File uploaded");
          setCourse({ ...course, filename: result.data.filename.location });
        })
        .catch((err) => {
          toast.error("Unable to upload file");
        });
    }
  };

  const handleUpload = () => {
    axios
      .post("https://api.pneumaimpact.ng/v1/api/courses", course, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("course uploaded succsessfully ");
      })
      .catch((err) => toast.error("unable to upload course "));
  };

  const onchange = (
    event: React.ChangeEvent<HTMLInputElement>,
    input: string
  ) => {
    switch (input) {
      case "title":
        setCourse({ ...course, title: event.target.value });
        break;
      case "subtitle":
        setCourse({ ...course, subtitle: event.target.value });
        break;
      case "body":
        setCourse({ ...course, body: event.target.value });
        break;
      case "description":
        setCourse({ ...course, description: event.target.value });
        break;
      case "image":
        setCourse({ ...course, image: event.target.value });
        break;
      case "tags":
        setCourse({ ...course, tags: event.target.value.split(",") });
        break;
      default:
        break;
    }
  };
  const [selectedImage, setSelectedImage] = useState<FormData | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      const formData = new FormData();
      formData.append("file", file);
      setSelectedImage(formData);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      setPreviewImage(null);
    }
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      console.log(selectedImage.get("file"));

      let filePath = uploadFile(selectedImage, {
        headers: { Authorization: `Bearer ${token}` },
      });
      filePath
        .then((result: any) => {
          toast.success("File uploaded");
          setCourse({ ...course, image: result.data.filename.location });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Unable to upload file" + err.response.data);
        });
    }
  };
  return (
    <div className="flex flex-col w-full justify-center items-center space-y-5 p-7">
      <div className=" flex flex-col w-full sm:w-11/12 md:w-8/12 justify-center  space-y-5">
        <div>
          <span className=" text-3xl ">
            Upload Course
          </span>
        </div>
        <div className="flex flex-col space-y-2">
          <TextField
            placeholder="Course Title"
            size="small"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "title")
            }
          />
          <TextField
            placeholder="Subtitle"
            size="small"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "subtitle")
            }
          />
          <TextField
            placeholder="Body"
            size="small"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "body")
            }
          />
          <TextField
            multiline
            rows={5}
            maxRows={10}
            placeholder="Description"
            size="small"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "description")
            }
          />
          <TextField
            placeholder="Tags"
            size="small"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "tags")
            }
          />
          <TextField placeholder="Category" size="small" />
        </div>
        <div className="flex items-center w-full">
          {previewImage && (
            <img
              src={previewImage}
              className="flex justify-center space-x-4 items-center w-full h-full text-center"
              alt="Preview"
              style={{ width: "300px", height: "auto" }}
            />
          )}
          <label
            id="upload-label"
            className="flex justify-center space-x-4 items-center w-full h-full text-center"
            htmlFor="upload-input"
          >
            <CameraAlt />
          </label>
          <input
            id="upload-input"
            onChange={(e) => handleImageChange(e.target.files)}
            accept=".jpg, .jpeg, .png"
            type={"file"}
            multiple
            className=" "
          />

          <Button onClick={handleImageUpload}>Upload Image</Button>
        </div>
        <div className=" flex " >
          <div className="flex flex-col w-full items-center">
            <div className="flex relative w-full h-[100px] bg-lightBlue justify-center items-center space-x-4">
              <label
                id="upload-label"
                className="flex justify-center space-x-4 items-center w-full h-full text-center"
                htmlFor="upload-input2"
              >
                <CloudUploadIcon />
                <span>
                  Drag and drop or <span className="text-red">Browse </span>{" "}
                  your local device to upload
                </span>
              </label>
              <input
                id="upload-input2"
                onChange={handleFileChange}
                accept=".doc,.docx,.pdf"
                type={"file"}
                multiple
              />
            </div>
            {selectedFile && (
              <div
                className="flex relative w-full h-[60px] bg-lightBlue justify-between items-center space-x-4 "
                id="fadein"
              >
                <SelectedItem
                  fileSize={selectedFile.size.toString()}
                  fileName={selectedFile.name}
                />

                <IconButton
                  onClick={() => {
                    // setSelectedFile({});
                    
                  }}
                >
                  <DeleteOutlined />
                </IconButton>
              </div>
            )}
          </div>
          <Button>Upload File</Button>
        </div>
        <div className="flex w-full items-center justify-center">
          <Button
            className=" w-2/5"
            variant="pneumaBlue"
            style={BrandButtonStyle}
            onClick={handleUpload}
          >
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseUpload;
