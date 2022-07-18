import { IFilter } from '../filters/filter';

export function search(source: Array<IFilter>): (IFilter | -1)[] {
  const searchInput = (document.querySelector('.form-control') as HTMLInputElement)?.value as string;
  if (searchInput) {
    const result = source.map((item) => (item.name.toLowerCase().indexOf(searchInput.toLowerCase()) >= 0 ? item : -1)).filter((item) => item !== -1);
    return result;
  }
  return source;
}
