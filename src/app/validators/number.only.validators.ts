import { AbstractControl } from '@angular/forms';

export function ValidateNumber(control: AbstractControl) {
  if (typeof control.value !== 'number' && typeof Number(control.value) !== 'number' && !isNaN(Number(control.value))) {
    return { notNumberValue: true };
  }
  return null;
}
