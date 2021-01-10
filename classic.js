const refs = {
  controls: document.querySelector("#tabs-1 [data-controls]"),
  panes: document.querySelector("#tabs-1 [data-panes]"),
};

refs.controls.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "A") {
    return;
  }
  const currentActiveSelector = refs.controls.querySelector(
    ".controls__item--active"
  );
  if (currentActiveSelector) {
    currentActiveSelector.classList.remove("controls__item--active");
  }

  const currentActiveSelectorPane = refs.panes.querySelector(".pane--active");
  if (currentActiveSelectorPane) {
    currentActiveSelectorPane.classList.remove("pane--active");
  }

  event.target.classList.add("controls__item--active");

  const getPaneId = event.target.getAttribute("href").slice(1);
  const pane = refs.panes.querySelector(`#${getPaneId}`);
  pane.classList.add("pane--active");
});
