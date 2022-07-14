class Filter{
  public filterYear() {

  }
  public filterPrice() {

  }
  public activeButton(){
    const target = event?.target as HTMLElement;
    if(target.classList.contains('button-filter')){
      target.classList.toggle('button-filter-active');
    }
  }
}
export default Filter;