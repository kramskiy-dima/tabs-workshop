class Tabs {
  constructor({ rootSelector, controlItemActive, panesItemActive, activeTab }) {
    this._refs = this._getRefs(rootSelector);
    this._controlItemActive = controlItemActive;
    this._panesItemActive = panesItemActive;
    this._activeTab = activeTab - 1;
    this._eventListener();
    this._currentActiveTab();
  }

  _getRefs(root) {
    const refs = {};

    refs.controls = document.querySelector(`${root} [data-controls]`);
    refs.panes = document.querySelector(`${root} [data-panes]`);

    return refs;
  }

  _eventListener() {
    this._refs.controls.addEventListener("click", (el) => {
      el.preventDefault();
      if (el.target.nodeName !== "A") {
        return;
      }

      this._removeActiveControl();
      this._addActiveControl(el.target);
      this._changePaneActive();

      const pane = this._refs.panes.querySelector(
        `#${this._getIdPane(el.target)}`
      );
      this._panesItem(pane);
    });
  }

  _currentActiveTab() {
    const tabs = this._refs.controls.querySelectorAll("a");
    this._addActiveControl(tabs[this._activeTab]);
    const tabsId = this._getIdPane(tabs[this._activeTab]);
    const currenTabs = this._refs.panes.querySelector(`#${tabsId}`);
    this._panesItem(currenTabs);
  }

  _addActiveControl(element) {
    element.classList.add(this._controlItemActive);
  }
  _removeActiveControl() {
    const currentActiveSelector = this._refs.controls.querySelector(
      `.${this._controlItemActive}`
    );
    if (!currentActiveSelector) {
      return;
    }
    currentActiveSelector.classList.remove(this._controlItemActive);
  }
  _getIdPane(element) {
    return element.getAttribute("href").slice(1);
  }
  _panesItem(item) {
    item.classList.add(this._panesItemActive);
  }
  _changePaneActive() {
    const currentActiveSelector = this._refs.panes.querySelector(
      `.${this._panesItemActive}`
    );
    if (!currentActiveSelector) {
      return;
    }
    currentActiveSelector.classList.remove(this._panesItemActive);
  }
}

const tabs1 = new Tabs({
  rootSelector: "#tabs-1",
  controlItemActive: "controls__item--active",
  panesItemActive: "pane--active",
  activeTab: 1,
});
console.log(tabs1);

const tabs2 = new Tabs({
  rootSelector: "#tabs-2",
  controlItemActive: "controls__item--active",
  panesItemActive: "pane--active",
  activeTab: 3,
});

console.log(tabs2);
