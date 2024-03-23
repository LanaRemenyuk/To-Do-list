import { Box } from "@mui/material";
// icons
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
// components
import ButtonStyled from "@components/common/buttons/button-styled.button";
import { ContainerStyled } from "@components/common/container/container-styled";
import HeaderLayout from "@components/common/page-headers/header-layout";
import Task from "@components/common/task/task";
import { PostsMockData } from "@data/posts.mock";
import DialogStyled from "@components/common/dialog/dialog-styled";
import TaskCreate from "@components/pages/task-create/task-create";
import React, { useState } from "react";
import useDialogHandlers from "@hooks/dialog/use-dialog-handlers";

const Main = React.memo(() => {
  const [state, setState] = useState({
    createTaskPage: false,
    updateTaskPage: false,
    taskId: null
  });

  const tasksList = PostsMockData;
  // console.log("tasksList", tasksList);

  const { handleOpenTaskPage, handleCloseTaskPage } =
    useDialogHandlers(setState);

  return (
    <ContainerStyled>
      <ButtonStyled
        title="Добавить задачу"
        color="success"
        onClick={handleOpenTaskPage}
        margin="0 0 16px 0"
        icon={<AddCircleOutlineOutlinedIcon />}
      />

      {tasksList?.map((task) => (
        <Task task={task} key={task._id}></Task>
      ))}

      <DialogStyled
        component={<TaskCreate onClose={handleCloseTaskPage} />}
        maxWidth="sm"
        onClose={handleCloseTaskPage}
        open={state.createTaskPage}
      />
      {/* <DialogStyled
        component={
          <TaskCreate onClose={handleCloseTaskPage} taskId={state.taskId} />
        }
        maxWidth="sm"
        onClose={handleCloseTaskPage}
        open={state.createTaskPage}
      /> */}
    </ContainerStyled>
  );
});

export default Main;
