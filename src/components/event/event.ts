import { activeFilter } from '../active-components/activeFilter';
import Slider from '../slider/slider';
import { addBasket } from '../basket/basket';

export function changeBasket(): number[] {
  const idGoods = document.querySelectorAll('.active-product');
  const list: number[] = [];
  idGoods.forEach((element) => {
    const id = Number(element.getAttribute('data-id'));
    list.push(id);
  });
  return list.slice();
}

function cleanSearch(): void {
  const searchCleanInput = document.querySelector('.form-control') as HTMLInputElement;
  searchCleanInput.value = '';
  const el = null;
  activeFilter(el);
}

export function addEvent(): void {
  const el = null;
  const year = document.querySelector('.slider-year') as HTMLInputElement;
  const price = document.querySelector('.slider-price') as HTMLInputElement;
  const hull = document.querySelector('.slider-hull-width') as HTMLInputElement;
  const slider = new Slider(year, price, hull);
  const sortNameButton = document.querySelector('.sort-name') as HTMLElement;
  sortNameButton.addEventListener('click', activeFilter);
  const sortNameRevButton = document.querySelector(
    '.sort-name-revers',
  ) as HTMLElement;
  sortNameRevButton.addEventListener('click', activeFilter);
  const sortYearButton = document.querySelector('.sort-year') as HTMLElement;
  sortYearButton.addEventListener('click', activeFilter);
  const sortYearRevButton = document.querySelector(
    '.sort-year-revers',
  ) as HTMLElement;
  sortYearRevButton.addEventListener('click', activeFilter);
  const slidersButton = document.querySelectorAll('.noUi-handle');
  slidersButton.forEach((element) => {
    element.addEventListener('click', () => {
      slider.sliderYearObject.on('set', () => {
        activeFilter(el);
      });
      slider.filterPriceObject.on('set', () => {
        activeFilter(el);
      });
      slider.filterHullObject.on('set', () => {
        activeFilter(el);
      });
    });
  });
  const inputColor = document.querySelectorAll('.input-color');
  inputColor.forEach((element) => {
    element.addEventListener('click', activeFilter);
  });
  const buttonFilter = document.querySelectorAll('.button-filter');
  buttonFilter.forEach((element) => {
    element.addEventListener('click', activeFilter);
  });
  const buttonCooler = document.querySelectorAll('.external-cooler');
  buttonCooler.forEach((element) => {
    element.addEventListener('click', activeFilter);
  });
  const searchInput = document.querySelector(
    '.form-control',
  ) as HTMLInputElement;
  searchInput.addEventListener('input', activeFilter);
  const searchCleanInput = document.querySelector(
    '.clean-search',
  ) as HTMLInputElement;
  searchCleanInput.addEventListener('click', cleanSearch);
  const resetFilters = document.querySelectorAll('.btn-outline-secondary');
  resetFilters.forEach((element) => {
    element.addEventListener('click', activeFilter);
  });
  const cellProducts = document.querySelectorAll('.cell-products');
  cellProducts.forEach((element) => {
    element.addEventListener('click', () => {
      addBasket(el);
      changeBasket();
    });
  });
}
