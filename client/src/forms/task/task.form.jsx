// components
import TextFieldStyled from "@components/common/inputs/text-field-styled";
// components
import { FieldsContainer, Form } from "@components/common/forms/styled";
// utils
import { capitalizeFirstLetter } from "@utils/data/capitalize-first-letter";
import { capitalizeAllFirstLetters } from "@utils/data/capitalize-all-first-letters";

const TaskForm = ({ data, register, errors, watch }) => {
  return (
    <Form>
      <FieldsContainer sx={{ flexDirection: "column" }}>
        <TextFieldStyled
          register={register}
          label="Имя пользователя"
          name="userName"
          required={true}
          value={capitalizeAllFirstLetters(data?.userName)}
          errors={errors?.userName}
          multiline={true}
          inputProps={{ maxLength: 50 }}
        />
        <TextFieldStyled
          register={register}
          label="Почта пользователя"
          name="userEmail"
          required={true}
          errors={errors?.userEmail}
          multiline={true}
          inputProps={{ maxLength: 50 }}
        />
        <TextFieldStyled
          register={register}
          label="Текст задачи"
          name="text"
          required={true}
          value={capitalizeFirstLetter(data?.text)}
          errors={errors?.text}
          rows="2"
          multiline={true}
          inputProps={{ maxLength: 350 }}
        />
      </FieldsContainer>
    </Form>
  );
};

export default TaskForm;
