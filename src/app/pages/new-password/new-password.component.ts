import { Component } from '@angular/core';
import {
	FormControl,
	FormGroup,
	Validators,
	AbstractControl,
	ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-new-password',
	templateUrl: './new-password.component.html',
	styleUrls: ['./new-password.component.scss'],
})
export class NewPasswordComponent {
	public hide = true;

	constructor(private router: Router) {}

	/**
	 * Returns a validator function that checks if the input value contains at least one uppercase letter.
	 *
	 * @return {ValidatorFn} The validator function.
	 */
	public uppercaseValidator(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: boolean } | null => {
			if (!/[A-Z]/.test(control.value)) {
				return { uppercase: true };
			}
			return null;
		};
	}

	/**
	 * Returns a validator function that checks if the input value contains at least one digit.
	 *
	 * @return {{[key: string]: boolean;} | null} - Returns an object with a 'digit' key if the input value does not contain a digit, otherwise returns null.
	 */
	public digitValidator(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: boolean } | null => {
			if (!/[0-9]/.test(control.value)) {
				return { digit: true };
			}
			return null;
		};
	}

	/**
	 * Returns a validator function that checks if the input control value contains a special character.
	 *
	 * @return {ValidatorFn} A validator function that returns null if the input control value contains a special character, otherwise returns an object with the key "specialCharacter" set to true.
	 */
	public specialCharacterValidator(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: boolean } | null => {
			if (/[!@#%^&*()_+\-=.,]/.test(control.value)) {
				return null;
			}
			return { specialCharacter: true };
		};
	}

	/**
	 * Returns a validator function that checks if the values of 'newPassword' and 'confirmPassword' match.
	 *
	 * @return {ValidatorFn} A validator function that returns an object with a 'passwordMatch' key set to true if the values do not match, or null if they match.
	 */
	public passwordMatchValidator(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: boolean } | null => {
			const newPassword = control.get('newPassword')?.value;
			const confirmPassword = control.get('confirmPassword')?.value;

			if (newPassword !== confirmPassword) {
				return { passwordMatch: true };
			}
			return null;
		};
	}

	public newPasswordForm = new FormGroup(
		{
			newPassword: new FormControl('', [
				Validators.required,
				Validators.minLength(8),
				this.uppercaseValidator(),
				this.digitValidator(),
				this.specialCharacterValidator(),
			]),
			confirmPassword: new FormControl('', [
				Validators.required,
				Validators.minLength(8),
			]),
		},
		{
			validators: this.passwordMatchValidator(),
		}
	);

	/**
	 * Navigates to the login page.
	 *
	 * @return {void} No return value.
	 */
	public goToLogin(): void {
		this.router.navigate(['']);
	}

	/**
	 * Submits the form and logs the value of the new password form.
	 *
	 * @return {void} No return value.
	 */
	public submitForm(): void {
		console.log(this.newPasswordForm.value);
	}
}
