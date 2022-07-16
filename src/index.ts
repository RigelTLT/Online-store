import './style.scss';
import { source } from './components/source/source';
import { addBasket } from './components/basket/basket';
import SortProduct from './components/sort/sort';
import Slider from './components/slider/slider';
import {Filter, IFilter} from './components/filters/filter';
import {createListProduct} from './components/list/list';
import { search, cleanSearch } from './components/search/search';

export function activeFilters (){
  const target = event?.target as HTMLElement;
  if(!target.classList.contains('reset')){
  if(target.classList.contains('button-filter')){
    target.classList.toggle('button-filter-active');
  }
  if(target.classList.contains('dropdown-item')){
    switch(target.innerHTML) {
      case "Title: A-Z":
        sortProd.sortName();
        break;
        case "Title: Z-A":
          sortProd.sortNameRevers();
          break;
          case "Year: ascending":
        sortProd.sortYear();
        break;
        case "Year: descending":
        sortProd.sortYearRevers();
        break;
    }
  }
  const yearValue = slider.valueYear as Array<number>;
  const priceValue = slider.valuePrice as Array<number>;
  const hullValue = slider.valueHull as Array<number>;
  const inputColor = Array.from(document.querySelectorAll('.input-color:checked'));
  const colorValue = inputColor.map((element) => {return (element as HTMLInputElement).value;});
  const buttonName = Array.from(document.querySelectorAll('.button-filter-active.name'));
  const nameValue = buttonName.map((element) => {return (element as HTMLInputElement).innerHTML;});
  const buttonFormFactor = Array.from(document.querySelectorAll('.button-filter-active.form-factor'));
  const formFactorValue = buttonFormFactor.map((element) => {return (element as HTMLInputElement).innerHTML;});
  const buttonCooler = Array.from(document.querySelectorAll('.external-cooler:checked'));
  const сoolerValue = buttonCooler.map((element) => {return (element as HTMLInputElement).value;});
  const array = new Filter(source, yearValue, priceValue, hullValue, colorValue, nameValue, formFactorValue, сoolerValue);
let arrayFiltered = array.filterYear() as IFilter[];
arrayFiltered = array.filterPrice(arrayFiltered) as IFilter[];
arrayFiltered = array.filterHullWidth(arrayFiltered) as IFilter[];
arrayFiltered = array.filterColor(arrayFiltered) as IFilter[];
arrayFiltered = array.filterName(arrayFiltered) as IFilter[];
arrayFiltered = array.filterFormFactor(arrayFiltered) as IFilter[];
arrayFiltered = array.filterExternalCoolers(arrayFiltered) as IFilter[];
arrayFiltered = search(arrayFiltered) as IFilter[];
createListProduct(arrayFiltered);
if(!target.classList.contains('reset-sort')){
  const sortTitel = document.querySelector('.dropdown-toggle') as HTMLElement;
switch(sortTitel.innerHTML) {
  case "Title: A-Z":
    sortProd.sortName();
    break;
    case "Title: Z-A":
      sortProd.sortNameRevers();
      break;
      case "Year: ascending":
    sortProd.sortYear();
    break;
    case "Year: descending":
    sortProd.sortYearRevers();
    break;
}}
else{
  const sortTitel = document.querySelector('.dropdown-toggle') as HTMLElement;
  sortTitel.innerHTML = 'Sorting';
}
}
else{
  slider.reset();
  const inputColor = Array.from(document.querySelectorAll('.input-color:checked'));
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
switch(sortTitel.innerHTML) {
  case "Title: A-Z":
    sortProd.sortName();
    break;
    case "Title: Z-A":
      sortProd.sortNameRevers();
      break;
      case "Year: ascending":
    sortProd.sortYear();
    break;
    case "Year: descending":
    sortProd.sortYearRevers();
    break;
}
}}

createListProduct(source);
const cellProducts = document.querySelectorAll('.cell-products');
cellProducts.forEach((element) => {
  element.addEventListener('click', addBasket);
})
const sortProd = new SortProduct();
const sortNameButton = document.querySelector('.sort-name') as HTMLElement;
sortNameButton.addEventListener('click', activeFilters);
const sortNameRevButton = document.querySelector('.sort-name-revers') as HTMLElement;
sortNameRevButton.addEventListener('click', activeFilters);
const sortYearButton = document.querySelector('.sort-year') as HTMLElement;
sortYearButton.addEventListener('click', activeFilters);
const sortYearRevButton = document.querySelector('.sort-year-revers') as HTMLElement;
sortYearRevButton.addEventListener('click', activeFilters);
const year = document.querySelector('.slider-year') as HTMLInputElement;
const price = document.querySelector('.slider-price') as HTMLInputElement;
const hull = document.querySelector('.slider-hull-width') as HTMLInputElement;
const slider = new Slider(year, price, hull);
slider.sliderYearObject.on('set', activeFilters);
slider.filterPriceObject.on('set', activeFilters);
slider.filterHullObject.on('set', activeFilters);
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
const searchInput = document.querySelector('.form-control') as HTMLInputElement;
searchInput.addEventListener('input', activeFilters);
const searchCleanInput = document.querySelector('.clean-search') as HTMLInputElement;
searchCleanInput.addEventListener('click', cleanSearch);
const resetFilters = document.querySelectorAll('.btn-outline-secondary');
resetFilters.forEach((element) => {
  element.addEventListener('click', activeFilters);
});