import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";

const checkTokenExpired = token => {
  try {
    const decoded = jwt_decode(token);
    const currentTime = Date.now().valueOf() / 1000;
    if (decoded.exp < currentTime) {
      toast.error('Session expired please login again')
      return false;
    } else {
      return true;
    }
  } catch (error) {
    return false;
  }
};

export default checkTokenExpired;