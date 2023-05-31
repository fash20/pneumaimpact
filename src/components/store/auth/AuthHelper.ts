import axios from "axios";
import toast from "react-hot-toast";

// export const register = async (
//   email: string,
//   password: string,
//   password_confirmation: string
// ) => {
//   const response = await fetch(
//     "https://api.pneumaimpact.ng/v1/api/auth/register",
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password, password_confirmation }),
//     }
//   );
//   console.log(response.body);
//   if (response.ok) {
//     window.location.href = "/verification";
//   } else {
//     toast.error("Registration error");
//   }
// };

const API_URL = "https://api.pneumaimpact.ng/v1/api/auth/";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const register1 = (
  email: string,
  password: string,
  password_confirmation: string
) => {
  return axios.post(
    API_URL + "register",
    {
      email,
      password,
      password_confirmation,
    },
    config
  );
};

export const signOut = () => {
  console.log("signing out...");
  localStorage.removeItem("userData");
};
