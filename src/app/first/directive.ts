import { AbstractControl,ValidationErrors,ValidatorFn } from '@angular/forms'

export class passvalidation {

    static MatchValidator( source: any , target: any ): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            const sourceCtrl = control.get(source);
            const targetCtrl = control.get(target);

            return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value ? { mismatch: true } : null;
        };
    }

}