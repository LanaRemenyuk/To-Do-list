import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, styled } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
// components
import ButtonStyled from "@components/common/buttons/button-styled.button";
import { ContainerStyled } from "@components/common/container/container-styled";
import HeaderLayout from "@components/common/page-headers/header-layout";
import Task from "@components/common/task/task";
import DialogStyled from "@components/common/dialog/dialog-styled";
import TaskUpdate from "@components/pages/task-create/task-update";
import TaskCreate from "@components/pages/task-create/task-create";
import PaginationStyled from "@components/common/pagination/pagination-styled";
import Buttons from "./components/buttons";
// hooks
import UseSortedTasks from "./hooks/use-sorted-tasks";
import useSortedTasks from "./hooks/use-sorted-tasks";
import useDialogHandlers from "@hooks/dialog/use-dialog-handlers";
// store
import { getTasksList } from "@store/task/tasks.store";

const Main = React.memo(() => {
  const [tasks, setTasks] = useState([]);
  const [tasksPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationSlicedTasks, setPaginationSlicedTasks] = useState([]);

  const [pagination, setPagination] = useState({
    tasks: [],
    tasksPerPage: 3,
    currentPage: 1,
    paginationSlicedTasks: []
  });

  const [state, setState] = useState({
    createTaskPage: false,
    updateTaskPage: false,
    taskId: null
  });

  const tasksList = useSelector(getTasksList());

  const { handleOpenTaskPage, handleCloseTaskPage, handleCloseUpdateTaskPage } =
    useDialogHandlers(setState);

  const {
    sortOrders,
    sortedByName,
    sortedByEmail,
    sortedByStatus,
    sortedByAdminUpdate
  } = useSortedTasks(tasksList, setTasks);

  useEffect(() => {
    setTasks(tasksList);
  }, [tasksList]);

  return (
    <ContainerStyled>
      <Buttons
        tasksList={tasks}
        setState={setState}
        sortOrders={sortOrders}
        sortedByName={sortedByName}
        sortedByEmail={sortedByEmail}
        sortedByStatus={sortedByStatus}
        sortedByAdminUpdate={sortedByAdminUpdate}
      />

      {paginationSlicedTasks?.map((task) => (
        <Task task={task} setState={setState} key={task._id}></Task>
      ))}

      <PaginationStyled
        elements={tasks}
        elementsPerPage={tasksPerPage}
        elemPerPage={tasksPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setPaginationSlicedElements={setPaginationSlicedTasks}
      />

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
