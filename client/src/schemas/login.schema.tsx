import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Введите email корректно")
    .required("Логин обязателен для заполнения"),
  password: yup
    .string()
    .min(8, "Слишком короткий пароль - введите не менее 8 символов")
    .required("Пароль обязателен для заполнения")
});
