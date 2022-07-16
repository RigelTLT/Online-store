import {basket} from '../../index'

export function addBasket(){
  let cellProducts = event?.composedPath()[2] as HTMLElement;
  let numberGoods = document.querySelectorAll('.active-product');
  const target = event?.target as HTMLElement;
  const path = event?.composedPath()[2] as HTMLElement;
  const targetPhoto = target.classList.contains('photo-products');
  const targetProducts = target.classList.contains('cell-products');
  if (targetPhoto) {
    cellProducts = event?.composedPath()[2] as HTMLElement;
  }
  if(targetProducts){
    cellProducts = event?.composedPath()[0] as HTMLElement;
  }
  else if(!targetProducts && !path.classList.contains('cell-products')){
    cellProducts = event?.composedPath()[1] as HTMLElement;
  }
  if (numberGoods.length <20) {
    cellProducts.classList.toggle('active-product');
  let numberGoods = document.querySelectorAll('.active-product');
  const goods = document.querySelector('.number-goods') as HTMLElement;
  goods.innerHTML = String(numberGoods.length);
}
else if(cellProducts.classList.contains('active-product')){
  cellProducts.classList.toggle('active-product');
  let numberGoods = document.querySelectorAll('.active-product');
  const goods = document.querySelector('.number-goods') as HTMLElement;
  goods.innerHTML = String(numberGoods.length);
}
else {
  function hideAlert(alert : HTMLElement){
    alert.style.top = "-100%";
  }
  let alert = document.querySelector('.alert') as HTMLElement;
  alert.style.top = "0";
  setTimeout(hideAlert,5000, alert); 
}
const idGoods = document.querySelectorAll('.active-product');
idGoods.forEach((element) =>{
  const id = Number(element.getAttribute('data-id'));
  basket.push(id);
})
}
 
  