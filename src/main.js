import {makeCardEditTemplate} from '../src/components/card-edit';
import {makeCardTemplate} from '../src/components/card';
import {makeFilterTemplate} from '../src/components/filter';
import {makeMenuTemplate} from '../src/components/menu';
import {makeInfoTemplate} from '../src/components/info';
import {getTravelPoint} from './data';

const CARDS_COUNT = 3;

const renderComponent = (parent, child, place) => {
  parent.insertAdjacentHTML(place, child);
};
const mainContainer = document.querySelector(`.page-body`);
const infoContainer = mainContainer.querySelector(`.trip-main__trip-info`);
const menuContainer = mainContainer.querySelector(`.trip-main__trip-controls`);
const cardEditContainer = mainContainer.querySelector(`.page-body__container .trip-events`);

const renderMockComponents = () => {
  renderComponent(infoContainer, makeInfoTemplate(), `afterbegin`);
  renderComponent(menuContainer, makeMenuTemplate(),`beforeend`);
  renderComponent(menuContainer, makeFilterTemplate(),`beforeend`);
  renderComponent(cardEditContainer, makeCardEditTemplate(),`afterbegin`);
  for (let i = 1; i <= CARDS_COUNT; i++) {
    renderComponent(cardEditContainer, makeCardTemplate(getTravelPoint()),`beforeend`);
  }
};

renderMockComponents();
