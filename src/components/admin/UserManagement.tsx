import { ReactElement, useEffect, useState, forwardRef, Ref } from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useAuth } from "../store/auth/AuthProvider";
import toast from "react-hot-toast";
import checkTokenExp from "../utils/checkTokenExp";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import PaidIcon from "@mui/icons-material/Paid";
import axios, { Axios } from "axios";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface StudentDataRow {
  id: string;
  title: string;
}

const UserManagement = () => {
  const {
    userData: { token },
  } = useAuth();
  const [studentData, setStudentData] = useState<Array<StudentDataRow>>([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [userId, setUserID] = useState("");
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 20,
  });
  const [rowCountState, setRowCountState] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({
    totalRows: 0,
  });

  const handlePageChange = (params: { page: number }) => {
    // setPaginationModel({ page: params.page, pageSize: paginationModel.pageSize });
    setPaginationModel((prevPaginationModel) => ({
      ...prevPaginationModel,
      page: 1,
    }));
  };

  const handleClickOpen = (userID: string) => {
    setUserID(userID);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updatePaymentStatus = async () => {
    let date = new Date().toISOString().slice(0, 10);
    const url = `https://api.pneumaimpact.ng/v1/api/students/${userId}/mark-as-paid`;
    let data = JSON.stringify({
      date_of_payment: date,
    });
    
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: url,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        alert(JSON.stringify(response.data));
      })
      .catch((error) => {
        alert(error);
      });

    handleClose();
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "publish",
      headerName: "Update Payment Status",
      width: 130,
      renderCell: (params: GridRenderCellParams) => (
        <Button
          variant="contained"
          onClick={() => handleClickOpen(params.row.id)}
        >
          <PaidIcon />
        </Button>
      ),
    },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
  ];

  useEffect(() => {
    const { page } = paginationModel;
    document.title = "Pneumalmpact - User Management";

    setRowCountState((prevRowCountState) =>
      pageInfo?.totalRows !== undefined
        ? pageInfo?.totalRows
        : prevRowCountState
    );

    if (!checkTokenExp(token)) {
      navigate("/login");
    } else {
      getData(page)
        .then((data) => {
          setStudentData(data);
        })
        .catch((error) => {
          toast.error("Error fetching users:", error);
        });
    }
  }, [currentPage, pageInfo?.totalRows, setRowCountState]);

  const getData = async (page: number) => {
    try {
      const response = await fetch(
        `https://api.pneumaimpact.ng/v1/api/students/?page=${currentPage}&perPage=20`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      setPageInfo({ ...pageInfo, totalRows: data.totalDocs });
      return data.docs.map((student: any) => ({
        id: student._id,
        email: student.email,
      }));
    } catch (error) {
      throw new Error("Failed to fetch user data");
    }
  };

  return (
    <div className="flex flex-col w-full mt-9 p-5 space-y-5">
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={studentData}
          columns={columns}
          rowCount={rowCountState}
          checkboxSelection
          pagination
          pageSizeOptions={[5, 10, 20]}
          paginationMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
        />

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Update Student Payment Status?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Click Update Botton if the selected student has paid using other
              payemnt method outside this application.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={updatePaymentStatus}>Update</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <Button
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            } else {
              toast.error("Last Page");
            }
          }}
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            if (currentPage < rowCountState) {
              setCurrentPage(currentPage + 1);
            } else {
              toast.error("Last Page");
            }
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default UserManagement;
