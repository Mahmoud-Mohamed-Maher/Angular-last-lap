import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'change',
  standalone: true
})
export class ChangePipe implements PipeTransform {

  transform(value:string) {

  let formattedValue = '';
  for (let i = 0; i < value.length; i += 4) {
    formattedValue += value.substring(i, i + 4) + '-';
  }
  return formattedValue.slice(0, -1); 

  }

}
