import axios from 'axios';
import React, { ReactNode, useEffect } from 'react'
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth/AuthProvider';


interface RenderComponent {
  children?: ReactNode;
}


const ProtectedRoute = ({children}:RenderComponent) => {
  const navigate = useNavigate();
  const { userData } = useAuth();


  useEffect(()=>{

    if (userData === null || userData.token === null || userData.token === "" ){
      navigate('/login')
      toast("Please Sign in")
    }

  },[userData])
  return (
    <div className='justify-center items-center'>
      
      {
       userData === null? <Navigate to={'/login'} /> : children
      }
    </div>
  )
}

export default ProtectedRoute