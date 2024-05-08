import "./css/base.css";
import { DOM, watchers } from "./js/utils";
import {
  taskStatusHandler,
  editTaskViewModeHandler,
  editTaskTitleHandler,
} from "./js/handlers/task.handlers";
import newTaskItemFactory from "./js/factory/new-task-item.factory";

DOM.controllers.newTodoInput.getElement().addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const taskTitle = DOM.controllers.newTodoInput.getValue();
    if (taskTitle) {
      newTaskItemFactory.addNewTodoTaskItem(taskTitle);
      DOM.controllers.newTodoInput.setValue("");
      watchers.existTasksInTodoList();
    } else {
      console.error("You can not create a task with empty title!");
    }
  }
});

DOM.controllers.todoList.getElement().addEventListener("click", (e) => {
  const taskItemEl = e.target.parentNode.parentNode;
  taskStatusHandler(e, taskItemEl);
  editTaskViewModeHandler(e, taskItemEl);
});

DOM.controllers.todoList.getElement().addEventListener("keydown", (e) => {
  editTaskTitleHandler(e);
});

(function main() {
  watchers.existTasksInTodoList();
})();
