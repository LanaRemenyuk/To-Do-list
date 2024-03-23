// libraries
import React, { useState } from "react";
import dayjs from "dayjs";
import { Box, styled } from "@mui/material";
import "dayjs/locale/ru";
// icons
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// common
import TopBarCurrentDate from "./components/topbar-current-date";
import HeaderLayout from "@components/common/page-headers/header-layout";
import ApplicationName from "@components/ui/topbar/components/application-name";
import ButtonStyled from "@components/common/buttons/button-styled.button";
// common
import { ContainerStyled } from "@common/container/container-styled";
import DialogStyled from "@components/common/dialog/dialog-styled";
import Login from "@components/pages/login/login";
import useDialogHandlers from "@hooks/dialog/use-dialog-handlers";

const Component = styled(Box)`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
`;

const TopBar = React.memo(() => {
  const [state, setState] = useState({
    openAuthPage: false
  });

  const { handleOpenAuthPage, handleCloseAuthPage } =
    useDialogHandlers(setState);

  return (
    <Component>
      <TopBarCurrentDate />
      <ApplicationName title="Список задач"></ApplicationName>
      <ButtonStyled
        title="Войти"
        color="secondary"
        onClick={handleOpenAuthPage}
        icon={<LockOutlinedIcon />}
      />

      <DialogStyled
        component={<Login onClose={handleCloseAuthPage} />}
        maxWidth="xs"
        onClose={handleCloseAuthPage}
        open={state.openAuthPage}
      />
    </Component>
  );
});

export default TopBar;
