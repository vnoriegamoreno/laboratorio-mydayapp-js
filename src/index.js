import "./css/base.css";
import {
  mainEl,
  footerEl,
  taskEl,
  newTodoInputEl,
} from "./js/utils/dom-elements";
import newTaskItemFactory from "./js/factory/new-task-item.factory";

const existTasksInTodoList = () => {
  if (!taskEl.hasElements()) {
    mainEl.hide();
    footerEl.hide();
  } else {
    mainEl.show();
    footerEl.show();
  }
};

newTodoInputEl.getElement().addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const taskTitle = newTodoInputEl.getValue();
    if (taskTitle) {
      newTaskItemFactory.addNewTodoTaskItem(taskTitle);
      newTodoInputEl.setValue("");
      existTasksInTodoList();
    } else {
      console.error("You can not create a task with empty title!");
    }
  }
});

(function () {
  existTasksInTodoList();
})();
