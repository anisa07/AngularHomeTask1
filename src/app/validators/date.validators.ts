import { FormControl } from '@angular/forms';
import * as moment from 'moment';

export function DateValidator(format = 'dd/MM/YYYY'): any {
  return (control: FormControl): { [key: string]: any } => {
    const val = moment(control.value, format, false);

    if (!val.isValid()) {
      return { invalidDate: true };
    }

    return null;
  };
}
