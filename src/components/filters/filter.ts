export interface IFilter{
      id: string;
      price: string;
      name: string;
      formFactor: string;
      color: string;
      year: string;
      externalСoolers: boolean;
      hullWidth: string
}
export interface IFilters extends Array<IFilter>{}

export class Filter {
  products: IFilters;
  year?: number[];
  price?: number[];
  hullWidth?: number[];
  color?: string[];
  name?: string[];
  formFactor?: string[];
  externalCoolers?: string[];
  constructor(products : IFilters, year?: number[], price?: number[], hullWidth?: number[], color?: string[], name?: string[], formFactor?: string[], externalCoolers?: string[]){
    this.products = products;
    this.year = year;
    this.price = price;
    this.hullWidth = hullWidth;
    this.color = color;
    this.name = name;
    this.formFactor = formFactor;
    this.externalCoolers = externalCoolers;
  }
  public filterYear() {
    if(this.year){
      const from = Number(this.year[0]);
      const to = Number(this.year[1]);
      const filteredArray = this.products.filter(function(year){
        return Number(year.year) >= from && Number(year.year) <= to;
      })
      return filteredArray;
    }
  }
  public filterPrice(array : IFilter[]) {
    if(this.price){
      const from = Number(this.price[0]);
      const to = Number(this.price[1]);
      const filteredArray = array.filter(function(price){
        return Number(price.price) >= from && Number(price.price) <= to;
      })
      return filteredArray;
    }
  }
  public filterHullWidth(array : IFilter[]) {
    if(this.hullWidth){
      const from = Number(this.hullWidth[0]);
      const to = Number(this.hullWidth[1]);
      const filteredArray = array.filter(function(hullWidth){
        return Number(hullWidth.hullWidth) >= from && Number(hullWidth.hullWidth) <= to;
      })
      return filteredArray;
    }
  }
  public filterColor(array : IFilter[]) {
    if(this.color && this.color.length !== 0){
      const arrayColor = this.color;
      const filteredArray = array.filter(function(color){
        return arrayColor.indexOf( color.color ) > -1; 
      });
      return filteredArray;
    }else{
      return array;
    }
  }
  public filterName(array : IFilter[]) {
    if(this.name && this.name.length !== 0){
      const arrayName = this.name;
      const filteredArray = array.filter(function(name){
        return arrayName.indexOf( name.name ) > -1; 
      })
      return filteredArray;
    }else{
      return array;
    }
  }
  public filterFormFactor(array : IFilter[]) {
    if(this.formFactor && this.formFactor.length !== 0){
      const arrayFormFactor = this.formFactor;
      const filteredArray = array.filter(function(formFactor){
        return arrayFormFactor.indexOf( formFactor.formFactor ) > -1; 
      });
      return filteredArray;
    }else{
      return array;
    }
  }
  public filterExternalCoolers(array : IFilter[]) {
    if(this.externalCoolers && this.externalCoolers.length !== 0){
      const  arrayCoolers = this.externalCoolers;
      const filteredArray = array.filter(function(externalCoolers){
        return arrayCoolers.indexOf(String(externalCoolers.externalСoolers) ) > -1;
        });
      return filteredArray;
    }else{
      return array;
    }
  }
}
export default Filter;