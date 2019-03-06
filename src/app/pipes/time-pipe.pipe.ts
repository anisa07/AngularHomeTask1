import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timePipe',
})
export class TimePipe implements PipeTransform {

  transform(value: any, args?: any): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    const result = hours ? `${hours}h ` : '';

    return minutes ? `${result}${minutes}min` : result;
  }

}
