export const mainElementController = {
  getElement() {
    return document.querySelector(".main");
  },
  hide() {
    this.getElement().setAttribute("class", "main hidden");
  },
  show() {
    this.getElement().setAttribute("class", "main");
  },
};

export const footerElementController = {
  getElement() {
    return document.querySelector(".footer");
  },
  hide() {
    this.getElement().setAttribute("class", "footer hidden");
  },
  show() {
    this.getElement().setAttribute("class", "footer");
  },
};

export const todoElementController = {
  getElement() {
    return document.querySelector(".todo-list");
  },
};

export const taskElementController = {
  getElement() {
    return todoElementController.getElement().querySelectorAll("li");
  },
  hasElements() {
    return todoElementController.getElement().querySelectorAll("li").length;
  },
  getAllElements() {
    const allEls = [];
    todoElementController
      .getElement()
      .querySelectorAll("li")
      .forEach((el) => allEls.push(el));
    return allEls;
  },
  getPendingElements() {
    const pendingEls = [];
    todoElementController
      .getElement()
      .querySelectorAll("li")
      .forEach((el) => {
        if (
          el.getAttribute("class") !== "completed" ||
          !el.getAttribute("class")
        ) {
          pendingEls.push(el);
        }
      });
    return pendingEls;
  },
  getCompletedElements() {
    const completedEls = [];
    todoElementController
      .getElement()
      .querySelectorAll("li")
      .forEach((el) => {
        if (el.getAttribute("class") === "completed") {
          completedEls.push(el);
        }
      });
    return completedEls;
  },
};

export const newTodoInputElementController = {
  getElement() {
    return document.querySelector(".new-todo");
  },
  getValue() {
    return this.getElement().value.trim();
  },
  setValue(value) {
    this.getElement().value = value;
  },
};

export const completedBtnElementController = {
  getElement() {
    return document.querySelector(".clear-completed");
  },
  clearCompleted() {
    const todoEl = todoElementController.getElement();
    const pendingEls = taskElementController.getPendingElements();
    todoEl.innerHTML = "";
    if (pendingEls.length) {
      pendingEls.forEach((task) => todoEl.append(task));
    }
  },
};
