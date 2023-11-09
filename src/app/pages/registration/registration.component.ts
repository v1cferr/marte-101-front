/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';
import {
	FormControl,
	FormGroup,
	Validators,
	AbstractControl,
	ValidatorFn,
} from '@angular/forms';
import { WindowService } from 'src/app/services/window.service';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
	public hide: boolean = true;

	constructor(private windowService: WindowService) {}

	public uppercaseValidator(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: boolean } | null => {
			if (!/[A-Z]/.test(control.value)) {
				return { uppercase: true };
			}
			return null;
		};
	}

	public digitValidator(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: boolean } | null => {
			if (!/[0-9]/.test(control.value)) {
				return { digit: true };
			}
			return null;
		};
	}

	public specialCharacterValidator(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: boolean } | null => {
			if (/[!@#%^&*()_+\-=.,]/.test(control.value)) {
				return null;
			}
			return { specialCharacter: true };
		};
	}

	public passwordMatchValidator(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: boolean } | null => {
			const password = control.get('password')?.value;
			const confirmPassword = control.get('confirmPassword')?.value;

			if (password !== confirmPassword) {
				return { passwordMatch: true };
			}
			return null;
		};
	}

	public registrationForm = new FormGroup(
		{
			firstName: new FormControl('', [Validators.required]),
			lastName: new FormControl('', [Validators.required]),
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [
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
	 * Opens a success window.
	 *
	 * This function opens a window to display a success message.
	 *
	 * @return {void} - This function does not return a value.
	 */
	public openSuccessWindow(): void {
		// Open the window
		this.windowService.openWindow();
	}

	onSubmit() {
		const formInputs = this.registrationForm.value;
		// const toJSON = JSON.stringify(formInputs);
		console.log(formInputs);
		return;
	}
}
