import {AbstractComponent} from './abstract-component';

export class Menu extends AbstractComponent {
  constructor({
    titles,
  }) {
    super();
    this._titles = titles;
  }

  getTemplate() {
    return `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${this._titles.map((title) => `<a class="trip-tabs__btn" href="#">${title}</a>`).join(``)}
    </nav>`;
  }
}
