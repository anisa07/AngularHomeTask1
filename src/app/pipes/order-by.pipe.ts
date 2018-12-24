import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {

  transform(data: Array<any>): Array<any> {
    return data.sort((item1, item2) => item1.courseData.creationDate.getTime() - item2.courseData.creationDate.getTime());
  }

}
