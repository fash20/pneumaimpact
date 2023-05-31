import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import AuthService from "./auth";

interface User {
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk(
  "auth/regiter",
  async (user: User, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      // const { data }: any  = await axios.post("https://api.pneumaimpact.ng/v1/api/auth/register", user, config)
      // .catch(err=> toast.error(err.message))
      AuthService.register(user.email, user.password)
        .then((res) => {
          toast.success(res.data.message);
        })
        .catch(err=> toast.error(err.message))
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user: User, thunkAPI) => {
    try {      
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data }: any  = await axios.post("https://api.pneumaimpact.ng/v1/api/auth/login", user, config)
      .catch(err=> {
        // toast.error(err.response.data.message)
        toast.error(err.message || err.response.data.message)
      })      
      const userData = {
        user: data.user.email,
        token: data.token,
        isVerified: data.user.isVerified
      };
      localStorage.setItem("user", JSON.stringify(userData));
      
      return data
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message)
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);


// export const getUserDetails = createAsyncThunk(
//   'user/getUser/Details',
//   async(arg, {getState, rejectWithValue})=>{
//     try{
//       const {user} = getState() as any

//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.userToken}`,
//         },
//       }
//       const { data } = await axios.get(`https://api.pneumaimpact.ng/v1/api/profile`, config)
//       return data
//     }
//     catch (error:any) {
//       if (error.response && error.response.data.message) {
//         toast.error(error.response.data.message+ 'userAction 86')
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// )
