import "./css/base.css";
import { mainEl, footerEl, taskEl } from "./js/dom-elements";

const todoHasElements = () => {
  if (!taskEl.hasElements()) {
    mainEl.hide();
    footerEl.hide();
  } else {
    mainEl.show();
    footerEl.show();
  }
};

(function () {
  todoHasElements();
})();
