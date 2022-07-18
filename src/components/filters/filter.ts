export interface IFilter {
  id: string;
  price: string;
  name: string;
  formFactor: string;
  color: string;
  year: string;
  externalСoolers: boolean;
  hullWidth: string;
}

export class Filter {
  products: Array<IFilter>;

  year?: number[];

  price?: number[];

  hullWidth?: number[];

  color?: string[];

  name?: string[];

  formFactor?: string[];

  externalCoolers?: string[];

  constructor(

    products: Array<IFilter>,
    year?: number[],
    price?: number[],
    hullWidth?: number[],
    color?: string[],
    name?: string[],
    formFactor?: string[],
    externalCoolers?: string[],
  ) {
    this.products = products;
    this.year = year;
    this.price = price;
    this.hullWidth = hullWidth;
    this.color = color;
    this.name = name;
    this.formFactor = formFactor;
    this.externalCoolers = externalCoolers;
  }

  public filterYear(): IFilter[] {
    if (this.year) {
      const from = Number(this.year[0]);
      const to = Number(this.year[1]);
      const filteredArray = this.products.filter((year) => Number(year.year) >= from && Number(year.year) <= to);
      return filteredArray;
    }
    return [];
  }

  public filterPrice(array: IFilter[]): IFilter[] {
    if (this.price) {
      const from = Number(this.price[0]);
      const to = Number(this.price[1]);
      const filteredArray = array.filter((price) => Number(price.price) >= from && Number(price.price) <= to);
      return filteredArray;
    }
    return [];
  }

  public filterHullWidth(array: IFilter[]): IFilter[] {
    if (this.hullWidth) {
      const from = Number(this.hullWidth[0]);
      const to = Number(this.hullWidth[1]);
      const filteredArray = array.filter((hullWidth) => (
        Number(hullWidth.hullWidth) >= from
          && Number(hullWidth.hullWidth) <= to
      ));
      return filteredArray;
    }
    return [];
  }

  public filterColor(array: IFilter[]): IFilter[] {
    if (this.color && this.color.length !== 0) {
      const arrayColor = this.color;
      const filteredArray = array.filter((color) => arrayColor.indexOf(color.color) > -1);
      return filteredArray;
    }
    return array;
  }

  public filterName(array: IFilter[]): IFilter[] {
    if (this.name && this.name.length !== 0) {
      const arrayName = this.name;
      const filteredArray = array.filter((name) => arrayName.indexOf(name.name) > -1);
      return filteredArray;
    }
    return array;
  }

  public filterFormFactor(array: IFilter[]): IFilter[] {
    if (this.formFactor && this.formFactor.length !== 0) {
      const arrayFormFactor = this.formFactor;
      const filteredArray = array.filter((formFactor) => arrayFormFactor.indexOf(formFactor.formFactor) > -1);
      return filteredArray;
    }
    return array;
  }

  public filterExternalCoolers(array: IFilter[]): IFilter[] {
    if (this.externalCoolers && this.externalCoolers.length !== 0) {
      const arrayCoolers = this.externalCoolers;
      const filteredArray = array.filter((externalCoolers) => (
        arrayCoolers.indexOf(String(externalCoolers.externalСoolers)) > -1
      ));
      return filteredArray;
    }
    return array;
  }
}
export default Filter;
