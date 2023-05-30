import { config } from "./config.js";
import { addRandomLetters } from "./addRandomLetters.js";

// generate random letters initially for each element
document.querySelectorAll(config.elementWrapperClass).forEach((item) => {
  addRandomLetters(item);
});
// generate random letters initially for each element

// observe elements on data-active attribute change to active

const observer = (mutList, observer) => {
  const elementRef = mutList[0].target;
  if (elementRef.intervalId) {
    clearInterval(elementRef.intervalId);
  }
  if (mutList[0].target) {
    elementRef.intervalId = setInterval(function () {
      if (!mutList[0].target.getAttribute("data-active")) {
        clearInterval(elementRef.intervalId);
      }
      if (mutList[0].target.getAttribute("data-active") == "active") {
        addRandomLetters(mutList[0].target);
      }
    }, config.timeout);
  }
};

const mutationObserver = new MutationObserver(observer);
document.querySelectorAll(config.elementWrapperClass).forEach((item) => {
  mutationObserver.observe(item, {
    attributes: true,
  });
});
// observe elements on data-active attribute change to active

// adding click to each container to create demo functionality

const container = document.querySelectorAll(config.elementWrapperClass);
container.forEach((item) => {
  item.addEventListener("click", (e) => {
    const wrapperRef = e.target.parentNode;
    if (wrapperRef.getAttribute("data-active") == "active") {
      wrapperRef.setAttribute("data-active", false);
      return;
    }
    wrapperRef.setAttribute("data-active", "active");
  });
});
// adding click to each container to create demo functionality
