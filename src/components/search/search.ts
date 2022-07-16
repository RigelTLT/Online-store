import {IFilters} from '../filters/filter';
import {activeFilters} from './../../index';

export function search(source: IFilters){
  const searchInput = (document.querySelector('.form-control') as HTMLInputElement)?.value as string;
  if(searchInput){
    let result = source.map((item, i) => item.name.toLowerCase().indexOf(searchInput.toLowerCase()) >= 0 ? item : -1).filter(item => item !== -1);
    return result;
  }else{
    return source;
  }
}

export function cleanSearch(){
  const searchCleanInput = document.querySelector('.form-control') as HTMLInputElement;
  searchCleanInput.value = '';
  activeFilters();
}