import {createElement} from '../utils';

export class Menu {
  constructor({
    titles,
  }) {
    this._titles = titles;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${this._titles.map((title) => `<a class="trip-tabs__btn" href="#">${title}</a>`).join(``)}
    </nav>`;
  }
}
