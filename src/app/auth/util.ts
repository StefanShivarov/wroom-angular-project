import { AbstractControl, ValidatorFn } from "@angular/forms";

export function passwordsMatch(passwordFormControl: AbstractControl) {

    const validatorFn: ValidatorFn = (repeatPasswordFormControl: AbstractControl) => {
        if (passwordFormControl.value !== repeatPasswordFormControl.value) {
            return {
                passwordMismatch: true
            }
        }

        return null;
    }

    return validatorFn;
}