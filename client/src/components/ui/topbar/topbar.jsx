// libraries
import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { Box, styled } from "@mui/material";
// icons
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// common
import TopBarCurrentDate from "./components/topbar-current-date";
import ButtonStyled from "@components/common/buttons/button-styled.button";
// common
import { ContainerStyled } from "@common/container/container-styled";

const Component = styled(Box)`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const TopBar = React.memo(() => {
  return (
    <Component>
      <TopBarCurrentDate />
      <ButtonStyled
        title="Войти"
        color="success"
        // onClick={() => ()}
        icon={<LockOutlinedIcon />}
      />
    </Component>
  );
});

export default TopBar;
