import './style.scss';
import { source } from './components/source/source';
import {
  sortName, sortNameRevers, sortYear, sortYearRevers,
} from './components/sort/sort';
import Slider from './components/slider/slider';
import { Filter, IFilter } from './components/filters/filter';
import { createListProduct } from './components/list/list';
import { search } from './components/search/search';
import { addEvent, changeBasket } from './components/event/event';

let yearValue = [2009, 2022];
let priceValue = [0, 40000];
let hullValue = [130, 330];
let colorValue: string[] = [];
let nameValue: string[] = [];
let formFactorValue: string[] = [];
let сoolerValue: string[] = [];
let sort = 'Sorting';
let basket: number[] = [];
const year = document.querySelector('.slider-year') as HTMLInputElement;
const price = document.querySelector('.slider-price') as HTMLInputElement;
const hull = document.querySelector('.slider-hull-width') as HTMLInputElement;
const slider = new Slider(year, price, hull);
function setLocalStorage() {
  localStorage.setItem('yearValue', JSON.stringify(yearValue));
  localStorage.setItem('priceValue', JSON.stringify(priceValue));
  localStorage.setItem('hullValue', JSON.stringify(hullValue));
  localStorage.setItem('colorValue', JSON.stringify(colorValue));
  localStorage.setItem('nameValue', JSON.stringify(nameValue));
  localStorage.setItem('formFactorValue', JSON.stringify(formFactorValue));
  localStorage.setItem('сoolerValue', JSON.stringify(сoolerValue));
  localStorage.setItem('sort', sort);
  localStorage.setItem('basket', JSON.stringify(basket));
}
window.addEventListener('beforeunload', setLocalStorage);

function loadFiltersSort(
  yearValueFilter: number[],
  priceValueFilter: number[],
  hullValueFilter: number[],
  colorValueFilter: string[],
  nameValueFilter: string[],
  formFactorValueFilter: string[],
  сoolerValueFilter: string[],
  sortFilter: string,
  basketFilter: number[],
) {
  slider.setYear(yearValueFilter);
  slider.setPrice(priceValueFilter);
  slider.setHull(hullValueFilter);

  const inputColor = document.querySelectorAll('.input-color');
  inputColor.forEach((element) => {
    colorValueFilter.forEach((value) => {
      if (element.classList.contains(value)) {
        (element as HTMLInputElement).checked = true;
      }
    });
  });
  const nameFilter = document.querySelectorAll('.name');
  nameFilter.forEach((element) => {
    nameValueFilter.forEach((value) => {
      if (element.innerHTML === value) {
        (element as HTMLElement).classList.add('button-filter-active');
      }
    });
  });
  const formFilter = document.querySelectorAll('.form-factor');
  formFilter.forEach((element) => {
    formFactorValueFilter.forEach((value) => {
      if (element.innerHTML === value) {
        (element as HTMLElement).classList.add('button-filter-active');
      }
    });
  });
  const buttonCooler = document.querySelectorAll('.external-cooler');
  buttonCooler.forEach((element) => {
    сoolerValueFilter.forEach((value) => {
      if ((element as HTMLInputElement).value === value) {
        (element as HTMLInputElement).checked = true;
      }
    });
  });

  const array = new Filter(
    source,
    yearValueFilter,
    priceValueFilter,
    hullValueFilter,
    colorValueFilter,
    nameValueFilter,
    formFactorValueFilter,
    сoolerValueFilter,
  );
  let arrayFiltered = array.filterYear() as IFilter[];
  arrayFiltered = array.filterPrice(arrayFiltered) as IFilter[];
  arrayFiltered = array.filterHullWidth(arrayFiltered) as IFilter[];
  arrayFiltered = array.filterColor(arrayFiltered) as IFilter[];
  arrayFiltered = array.filterName(arrayFiltered) as IFilter[];
  arrayFiltered = array.filterFormFactor(arrayFiltered) as IFilter[];
  arrayFiltered = array.filterExternalCoolers(arrayFiltered) as IFilter[];
  arrayFiltered = search(arrayFiltered) as IFilter[];
  createListProduct(arrayFiltered);
  if (sortFilter !== 'Sorting') {
    const sortTitel = document.querySelector('.dropdown-toggle') as HTMLElement;
    sortTitel.innerHTML = sort;
    switch (sortFilter) {
      case 'Title: A-Z':
        sortName();
        break;
      case 'Title: Z-A':
        sortNameRevers();
        break;
      case 'Year: ascending':
        sortYear();
        break;
      case 'Year: descending':
        sortYearRevers();
        break;
      default:
        break;
    }
  }
  addEvent();
  basket = changeBasket();

  basketFilter.forEach((value) => {
    const elemProducts = document.querySelector(
      `.cell-products[data-id="${value}"]`,
    );
    if (elemProducts) {
      elemProducts.classList.add('active-product');
    }
  });

  const numberGoods = document.querySelectorAll('.active-product');
  const goods = document.querySelector('.number-goods') as HTMLElement;
  goods.innerHTML = String(numberGoods.length);
}
function getLocalStorage() {
  if (localStorage.getItem('yearValue')) {
    yearValue = JSON.parse(localStorage.getItem('yearValue') as string);
  }
  if (localStorage.getItem('priceValue')) {
    priceValue = JSON.parse(localStorage.getItem('priceValue') as string);
  }
  if (localStorage.getItem('hullValue')) {
    hullValue = JSON.parse(localStorage.getItem('hullValue') as string);
  }
  if (localStorage.getItem('colorValue')) {
    colorValue = JSON.parse(localStorage.getItem('colorValue') as string);
  }
  if (localStorage.getItem('nameValue')) {
    nameValue = JSON.parse(localStorage.getItem('nameValue') as string);
  }
  if (localStorage.getItem('formFactorValue')) {
    formFactorValue = JSON.parse(
      localStorage.getItem('formFactorValue') as string,
    );
  }
  if (localStorage.getItem('сoolerValue')) {
    сoolerValue = JSON.parse(localStorage.getItem('сoolerValue') as string);
  }
  if (localStorage.getItem('sort')) {
    sort = localStorage.getItem('sort') as string;
  }
  if (localStorage.getItem('basket')) {
    basket = JSON.parse(localStorage.getItem('basket') as string);
  }
  loadFiltersSort(
    yearValue,
    priceValue,
    hullValue,
    colorValue,
    nameValue,
    formFactorValue,
    сoolerValue,
    sort,
    basket,
  );
}
window.addEventListener('load', getLocalStorage);
