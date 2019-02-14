import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {

  transform(data: Array<any>): Array<any> {
    return data.sort((item1, item2) => {
      const time1 = (new Date(item1.date)).getTime();
      const time2 = (new Date(item2.date)).getTime();

      return time1 - time2;
    });
  }
}
