import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { DataGrid, GridApi, GridKeyValue, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { BrandButtonStyle } from "../utils/UIThemes";
import { useNavigate } from "react-router-dom";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useEffect, useState } from "react";
import checkTokenExp from "../utils/checkTokenExp";
import { useAuth } from "../store/auth/AuthProvider";
import { ICourseProps } from "../user/Collection";
import axios from "axios";
import toast from "react-hot-toast";
// inter


interface CourseDataRow {
  id: string,
  title: string
}

const CourseManagement = () => {
  const navigate = useNavigate()
  const [courseData, setCourseData] = useState<Array<CourseDataRow>>([]);
  const [isLoading, setIsLoadng] = useState(true);
  const { userData : {token} } = useAuth();
  const [loadingProp, setLoadingProp] = useState({
    isloading: true,
    failed: false,
  });
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70,  },
    { field: "title", headerName: "Title", width: 320 },
    { field: "publish", headerName: "Publish Course", width: 130, renderCell: (params) => (
      <Button variant="contained"  onClick={() => handleEdit(params.row.id)}>
       <EditOutlinedIcon />
      </Button>
    ),  },
    { field: "edit",headerName: "Edit", width: 130 },
    { field: "delete",headerName: "Delete", width: 130, renderCell: (params) => (
      <Button variant="contained"  onClick={() => handleDelete(params.row.id)}>
       <DeleteOutlineOutlinedIcon />
      </Button>
    ), },
    
  ];
  const getData = async () => {
    try {
      const response = await fetch('https://api.pneumaimpact.ng/v1/api/courses/', {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      return data.docs.map((course:any) => ({
        id: course._id,
        title: course.title,
      }));
    } catch (error) {
      throw new Error('Failed to fetch course data');
    }
  };

  useEffect(() => {
    document.title = "Pneumalmpact - Course Management";
    if (!checkTokenExp(token)) {
      navigate("/login");
    } else {
      getData()
      .then((data) => {
        setCourseData(data);
        console.log(data)
      })
      .catch((error) => {
        toast.error('Error fetching course data:', error)
        console.error('Error fetching course data:', error);
      });
    }
  }, []);
 
  function handleDelete(id:string){
    axios.delete('https://api.pneumaimpact.ng/v1/api/courses/id/'+id, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },}). then (()=> {
        getData()
        toast.success('Course Deleted')
      })
      .catch(err=> {
        toast.error('unable to delete course ' + err.response.data.message)
      })
  }
    

  return (
    <div className="flex flex-col w-full mt-9 p-5 space-y-5">
        <div>
            <Button style={BrandButtonStyle} onClick={()=>navigate('/admin/courseupload') }>
                <Add />
                Add Course
            </Button>
        </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={courseData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default CourseManagement

function handleEdit(id: any): void {
  throw new Error("Function not implemented.");
}

