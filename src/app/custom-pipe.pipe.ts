import { Pipe, PipeTransform } from '@angular/core';
import { HeadingComponent } from './heading/heading.component';

@Pipe({
  name: 'customPipe',
  pure: false
})
export class CustomPipePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item => {
    if( HeadingComponent.val === "first_name"){
        console.log(item.first_name);
      return item.first_name.toLowerCase().includes(searchText);
    }
    else if(HeadingComponent.val === "last_name"){
        console.log(item.last_name);
      return item.last_name.toLowerCase().includes(searchText);
    }
    else if(HeadingComponent.val == "email"){
        console.log(item.email);
      return item.email.toLowerCase().includes(searchText);
    }
    });
  }
}

