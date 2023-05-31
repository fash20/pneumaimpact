import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const useVerifyJWT = (token) => {
  const [isValid, setIsValid] = useState(false);
  
  useEffect(() => {
    try {
      const decoded = jwt_decode(token);
      const currentTime = new Date().getTime() / 1000;
      setIsValid(decoded.exp > currentTime);
    } catch (err) {
      console.error(err);
    }
  }, [token]);
  
  return isValid;
};

export default useVerifyJWT;