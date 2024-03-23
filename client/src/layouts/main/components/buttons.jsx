import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { orderBy } from "lodash";
import React from "react";
// icons
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
// components
import ButtonStyled from "@components/common/buttons/button-styled.button";
// hooks
import useDialogHandlers from "@hooks/dialog/use-dialog-handlers";

const ButtonsContainer = styled(Box)`
  display: flex;
  gap: 4px;
`;

const Buttons = ({
  tasksList,
  setState,
  sortOrders,
  sortedByName,
  sortedByEmail,
  sortedByStatus
}) => {
  const { handleOpenTaskPage } = useDialogHandlers(setState);
  const hasDoneTask = tasksList?.filter((task) => task.isDone);

  const rotatedIcon = (icon) => {
    return React.cloneElement(icon, { style: { transform: "rotate(180deg)" } });
  };

  return (
    <ButtonsContainer>
      <ButtonStyled
        title="Добавить задачу"
        color="warning"
        onClick={handleOpenTaskPage}
        margin="0 0 16px 0"
        icon={<AddCircleOutlineOutlinedIcon />}
      />
      <ButtonStyled
        title="Сортировать по имени"
        color="secondary"
        onClick={() => sortedByName()}
        margin="0 0 16px 0"
        icon={
          sortOrders?.userName === "asc" ? (
            <FilterListOutlinedIcon />
          ) : (
            rotatedIcon(<FilterListOutlinedIcon />)
          )
        }
      />
      <ButtonStyled
        title="Сортировать по почте"
        color="secondary"
        onClick={sortedByEmail}
        margin="0 0 16px 0"
        icon={
          sortOrders?.userEmail === "asc" ? (
            <FilterListOutlinedIcon />
          ) : (
            rotatedIcon(<FilterListOutlinedIcon />)
          )
        }
      />
      <ButtonStyled
        title="Сортировать по выполнению"
        color="secondary"
        onClick={sortedByStatus}
        margin="0 0 16px 0"
        disabled={!hasDoneTask?.length}
        icon={
          sortOrders?.isDone === "asc" ? (
            <FilterListOutlinedIcon />
          ) : (
            rotatedIcon(<FilterListOutlinedIcon />)
          )
        }
      />
    </ButtonsContainer>
  );
};

export default Buttons;
