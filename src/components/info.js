import {createElement} from '../utils';

export class Info {
  constructor({
    endPoint,
    startPoint,
  }) {
    this._endPoint = endPoint;
    this._startPoint = startPoint;
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
    return `<div class="trip-info__main">
      <h1 class="trip-info__title">${this._startPoint} &mdash; ... &mdash; ${this._endPoint}</h1>
    </div>`;
  }
}
