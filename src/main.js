import {makeCardEditTemplate} from '../src/components/card-edit'; //+
import {makeCardTemplate} from '../src/components/card';
import {makeFilterTemplate} from '../src/components/filter'; //+
import {makeMenuTemplate} from '../src/components/menu'; //+
import {makeInfoTemplate} from '../src/components/info';

const CARDS_COUNT = 3;

const renderComponent = (parent, child) => {
  parent.insertAdjacentHTML(`beforeend`, child);
};

const mainContainer = document.querySelector(`.page-body`);
const infoContainer = mainContainer.querySelector(`.trip-info__main`);
const menuContainer = mainContainer.querySelector(`.trip-main__trip-controls`);
const filterContainer = mainContainer.querySelector(`.trip-events__trip-sort`);
const cardEditContainer = mainContainer.querySelector(`.trip-events__item`);
const cardTasksContainer = mainContainer.querySelector(`.trip-days`);

const renderMockComponents = () => {
  renderComponent(infoContainer, makeInfoTemplate());
  renderComponent(menuContainer, makeMenuTemplate());
  renderComponent(filterContainer, makeFilterTemplate());
  renderComponent(cardEditContainer, makeCardEditTemplate());

  for (let i = 1; i <= CARDS_COUNT; i++) {
    renderComponent(cardTasksContainer, makeCardTemplate());
  }

};

renderMockComponents();
