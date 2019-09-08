import {AbstractComponent} from './abstract-component';

export class Info extends AbstractComponent {
  constructor({
    endPoint,
    startPoint,
  }) {
    super();
    this._endPoint = endPoint;
    this._startPoint = startPoint;
  }

  getTemplate() {
    return `<div class="trip-info__main">
      <h1 class="trip-info__title">${this._startPoint} &mdash; ... &mdash; ${this._endPoint}</h1>
    </div>`;
  }
}
