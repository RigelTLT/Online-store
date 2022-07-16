import {IFilters} from '../filters/filter';
export function createListProduct(source: IFilters){
  const products = document.querySelector('.products') as HTMLElement;
  if(source.length>0){
  products.innerHTML = "";
source.forEach((element, index) => {
  const cellProducts = document.createElement('div');
  cellProducts.classList.add('cell-products');
  cellProducts.dataset.id = element.id;
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
  photoProducts.src = `./assets/img/${+element.id}.jpg`;
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
});}
else{
  products.innerHTML="<h2>Ничего не найдено</h2>"
}
}