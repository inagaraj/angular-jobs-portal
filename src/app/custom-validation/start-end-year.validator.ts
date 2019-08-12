import { AbstractControl } from '@angular/forms';

export function ValidateStartEnd(start) {return (control: AbstractControl) => {
  // const startYear = control;
  // console.log(start);
  if (start == null || start === undefined) {
    return null;
  }
  if (+start < +control.value) {
    return null;
  }
  return { ValidateStartEnd: true };
};
}
