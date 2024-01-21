import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUserFilter'
})
export class SearchUserFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();

    return items.filter(item => {
      return item.userName.toLowerCase().includes(searchText);
    });
    
  }
}