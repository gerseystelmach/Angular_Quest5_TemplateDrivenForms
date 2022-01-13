import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function isRequiredValidator(identify : string, title : string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const identifyControl = control.get(identify)
    const titleControl = control.get(title);

    if (identifyControl?.value || titleControl?.value) {
      return { isRequired: false };
    }

    return { isRequired: true };
  };
}
