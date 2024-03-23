import express from "express";
import { check, validationResult } from "express-validator";
import User from "../models/User.js";

const router = express.Router({ mergeParams: true });

// логин
router.post("/signInWithPassword", [
  check("email", "Email некорректный").isEmail(),
  check("password", "Пароль не может быть пустым").exists().trim(),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: "INVALID_DATA",
            code: 400
          }
        });
      }

      const { email, password } = req.body;

      const existingUser = await User.findOne({ where: { email } });

      if (!existingUser) {
        return res.status(400).send({
          error: {
            message: "Неправильные логин или пароль",
            code: 400
          }
        });
      }

      const isPasswordEqual = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (!isPasswordEqual) {
        return res.status(400).send({
          error: {
            message: "Неправильные логин или пароль",
            code: 400
          }
        });
      }

      res.status(200).send({ userId: existingUser._id });
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже"
      });
    }
  }
]);

export default router;
