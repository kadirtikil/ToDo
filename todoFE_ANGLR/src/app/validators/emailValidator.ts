import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkEmailInput(): ValidatorFn{
    return (control:AbstractControl) : ValidationErrors | null => {
        const value = control.value;

        if(!value){
            return null;
        }

        // Check if the string has an @
        const hasAtSymbol = /@/.test(value);

        // Check if the string has a Valid TLD, by checking after the dot for 2 to 6 characters.
        const hasTopLevelDomain = /\.[a.zA.Z]{2,6}$/.test(value);

        if(hasAtSymbol && hasTopLevelDomain){
            return {'invalidEmail': true};
        }

        return null;
    }
}