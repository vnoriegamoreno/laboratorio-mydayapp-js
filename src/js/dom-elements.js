export const mainEl = {
  el: document.querySelector(".main"),
  hide() {
    this.el.setAttribute("class", "main hidden");
  },
  show() {
    this.el.setAttribute("class", "main");
  },
};

export const footerEl = {
  el: document.querySelector(".footer"),
  hide() {
    this.el.setAttribute("class", "footer hidden");
  },
  show() {
    this.el.setAttribute("class", "footer");
  },
};

export const todoEl = {
  el: document.querySelector(".todo-list"),
};

export const taskEl = {
  el: todoEl.el.querySelectorAll("li"),
  hasElements() {
    return this.el.length;
  },
};
