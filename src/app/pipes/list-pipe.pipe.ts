import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listPipe',
})
export class ListPipe implements PipeTransform {

  transform(data: Array<any>, value: string): Array<any> {
    const str = value ? value.toLowerCase() : '';
    return data.filter(item => item.courseData.title.toLowerCase().includes(str));
  }
}
