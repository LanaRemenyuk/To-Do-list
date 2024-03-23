import { Box, Paper, Typography, styled } from "@mui/material";
import { formatDate } from "@utils/date/format-date";
// components
import DoneStatusIcon from "./components/done-status-icon";
import TaskTitle from "./components/task-title";

const TaskContainer = styled(Paper)`
  padding: 20px;
  background: white;
  color: black;
  margin-bottom: 10px;
`;

const TaskDate = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const UserEmail = styled(Typography)`
  font-style: italic;
  margin-bottom: 8px;
`;

const TaskText = styled(Typography)``;

const Task = ({ task }) => {
  return (
    <TaskContainer variant="elevation">
      <TaskTitle task={task} />
      <UserEmail>{task?.userEmail}</UserEmail>
      <TaskText>{task?.text}</TaskText>

      <TaskDate>
        <Typography>{formatDate(task?.created_at)}</Typography>
      </TaskDate>
    </TaskContainer>
  );
};

export default Task;
