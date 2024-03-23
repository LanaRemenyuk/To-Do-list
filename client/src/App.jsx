import styled from "@emotion/styled";
import { ToastContainer } from "react-toastify";
import { Box, CssBaseline } from "@mui/material";
// AppLoader
import AppLoader from "./hoc/app-loader";
// routes
import AppRoutes from "@routes/routes";
// components
import TopBar from "./components/ui/topbar/topbar";

export const AppStyled = styled(Box)`
  height: 100vh;
  min-height: 100%;
  padding: 20px 20px 80px 20px;
  display: flex;
  flex-direction: column;
  background-color: #007bff;
  background-image: linear-gradient(to top, #007bff, #00bcd4);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

function App() {
  return (
    <Box>
      <CssBaseline />
      <AppLoader>
        <AppStyled>
          <TopBar />
          <AppRoutes />
        </AppStyled>
      </AppLoader>

      <ToastContainer
        position="bottom-left"
        className="toast-container"
        autoClose={2200}
      />
    </Box>
  );
}

export default App;
