import ButtonStyled from "@components/common/buttons/button-styled.button";
import { ContainerStyled } from "@components/common/container/container-styled";
import HeaderLayout from "@components/common/page-headers/header-layout";
import { PostsMockData } from "@data/posts.mock";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const Main = () => {
  const tasksList = PostsMockData;
  console.log("tasksList", tasksList);
  return (
    <ContainerStyled>
      <ButtonStyled
        title="Добавить задачу"
        color="success"
        // onClick={() => ()}
        icon={<AddCircleOutlineOutlinedIcon />}
      />
    </ContainerStyled>
  );
};

export default Main;
