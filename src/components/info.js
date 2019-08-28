import {createElement} from '../utils';

export class Info {
  constructor({
    endPoint,
    startPoint,
  }) {
    this._endPoint = endPoint;
    this._startPoint = startPoint;
  }
  
  getTemplate() {
    return `<div class="trip-info__main">
      <h1 class="trip-info__title">${startPoint} &mdash; ... &mdash; ${endPoint}</h1>
    </div>`;
  }
}
