import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import wNumb from 'wnumb';
class Slider {
  protected sliderYear: HTMLInputElement;
  protected filterPrice: HTMLInputElement;
  constructor(){
    this.sliderYear = document.querySelector('.slider-year') as HTMLInputElement;
    this.filterPrice = document.querySelector(
      '.slider-price'
    ) as HTMLInputElement;
  }
  createFilterYear() {
    let sliderYear = document.querySelector('.slider-year') as HTMLInputElement;
    const sliderYearObject = noUiSlider.create(this.sliderYear, {
      start: [2009, 2022],
      connect: true,
      tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
      range: {
        min: [2009],
        max: [2022],
      },
      step: 1,
    });
    sliderYearObject.on('set', function (values, handle) {
      console.log(values, handle);
    });
  }
  createFilterPrice() {
    let filterPrice = document.querySelector(
      '.slider-price'
    ) as HTMLInputElement;
    const filterPriceObject = noUiSlider.create(this.filterPrice, {
      start: [0, 40000],
      connect: true,
      tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
      range: {
        min: [0],
        max: [40000],
      },
      step: 1,
    });
    filterPriceObject.on('set', function (values, handle) {
      console.log(values, handle);
    });
  }
}
export default Slider;