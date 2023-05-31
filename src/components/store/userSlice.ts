import { AsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./userAction";

interface UserData {
  user: string,
  token: string,
  isVerified:boolean
}

const initialUserData:UserData = {
  user:null,
  token:"",
  isVerified: null,
}

const userData = localStorage.getItem('user')
? JSON.parse(localStorage.getItem('user'))
: localStorage.setItem("user", JSON.stringify(initialUserData));


export interface State{
  loading: boolean,
  userData: UserData
  error: string,
}

const  initialState = {
  loading: false,
  userData: userData,
  error: "",
  success: false,
};


const userSlice :any  = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('user') // deletes token from storage
      state.loading = false
      state.userData = null
      state.error = null
    },
  },
  extraReducers: {
    [registerUser.pending as any]: (state:State) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled as any]: (state:State, {payload}) => {
      state.loading = false
      state.error = payload
    },
    [registerUser.rejected as any]: (state:State, {payload}) => {
      state.loading = false
      state.error = payload
    },
    [loginUser.pending as any]:(state:State) => {
      state.loading = true
      state.error = null
    },
    [loginUser.fulfilled as any]: (state:State, {payload})=> {
      state.loading = false
      // state.userData.token = payload.token
      state.userData.user = payload.user.email
    },
    [loginUser.rejected as any]: (state:State, {payload})=>{
      state.loading = false
      state.error = payload
    },
  },
});

export const { logout } = userSlice.actions
export default userSlice.reducer
