export const mainEl = {
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

export const footerEl = {
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

export const todoEl = {
  getElement() {
    return document.querySelector(".todo-list");
  },
};

export const taskEl = {
  getElement() {
    return todoEl.getElement().querySelectorAll("li");
  },
  hasElements() {
    return todoEl.getElement().querySelectorAll("li").length;
  },
};

export const newTodoInputEl = {
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
