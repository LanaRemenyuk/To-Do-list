const useDialogHandlers = (setState) => {
  // обновление стейта при открытии страницы задачи
  const handleOpenTaskPage = (taskId) => {
    setState((prevState) => ({
      ...prevState,
      createTaskPage: true,
      taskId: taskId
    }));
  };
  const handleCloseTaskPage = () => {
    setState((prevState) => ({ ...prevState, createTaskPage: false }));
  };

  // обновление стейта при открытии страницы обновления задачи
  const handleOpenUpdateTaskPage = () => {
    setState((prevState) => ({ ...prevState, updateTaskPage: true }));
  };
  const handleCloseUpdateTaskPage = () => {
    setState((prevState) => ({ ...prevState, updateTaskPage: false }));
  };

  return {
    handleOpenTaskPage,
    handleCloseTaskPage,
    handleOpenUpdateTaskPage,
    handleCloseUpdateTaskPage
  };
};

export default useDialogHandlers;
