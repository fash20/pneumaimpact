import { UserData } from "./authContext"

type Action =
  | { type: "SIGN_IN"; payload: UserData }
  | { type: "SIGN_OUT" };

export const reducer = (state: UserData | null, action: Action) => {
  switch (action.type) {
    case "SIGN_IN":
      localStorage.setItem("userData", JSON.stringify(action.payload));
      return action.payload;
    case "SIGN_OUT":
      localStorage.removeItem("userData");
      return null;
    default:
      return state;
  }
};
