import {makeCardEditTemplate} from '../src/components/card-edit';
import {makeCardTemplate} from '../src/components/card';
import {makeFilterTemplate} from '../src/components/filter';
import {makeMenuTemplate} from '../src/components/menu';
import {makeInfoTemplate} from '../src/components/info';
import {getTravelPoint, getMenu, getFilter} from './data';

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
  renderComponent(menuContainer, makeMenuTemplate(getMenu()),`beforeend`);
  renderComponent(menuContainer, makeFilterTemplate(getFilter()),`beforeend`);
  renderComponent(cardEditContainer, makeCardEditTemplate(getTravelPoint()),`afterbegin`);

  const tripArray = new Array(CARDS_COUNT).fill(``).map(item =>
    makeCardTemplate(getTravelPoint())
  ).join(``)

  renderComponent(cardEditContainer, tripArray,`beforeend`);

  const sortTripArray = cardEditContainer.querySelectorAll(`.trip-days`)
    // .sort((a, b) => {
    //   a.querySelector(`.day__counter`).innerHTML - b.querySelector(`.day__counter`).innerHTML
    // })

  let price = 0
  sortTripArray.forEach((item) => {
   const pointPrice = parseInt(item.querySelector(`.event__price-value`).innerHTML, 10)
    price = price + pointPrice
    const extraPriceArray = item.querySelectorAll(`.event__offer-title`)
    extraPriceArray.forEach((subItem) => {
      let extra = parseInt(subItem.innerHTML.match(/\d+/)[0], 10)
      price = price + extra
    })
  })

  mainContainer.querySelector(`.trip-info__cost-value`).innerHTML = price
};

renderMockComponents();
