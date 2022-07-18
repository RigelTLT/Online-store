import noUiSlider, { API } from 'nouislider';
import 'nouislider/dist/nouislider.css';
import wNumb from 'wnumb';

class Slider {
  protected sliderYear: HTMLInputElement;

  protected filterPrice: HTMLInputElement;

  protected filterHull: HTMLInputElement;

  public sliderYearObject: API;

  public filterPriceObject: API;

  public filterHullObject: API;

  constructor(sliderYear: HTMLInputElement, filterPrice: HTMLInputElement, filterHull: HTMLInputElement) {
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

  get valueYear(): number[] {
    return (this.sliderYearObject.get(true) as number[]);
  }

  get valuePrice(): number[] {
    return (this.filterPriceObject.get(true) as number[]);
  }

  get valueHull(): number[] {
    return (this.filterHullObject.get(true) as number[]);
  }

  setYear(value: number[]): void {
    this.sliderYearObject.set(value);
  }

  setPrice(value: number[]): void {
    this.filterPriceObject.set(value);
  }

  setHull(value: number[]): void {
    this.filterHullObject.set(value);
  }

  reset(): void {
    this.sliderYearObject.reset(false);
    this.filterPriceObject.reset(false);
    this.filterHullObject.reset(false);
  }
}
export default Slider;
