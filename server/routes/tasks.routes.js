import express from "express";
import Task from "../models/Task.js";

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.findAll();

    if (!tasks) {
      return res.status(200).send([]);
    }

    return res.status(200).send(tasks);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка, попробуйте позже"
    });
  }
});

router.post("/create", async (req, res) => {
  try {
    const newTask = await Task.create(req.body);

    res.status(201).send(newTask);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка, попробуйте позже"
    });
  }
});

router.patch("/:taskId?/edit", async (req, res) => {
  try {
    const { taskId } = req.params;

    if (!taskId) {
      return res.status(400).json({
        message: "Необходимо указать идентификатор задачи (taskId)."
      });
    }

    const existingTask = await Task.findByPk(taskId);

    if (!existingTask) {
      return res.status(404).json({
        message: "Задача не найдена."
      });
    }

    const updatedTask = await existingTask.update(req.body);
    res.send(updatedTask);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка, попробуйте позже"
    });
  }
});

router.delete("/:taskId?", async (req, res) => {
  try {
    const { taskId } = req.params;
    if (!taskId) {
      return res.status(400).json({
        message: "Необходимо указать идентификатор объекта (objectId)."
      });
    }

    const deletedTask = await Task.findByPk(taskId);

    if (!deletedTask) {
      return res.status(404).json({
        message: "Объект не найден."
      });
    }

    await deletedTask.destroy();

    res.status(204).send();
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка, попробуйте позже"
    });
  }
});

export default router;
