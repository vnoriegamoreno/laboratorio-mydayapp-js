import { DOM } from "./";

export const existTasksInTodoList = () => {
  if (!DOM.controllers.taskItem.hasElements()) {
    DOM.controllers.main.hide();
    DOM.controllers.footer.hide();
  } else {
    DOM.controllers.main.show();
    DOM.controllers.footer.show();
  }
};
