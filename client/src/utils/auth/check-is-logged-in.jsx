import { toast } from "react-toastify";

export const checkIsLoggedIn = () => {
  if (localStorage.getItem("user-local-id") === undefined) {
    return true;
  } else {
    toast.error("Авторизуйтесь в Системе!");
    return false;
  }
};
