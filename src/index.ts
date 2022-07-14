import './style.scss';
import { source } from './components/source/source';
import { addBasket } from './components/basket/basket';
import SortProduct from './components/sort/sort';
import Slider from './components/slider/slider';
import Filter from './components/filters/filter';

const products = document.querySelector('.products') as HTMLElement;
source.forEach((element, index) => {
  const cellProducts = document.createElement('div');
  cellProducts.classList.add('cell-products');
  cellProducts.dataset.name = element.name;
  cellProducts.dataset.year = element.year;
  cellProducts.dataset.formFactor = element.formFactor;
  cellProducts.dataset.hullWidth = element.hullWidth;
  cellProducts.dataset.externalСoolers = String(element.externalСoolers);
  cellProducts.dataset.price = element.price;
  products.append(cellProducts);
  const framePhoto = document.createElement('div');
  framePhoto.classList.add('frame-photo');
  cellProducts.append(framePhoto);
  const photoProducts = document.createElement('img');
  photoProducts.classList.add('photo-products');
  photoProducts.src = `./assets/img/${index + 1}.jpg`;
  framePhoto.append(photoProducts);
  const nameProducts = document.createElement('span');
  nameProducts.classList.add('name-products');
  cellProducts.append(nameProducts);
  nameProducts.innerHTML = 'Name: '+element.name;
  const yearProducts = document.createElement('span');
  yearProducts.classList.add('year-products');
  cellProducts.append(yearProducts);
  yearProducts.innerHTML = 'Year: '+element.year;
  const colorProducts = document.createElement('span');
  colorProducts.classList.add('color-products');
  cellProducts.append(colorProducts);
  colorProducts.innerHTML = 'Color: '+element.color;
  const formFactorProducts = document.createElement('span');
  formFactorProducts.classList.add('form-factor-products');
  cellProducts.append(formFactorProducts);
  formFactorProducts.innerHTML = 'Form factor: '+element.formFactor;
  const hullWidthProducts = document.createElement('span');
  hullWidthProducts.classList.add('hull-width-products');
  cellProducts.append(hullWidthProducts);
  hullWidthProducts.innerHTML = 'Hull width: '+element.hullWidth;
  const externalСoolersProducts = document.createElement('span');
  externalСoolersProducts.classList.add('external-coolers-products');
  cellProducts.append(externalСoolersProducts);
  if (element.externalСoolers === true) {
    externalСoolersProducts.innerHTML = 'External coolers: Yes';
  } else {
    externalСoolersProducts.innerHTML = 'External coolers: No';
  }
  const priceProducts = document.createElement('span');
  priceProducts.classList.add('priceProducts');
  cellProducts.append(priceProducts);
  priceProducts.innerHTML = 'Price: '+element.price;
});
const cellProducts = document.querySelectorAll('.cell-products');
cellProducts.forEach((element) => {
  element.addEventListener('click', addBasket);
})
const sortProd = new SortProduct();
const sortNameButton = document.querySelector('.sort-name') as HTMLElement;
sortNameButton.addEventListener('click', sortProd.sortName);
const sortNameRevButton = document.querySelector('.sort-name-revers') as HTMLElement;
sortNameRevButton.addEventListener('click', sortProd.sortNameRevers);
const sortYearButton = document.querySelector('.sort-year') as HTMLElement;
sortYearButton.addEventListener('click', sortProd.sortYear);
const sortYearRevButton = document.querySelector('.sort-year-revers') as HTMLElement;
sortYearRevButton.addEventListener('click', sortProd.sortYearRevers);
const year = document.querySelector('.slider-year') as HTMLInputElement;
const price = document.querySelector('.slider-price') as HTMLInputElement;
const hull = document.querySelector('.slider-hull-width') as HTMLInputElement;
const slider = new Slider(year, price, hull);
/*console.log(slider.sliderYearObject);
slider.sliderYearObject.on('set', function (values, handle) {
 console.log(values, handle);
 });*/
 function activeButton(){
  const target = event?.target as HTMLElement;
  if(target.classList.contains('button-filter')){
    target.classList.toggle('button-filter-active');
  }
}
 const buttonName = document.querySelectorAll('.element-filter');
 buttonName.forEach((element) => {
  element.addEventListener('click', activeButton);
})

const test = new Filter(source, ["2009", "2022"]);
const tet = test.filterYear();
console.log(tet);
