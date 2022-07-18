function sortDefault(): Element[] {
  const list = document.querySelectorAll('.cell-products');
  const parentProductList = document.querySelector('.products') as HTMLElement;
  const productsArray = [];
  for (let i = 0; i < list.length; i++) {
    productsArray.push(parentProductList.removeChild(list[i]));
  }
  return productsArray;
}

export function sortName(): void {
  const parentProductList = document.querySelector('.products') as HTMLElement;
  const productsArray = sortDefault();
  productsArray.sort((a, b) => {
    const nameA = (a as HTMLElement).dataset.name as string;
    const nameB = (b as HTMLElement).dataset.name as string;
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  })
    .forEach((el) => {
      parentProductList.appendChild(el);
    });
  const sortTitel = document.querySelector('.dropdown-toggle') as HTMLElement;
  sortTitel.innerHTML = 'Title: A-Z';
}

export function sortNameRevers(): void {
  const parentProductList = document.querySelector('.products') as HTMLElement;
  const productsArray = sortDefault();
  productsArray.sort((a, b) => {
    const nameA = (a as HTMLElement).dataset.name as string;
    const nameB = (b as HTMLElement).dataset.name as string;
    if (nameA < nameB) return 1;
    if (nameA > nameB) return -1;
    return 0;
  })
    .forEach((el) => {
      parentProductList.appendChild(el);
    });
  const sortTitel = document.querySelector('.dropdown-toggle') as HTMLElement;
  sortTitel.innerHTML = 'Title: Z-A';
}

export function sortYear(): void {
  const parentProductList = document.querySelector('.products') as HTMLElement;
  const productsArray = sortDefault();
  productsArray.sort((a, b) => {
    const yearA = (a as HTMLElement).dataset.year as string;
    const yearB = (b as HTMLElement).dataset.year as string;
    if (Number(yearA) < Number(yearB)) return -1;
    if (Number(yearA) > Number(yearB)) return 1;
    return 0;
  })
    .forEach((el) => {
      parentProductList.appendChild(el);
    });
  const sortTitel = document.querySelector('.dropdown-toggle') as HTMLElement;
  sortTitel.innerHTML = 'Year: ascending';
}

export function sortYearRevers(): void {
  const parentProductList = document.querySelector('.products') as HTMLElement;
  const productsArray = sortDefault();
  productsArray.sort((a, b) => {
    const yearA = (a as HTMLElement).dataset.year as string;

    const yearB = (b as HTMLElement).dataset.year as string;
    if (Number(yearA) < Number(yearB)) return 1;
    if (Number(yearA) > Number(yearB)) return -1;
    return 0;
  })
    .forEach((el) => {
      parentProductList.appendChild(el);
    });
  const sortTitel = document.querySelector('.dropdown-toggle') as HTMLElement;
  sortTitel.innerHTML = 'Year: descending';
}
