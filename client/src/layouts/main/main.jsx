import { useSelector } from "react-redux";
import { Box, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { orderBy } from "lodash";
// components
import ButtonStyled from "@components/common/buttons/button-styled.button";
import { ContainerStyled } from "@components/common/container/container-styled";
import HeaderLayout from "@components/common/page-headers/header-layout";
import Task from "@components/common/task/task";
import DialogStyled from "@components/common/dialog/dialog-styled";
import TaskUpdate from "@components/pages/task-create/task-update";
import TaskCreate from "@components/pages/task-create/task-create";
import Buttons from "./components/buttons";
// hooks
import useDialogHandlers from "@hooks/dialog/use-dialog-handlers";
// store
import { getTasksList } from "@store/task/tasks.store";

const Main = React.memo(() => {
  const [state, setState] = useState({
    createTaskPage: false,
    updateTaskPage: false,
    taskId: null
  });

  const [sortOrders, setSortOrders] = useState({
    userName: "asc",
    userEmail: "asc",
    isDone: "asc"
  });

  const tasksList = useSelector(getTasksList());
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(tasksList);
  }, [tasksList]);

  const { handleOpenTaskPage, handleCloseTaskPage, handleCloseUpdateTaskPage } =
    useDialogHandlers(setState);

  const sortTasks = (sortBy) => {
    const newSortOrder = sortOrders[sortBy] === "asc" ? "desc" : "asc";
    const sortedList = orderBy(tasksList, [sortBy], [newSortOrder]);
    setTask(sortedList);
    setSortOrders((prevSortOrders) => ({
      ...prevSortOrders,
      [sortBy]: newSortOrder
    }));
  };

  const sortedByName = () => sortTasks("userName");
  const sortedByEmail = () => sortTasks("userEmail");
  const sortedByStatus = () => sortTasks("isDone");

  return (
    <ContainerStyled>
      <Buttons
        tasksList={task}
        setState={setState}
        sortOrders={sortOrders}
        sortedByName={sortedByName}
        sortedByEmail={sortedByEmail}
        sortedByStatus={sortedByStatus}
      />
      {task?.map((task) => (
        <Task task={task} setState={setState} key={task._id}></Task>
      ))}

      <DialogStyled
        component={<TaskCreate onClose={handleCloseTaskPage} />}
        maxWidth="sm"
        onClose={handleCloseTaskPage}
        open={state.createTaskPage}
      />
      <DialogStyled
        component={
          <TaskUpdate
            onClose={handleCloseUpdateTaskPage}
            taskId={state.taskId}
          />
        }
        maxWidth="sm"
        onClose={handleCloseUpdateTaskPage}
        open={state.updateTaskPage}
      />
    </ContainerStyled>
  );
});

export default Main;
