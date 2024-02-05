import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkPasswordInput(): ValidatorFn{
    return (control:AbstractControl) : ValidationErrors | null => {
        // Get the value thats being checked
        const value = control.value;

        // check if value even exists
        if(!value){
            return null;
        }

        // Self explaining
        let isToShort: boolean;
        if(value.length < 4){
            isToShort = true;
        } else{
            isToShort = false; 
        }

        // Self explaining
        let isToLong: boolean;
        if(value.length > 24){
            isToLong = true;
        } else{
            isToLong = false;
        }

        // Check if value contains uppcase with regular expression
        const hasUpperCase = /[A-Z]+/.test(value);

        // Check if value contains lowercase with regular expression
        const hasLowerCase = /[a-z]+/.test(value);

        // Check if value contains nums with regular expression
        const hasNumeric = /[0-9]+/.test(value);

        // chain the boolean values to determine if even one of them is wrong.
        // return the boolean result, which then determines if the password is valid. 
        // Might have to make some validators for real time checks for better user experience.
        const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && isToLong && isToShort;

        return !passwordValid ? {passwordStrength:true}: null;
    }
}