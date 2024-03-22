import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface AppLoaderProps {
  children: React.ReactNode;
}

const AppLoader = ({ children }: AppLoaderProps) => {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return children;
};

export default AppLoader;
