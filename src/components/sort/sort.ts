function sort() {
  const list = document.querySelectorAll('.cell-products');
const parentProductList = document.querySelector('.products') as HTMLElement;
  let productsArray = [];
  for (let i = 0; i < list.length; i++) {    
    productsArray.push(parentProductList.removeChild(list[i]));
  }
  return productsArray;
}

export function sortName() {
const parentProductList = document.querySelector('.products') as HTMLElement;
  let productsArray = sort();
  productsArray.sort(function(a, b) {
    var nameA = (a as HTMLElement).dataset.name as string;
    var nameB = (b as HTMLElement).dataset.name as string;
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  })
  .forEach(function(el) {
    parentProductList.appendChild(el)
  });
  const sortTitel = document.querySelector('.dropdown-toggle') as HTMLElement;
  sortTitel.innerHTML = "Title: A-Z";
}
export function sortNameRevers() {
  const parentProductList = document.querySelector('.products') as HTMLElement;
    let productsArray = sort();
    productsArray.sort(function(a, b) {
      var nameA = (a as HTMLElement).dataset.name as string;
      var nameB = (b as HTMLElement).dataset.name as string;
      if (nameA < nameB) return 1;
      if (nameA > nameB) return -1;
      return 0;
    })
    .forEach(function(el) {
      parentProductList.appendChild(el)
    });
    const sortTitel = document.querySelector('.dropdown-toggle') as HTMLElement;
    sortTitel.innerHTML = "Title: Z-A";
  }
  export function sortYear() {
    const parentProductList = document.querySelector('.products') as HTMLElement;
      let productsArray = sort();
      productsArray.sort(function(a, b) {
        var yearA = (a as HTMLElement).dataset.year as string;
        var yearB = (b as HTMLElement).dataset.year as string;
        if (Number(yearA) < Number(yearB)) return -1;
        if (Number(yearA) > Number(yearB)) return 1;
        return 0;
      })
      .forEach(function(el) {
        parentProductList.appendChild(el)
      });
      const sortTitel = document.querySelector('.dropdown-toggle') as HTMLElement;
      sortTitel.innerHTML = "Year: ascending";
    }
    export function sortYearRevers() {
      const parentProductList = document.querySelector('.products') as HTMLElement;
        let productsArray = sort();
        productsArray.sort(function(a, b) {
          var yearA = (a as HTMLElement).dataset.year as string;
          
          var yearB = (b as HTMLElement).dataset.year as string;
          if (Number(yearA) < Number(yearB)) return 1;
          if (Number(yearA) > Number(yearB)) return -1;
          return 0;
        })
        .forEach(function(el) {
          parentProductList.appendChild(el)
        });
        const sortTitel = document.querySelector('.dropdown-toggle') as HTMLElement;
        sortTitel.innerHTML = "Year: descending";
      }