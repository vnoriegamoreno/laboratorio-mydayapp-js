import {
  mainElementController,
  footerElementController,
  taskElementController,
  newTodoInputElementController,
  todoElementController,
  completedBtnElementController,
} from "./dom-manipulation";
import { existTasksInTodoList, refreshItemsLength } from "./utils";

export const DOM = {
  controllers: {
    mainEl: mainElementController,
    footerEl: footerElementController,
    taskItemEl: taskElementController,
    newTodoInputEl: newTodoInputElementController,
    todoListEl: todoElementController,
    completedBtnEl: completedBtnElementController,
  },
};

export const watcher = { existTasksInTodoList, refreshItemsLength };
