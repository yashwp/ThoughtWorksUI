import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((it: any) => it.movie_title.toLowerCase().includes(searchText) ||
      it.language.toLowerCase().includes(searchText) || it.country.toLowerCase().includes(searchText));
  }

}
