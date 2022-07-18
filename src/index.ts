import './style.scss';
import { source } from './components/source/source';
import { addBasket } from './components/basket/basket';
import {
  sortName, sortNameRevers, sortYear, sortYearRevers,
} from './components/sort/sort';
import Slider from './components/slider/slider';
import { Filter, IFilter } from './components/filters/filter';
import { createListProduct } from './components/list/list';
import { search } from './components/search/search';

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

function changeBasket() {
  const idGoods = document.querySelectorAll('.active-product');
  const list: number[] = [];
  idGoods.forEach((element) => {
    const id = Number(element.getAttribute('data-id'));
    list.push(id);
  });
  basket = list.slice();
}

function cleanSearch(): void {
  const searchCleanInput = document.querySelector('.form-control') as HTMLInputElement;
  searchCleanInput.value = '';
  activeFilters;
}

export function activeFilters(event: Event): void {
  const target = event?.target as HTMLElement;
  if (!target.classList.contains('reset')) {
    if (target.classList.contains('button-filter')) {
      target.classList.toggle('button-filter-active');
    }
    if (target.classList.contains('dropdown-item')) {
      switch (target.innerHTML) {
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
    yearValue = slider.valueYear as Array<number>;
    priceValue = slider.valuePrice as Array<number>;
    hullValue = slider.valueHull as Array<number>;
    const inputColor = Array.from(
      document.querySelectorAll('.input-color:checked'),
    );
    colorValue = inputColor.map((element) => (element as HTMLInputElement).value);
    const buttonName = Array.from(
      document.querySelectorAll('.button-filter-active.name'),
    );
    nameValue = buttonName.map((element) => (element as HTMLInputElement).innerHTML);
    const buttonFormFactor = Array.from(
      document.querySelectorAll('.button-filter-active.form-factor'),
    );
    formFactorValue = buttonFormFactor.map((element) => (element as HTMLInputElement).innerHTML);
    const buttonCooler = Array.from(
      document.querySelectorAll('.external-cooler:checked'),
    );
    сoolerValue = buttonCooler.map((element) => (element as HTMLInputElement).value);
    const array = new Filter(
      source,
      yearValue,
      priceValue,
      hullValue,
      colorValue,
      nameValue,
      formFactorValue,
      сoolerValue,
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
    if (!target.classList.contains('reset-sort')) {
      const sortTitel = document.querySelector(
        '.dropdown-toggle',
      ) as HTMLElement;
      sort = sortTitel.innerHTML;
      switch (sort) {
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
    } else {
      const sortTitel = document.querySelector(
        '.dropdown-toggle',
      ) as HTMLElement;
      sortTitel.innerHTML = 'Sorting';
      sort = sortTitel.innerHTML;
    }
  } else {
    slider.reset();
    const inputColor = Array.from(
      document.querySelectorAll('.input-color:checked'),
    );
    inputColor.forEach((element) => {
      (element as HTMLInputElement).checked = false;
    });
    const buttonFilter = document.querySelectorAll('.button-filter');
    buttonFilter.forEach((element) => {
      (element as HTMLElement).classList.remove('button-filter-active');
    });
    const buttonCooler = document.querySelectorAll('.external-cooler');
    buttonCooler.forEach((element) => {
      (element as HTMLInputElement).checked = false;
    });
    createListProduct(source);
    const sortTitel = document.querySelector('.dropdown-toggle') as HTMLElement;
    sort = sortTitel.innerHTML;
    switch (sort) {
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
}

function addEvent() {
  const sortNameButton = document.querySelector('.sort-name') as HTMLElement;
  sortNameButton.addEventListener('click', activeFilters);
  const sortNameRevButton = document.querySelector(
    '.sort-name-revers',
  ) as HTMLElement;
  sortNameRevButton.addEventListener('click', activeFilters);
  const sortYearButton = document.querySelector('.sort-year') as HTMLElement;
  sortYearButton.addEventListener('click', activeFilters);
  const sortYearRevButton = document.querySelector(
    '.sort-year-revers',
  ) as HTMLElement;
  sortYearRevButton.addEventListener('click', activeFilters);
  const slidersButton = document.querySelectorAll('.noUi-handle');
  slidersButton.forEach((element) => {
    element.addEventListener('click', () => {
      slider.sliderYearObject.on('set', () => {
        activeFilters;
      });
      slider.filterPriceObject.on('set', () => {
        activeFilters;
      });
      slider.filterHullObject.on('set', () => {
        activeFilters;
      });
    });
  });
  const inputColor = document.querySelectorAll('.input-color');
  inputColor.forEach((element) => {
    element.addEventListener('click', activeFilters);
  });
  const buttonFilter = document.querySelectorAll('.button-filter');
  buttonFilter.forEach((element) => {
    element.addEventListener('click', activeFilters);
  });
  const buttonCooler = document.querySelectorAll('.external-cooler');
  buttonCooler.forEach((element) => {
    element.addEventListener('click', activeFilters);
  });
  const searchInput = document.querySelector(
    '.form-control',
  ) as HTMLInputElement;
  searchInput.addEventListener('input', activeFilters);
  const searchCleanInput = document.querySelector(
    '.clean-search',
  ) as HTMLInputElement;
  searchCleanInput.addEventListener('click', cleanSearch);
  const resetFilters = document.querySelectorAll('.btn-outline-secondary');
  resetFilters.forEach((element) => {
    element.addEventListener('click', activeFilters);
  });
  const cellProducts = document.querySelectorAll('.cell-products');
  cellProducts.forEach((element) => {
    element.addEventListener('click', () => {
      addBasket;
      changeBasket();
    });
  });
}

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
