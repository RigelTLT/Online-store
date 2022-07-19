import {
  sortName, sortNameRevers, sortYear, sortYearRevers,
} from '../sort/sort';
import Slider from '../slider/slider';
import { Filter, IFilter } from '../filters/filter';
import { source } from '../source/source';
import { search } from '../search/search';
import { createListProduct } from '../list/list';

export function activeFilter(event: Event | null): void {
  const year = document.querySelector('.slider-year') as HTMLInputElement;
  const price = document.querySelector('.slider-price') as HTMLInputElement;
  const hull = document.querySelector('.slider-hull-width') as HTMLInputElement;
  const slider = new Slider(year, price, hull);
  const target = event?.target as HTMLElement;
  let sort = 'Sorting';
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
    const yearValue = slider.valueYear as Array<number>;
    const priceValue = slider.valuePrice as Array<number>;
    const hullValue = slider.valueHull as Array<number>;
    const inputColor = Array.from(
      document.querySelectorAll('.input-color:checked'),
    );
    const colorValue = inputColor.map((element) => (element as HTMLInputElement).value);
    const buttonName = Array.from(
      document.querySelectorAll('.button-filter-active.name'),
    );
    const nameValue = buttonName.map((element) => (element as HTMLInputElement).innerHTML);
    const buttonFormFactor = Array.from(
      document.querySelectorAll('.button-filter-active.form-factor'),
    );
    const formFactorValue = buttonFormFactor.map((element) => (element as HTMLInputElement).innerHTML);
    const buttonCooler = Array.from(
      document.querySelectorAll('.external-cooler:checked'),
    );
    const сoolerValue = buttonCooler.map((element) => (element as HTMLInputElement).value);
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
}
