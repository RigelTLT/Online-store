import noUiSlider, { API } from 'nouislider';
import 'nouislider/dist/nouislider.css';
import wNumb from 'wnumb';

interface Islider extends HTMLElement {
  noUiSlider: API;
}
class Slider {
  protected sliderYear: HTMLInputElement;
  protected filterPrice: HTMLInputElement;
  protected filterHull: HTMLInputElement;
  public sliderYearObject: API;
  public filterPriceObject: API;
  public filterHullObject: API;
  constructor(sliderYear: HTMLInputElement, filterPrice: HTMLInputElement, filterHull: HTMLInputElement){
    this.sliderYear = sliderYear;
    this.filterPrice = filterPrice;
    this.filterHull = filterHull;
    this.sliderYearObject = noUiSlider.create(this.sliderYear, {
      start: [2009, 2022],
      connect: true,
      tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
      range: {
        min: [2009],
        max: [2022],
      },
      step: 1,
    });
    this.filterPriceObject = noUiSlider.create(this.filterPrice, {
      start: [0, 40000],
      connect: true,
      tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
      range: {
        min: [0],
        max: [40000],
      },
      step: 100,
    });
    this.filterHullObject = noUiSlider.create(this.filterHull, {
      start: [130, 330],
      connect: true,
      tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
      range: {
        min: [130],
        max: [330],
      },
      step: 10,
    });
  }
  get valueYear(){
    return this.sliderYearObject.get(true);
  }
  get valuePrice(){
    return this.filterPriceObject.get(true);
  }
  get valueHull(){
    return this.filterHullObject.get(true);
  }
  setYear(value: number[]){
    this.sliderYearObject.set(value);
  }
  setPrice(value: number[]){
    this.filterPriceObject.set(value);
  }
  setHull(value: number[]){
    this.filterHullObject.set(value);
  }
 reset(){
  this.sliderYearObject.reset(false);
  this.filterPriceObject.reset(false);
  this.filterHullObject.reset(false);
  }
}
export default Slider;