import {
  mainElementController,
  footerElementController,
  taskElementController,
  newTodoInputElementController,
  todoElementController,
} from "./dom-manipulation";
import { existTasksInTodoList } from "./utils";

export const DOM = {
  controllers: {
    main: mainElementController,
    footer: footerElementController,
    taskItem: taskElementController,
    newTodoInput: newTodoInputElementController,
    todoList: todoElementController,
  },
};

export const watchers = { existTasksInTodoList };
