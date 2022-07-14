import { source } from '../source/source';
interface IFilter{
      id: string;
      price: string;
      name: string;
      formFactor: string;
      color: string;
      year: string;
      externalСoolers: boolean;
      hullWidth: string
}
interface IFilters extends Array<IFilter>{}

class Filter {
  products: IFilters;
  year?: string[];
  price?: string[];
  hullWidth?: string[];
  color?: string[];
  name?: string[];
  formFactor?: string[];
  externalCoolers?: boolean;
  constructor(products : IFilters, year?: string[], price?: string[], hullWidth?: string[], color?: string[], name?: string[], formFactor?: string[], externalCoolers?: boolean){
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
        return Number(year.year) > from && Number(year.year) < to;
      })
      return filteredArray;
    }
  }
  public filterPrice() {
    if(this.price){
      const from = Number(this.price[0]);
      const to = Number(this.price[1]);
      const filteredArray = this.products.filter(function(price){
        return Number(price.price) > from && Number(price.price) < to;
      })
      return filteredArray;
    }
  }
  public filterHullWidth() {
    if(this.hullWidth){
      const from = Number(this.hullWidth[0]);
      const to = Number(this.hullWidth[1]);
      const filteredArray = this.products.filter(function(hullWidth){
        return Number(hullWidth.hullWidth) > from && Number(hullWidth.hullWidth) < to;
      })
      return filteredArray;
    }
  }
  public filterColor() {
    if(this.color){
      const arrayColor = this.color;
      const filteredArray = this.products.filter(function(color){
        arrayColor.forEach(element => {
          if(element === color.color){
            return true;
          }
        });
      })
      return filteredArray;
    }
  }
  public filterName() {
    if(this.name){
      const arrayName = this.name;
      const filteredArray = this.products.filter(function(name){
        arrayName.forEach(element => {
          if(element === name.name){
            return true;
          }
        });
      })
      return filteredArray;
    }
  }
  public filterFormFactor() {
    if(this.formFactor){
      const arrayFormFactor = this.formFactor;
      const filteredArray = this.products.filter(function(formFactor){
        arrayFormFactor.forEach(element => {
          if(element === formFactor.formFactor){
            return true;
          }
        });
      })
      return filteredArray;
    }
  }
  public filterExternalCoolers() {
    if(this.externalCoolers){
      const externalCoolersValue = this.externalCoolers;
      const filteredArray = this.products.filter(function(externalCoolers){
        return externalCoolers.externalСoolers === externalCoolersValue;
      })
      return filteredArray;
    }
  }
}
export default Filter;