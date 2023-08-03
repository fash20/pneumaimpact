import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useAuth } from '../store/auth/AuthProvider';
import toast from 'react-hot-toast';
import checkTokenExp from '../utils/checkTokenExp';
import { useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import PaidIcon from '@mui/icons-material/Paid';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface StudentDataRow {
  id: string,
  title: string
}

const UserManagement = () => {
  const { userData : {token} } = useAuth();
  const [studentData, setStudentData] = useState<Array<StudentDataRow>>([]);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()
  const [userId, setUserID] = useState("");

  const handleClickOpen = (userID: string) => {
    setUserID(userID);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updatePaymentStatus = async () => {
    const url = `https://api.pneumaimpact.ng/v1/api/students/${userId}/mark-as-paid`
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      toast.success("Update Completed " + JSON.stringify(data))
    } catch (error) {
      toast.error("Failed to fetch course data")
      throw new Error('Failed to fetch course data');
      
    }
    handleClose()
  }

  
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },

    { field: "publish", headerName: "Update Payment Status", width: 130, renderCell: (params: GridRenderCellParams) => (
      <Button variant="contained"  onClick={() => handleClickOpen(params.row.id)}>
       <PaidIcon />
      </Button>
    ),  },
  ];

  useEffect(() => {
    document.title = "Pneumalmpact - Course Management";
    if (!checkTokenExp(token)) {
      navigate("/login");
    } else {
      getData()
      .then((data) => {
        setStudentData(data);
      })
      .catch((error) => {
        toast.error('Error fetching course data:', error)
        console.error('Error fetching course data:', error);
      });
    }
  }, []);
  
  
  const getData = async () => {
    try {
      const response = await fetch('https://api.pneumaimpact.ng/v1/api/students/', {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      return data.docs.map((student:any) => ({
        id: student._id,
        email: student.email,
      }));
    } catch (error) {
      throw new Error('Failed to fetch user data');
    }
  };


  return (
    <div className="flex flex-col w-full mt-9 p-5 space-y-5">

        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={studentData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
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
            Click Update Botton if the selected student has paid using other payemnt method outside this application.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={updatePaymentStatus}>Update</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  )
}

export default UserManagement