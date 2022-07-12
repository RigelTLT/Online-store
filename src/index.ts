import './style.scss';
import { source } from './components/source/source';

const products = document.querySelector('.products') as HTMLElement;
source.forEach((element, index) => {
  const cellProducts = document.createElement('div');
  cellProducts.classList.add('cellProducts');
  products.append(cellProducts);
  const photoProducts = document.createElement('img');
  photoProducts.classList.add('photoProducts');
  photoProducts.src = `./assets/img/${index + 1}.jpg`;
  cellProducts.append(photoProducts);
  const nameProducts = document.createElement('span');
  nameProducts.classList.add('nameProducts');
  cellProducts.append(nameProducts);
  nameProducts.innerHTML = element.name;
  const yearProducts = document.createElement('span');
  yearProducts.classList.add('yearProducts');
  cellProducts.append(yearProducts);
  yearProducts.innerHTML = element.year;
  const formFactorProducts = document.createElement('span');
  formFactorProducts.classList.add('formFactorProducts');
  cellProducts.append(formFactorProducts);
  formFactorProducts.innerHTML = element.formFactor;
  const hullWidthProducts = document.createElement('span');
  hullWidthProducts.classList.add('hullWidthProducts');
  cellProducts.append(hullWidthProducts);
  hullWidthProducts.innerHTML = element.hullWidth;
  const externalСoolersProducts = document.createElement('span');
  externalСoolersProducts.classList.add('externalСoolersProducts');
  cellProducts.append(externalСoolersProducts);
  if (element.externalСoolers === true) {
    externalСoolersProducts.innerHTML = 'True';
  } else {
    externalСoolersProducts.innerHTML = 'False';
  }
  const priceProducts = document.createElement('span');
  priceProducts.classList.add('priceProducts');
  cellProducts.append(priceProducts);
  priceProducts.innerHTML = element.price;
});
console.log(source);
