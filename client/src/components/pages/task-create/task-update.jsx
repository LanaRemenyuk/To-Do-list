import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// components
import SuccessCancelFormButtons from "@components/common/buttons/success-cancel-form-buttons";
import HeaderWithCloseButton from "@components/common/page-headers/header-with-close-button";
import LoaderFullWindow from "@components/common/loader/loader-full-window";
// forms
import TaskForm from "@forms/task.form";
// schemas
import { taskSchema } from "@schemas/task.shema";
// store
import { createTask, getTaskById, updateTask } from "@store/task/tasks.store";

const TaskUpdate = ({ onClose, taskId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const task = useSelector(getTaskById(taskId));
  const taskText = task?.text;

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: task,
    mode: "onSubmit",
    resolver: yupResolver(taskSchema)
  });

  const data = watch();

  const isTextUpdated = () => {
    if (taskText.trim() !== data.text.trim()) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = () => {
    setIsLoading(true);

    const newData = {
      ...data,
      userName: data.userName.trim(),
      text: data.text.trim(),
      isAdminUpdated: isTextUpdated()
    };

    dispatch(updateTask(newData))
      .then(() => {
        onClose();
        toast.success("Задача успешно обновлена!");
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <HeaderWithCloseButton
        title="Обновить выбранную задачу"
        onClose={onClose}
      />
      <TaskForm
        data={data}
        register={register}
        errors={errors}
        watch={watch}
        setValue={setValue}
        isUpdate={true}
      />
      <SuccessCancelFormButtons
        onSuccess={handleSubmit(onSubmit)}
        onCancel={onClose}
      />
      <LoaderFullWindow isLoading={isLoading} />
    </>
  );
};

export default TaskUpdate;
