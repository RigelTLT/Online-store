export function addBasket(){
  let cellProducts: HTMLElement;
  let numberGoods = document.querySelectorAll('.active-product');
  if(numberGoods.length <20) {
  const target = event?.target as HTMLElement;
  const path = event?.composedPath()[2] as HTMLElement;
  if(target.classList.contains('photo-products')){
    cellProducts = event?.composedPath()[2] as HTMLElement;
    cellProducts.classList.toggle('active-product');
  }
  if(target.classList.contains('cell-products')){
    cellProducts = event?.composedPath()[0] as HTMLElement;
    cellProducts.classList.toggle('active-product');
  }
  else if(!target.classList.contains('cell-products') && !path.classList.contains('cell-products')){
    cellProducts = event?.composedPath()[1] as HTMLElement;
    cellProducts.classList.toggle('active-product');
  }
  const goods = document.querySelector('.number-goods') as HTMLElement;
  goods.innerHTML = String(numberGoods.length);
}
}
  
  