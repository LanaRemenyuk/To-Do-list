import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();

  // useEffect(() => {}, [dispatch]);

  return children;
};

export default AppLoader;
