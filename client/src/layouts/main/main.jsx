import { Box } from "@mui/material";
// icons
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
// components
import ButtonStyled from "@components/common/buttons/button-styled.button";
import { ContainerStyled } from "@components/common/container/container-styled";
import HeaderLayout from "@components/common/page-headers/header-layout";
import Task from "@components/common/task/task";
import { PostsMockData } from "@data/posts.mock";

const Main = () => {
  const tasksList = PostsMockData;
  console.log("tasksList", tasksList);

  return (
    <ContainerStyled>
      <ButtonStyled
        title="Добавить задачу"
        color="success"
        // onClick={() => ()}
        margin="0 0 16px 0"
        icon={<AddCircleOutlineOutlinedIcon />}
      />

      {tasksList?.map((task) => (
        <Task task={task} key={task._id}></Task>
      ))}
    </ContainerStyled>
  );
};

export default Main;
