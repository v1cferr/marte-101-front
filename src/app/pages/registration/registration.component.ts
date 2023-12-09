/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, HostListener } from '@angular/core';
import {
	FormControl,
	FormGroup,
	Validators,
	AbstractControl,
	ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { WindowService } from 'src/app/services/window.service';
import { Marte101ApiService } from 'src/app/services/marte-101-api.service';
import { MetricsService } from 'src/app/services/metrics.service';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
	public showError: boolean = false;
	public hide: boolean = true;
	public windowIsOpen: boolean = false;

	constructor(
		private router: Router,
		private windowService: WindowService,
		private apiService: Marte101ApiService,
		private metricsService: MetricsService
	) {}

	/**
	 * Returns a validator function that checks if the input contains at least one uppercase letter.
	 *
	 * @returns {ValidatorFn} A validator function that returns an object with the key 'uppercase' and value true if the input does not contain an uppercase letter, otherwise returns null.
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
	 * Returns a validator function that checks if the control value contains at least one digit.
	 *
	 * @returns {ValidatorFn} A validator function.
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
	 * Validates if the input contains any special characters.
	 * @return {{[key: string]: boolean;} | null} - Returns null if the input is valid, otherwise returns an object with the specialCharacter property set to true.
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
	 * Returns a validator function that checks if the password and confirmPassword fields match.
	 *
	 * @returns {ValidatorFn} The validator function.
	 */
	public passwordMatchValidator(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: boolean } | null => {
			const newPassword: string =
				(control.get('password')?.value as string) || '';
			const confirmPassword: string =
				(control.get('confirmPassword')?.value as string) || '';

			if (newPassword !== confirmPassword) {
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
	 * Opens the success window.
	 *
	 * @param {void} - No parameters
	 * @return {void} - Does not return anything
	 */
	public openSuccessWindow(): void {
		this.windowService.openWindow();
	}

	/**
	 * Navigates to the login page.
	 *
	 * @param {void} - This function does not accept any parameters.
	 * @return {void} - This function does not return any value.
	 */
	public goToLogin(): void {
		this.incompleteRegistration();
		this.router.navigate(['']);
	}

	@HostListener('window:beforeunload', ['$event'])
	/**
	 * Executes the necessary actions before the page is unloaded.
	 *
	 * @param {Event} event - The event object representing the page unload event.
	 * @return {void} This function does not return anything.
	 */
	public onBeforeUnload(event: Event): void {
		this.incompleteRegistration();
		event.preventDefault();
	}

	/**
	 * Incomplete registration function.
	 *
	 * @return {void} No return value.
	 */
	public incompleteRegistration(): void {
		this.metricsService.patchIncompleteRegistrations();
	}

	/**
	 * Submits the form data to create a new user.
	 *
	 * @return {Promise<void>} A promise that resolves when the form data is successfully submitted.
	 */
	public async onSubmit(): Promise<void> {
		const getFormInputsValues = this.registrationForm.value as {
			firstName: string;
			lastName: string;
			email: string;
			confirmPassword: string;
		};

		try {
			const response = await this.apiService.postNewUser(
				getFormInputsValues.firstName as string,
				getFormInputsValues.lastName as string,
				getFormInputsValues.email as string,
				getFormInputsValues.confirmPassword as string
			);

			if (response) {
				this.openSuccessWindow();

				setTimeout(() => {
					this.windowService.closeWindow();
					this.router.navigate(['']);
				}, 20000);
			}
		} catch (error) {
			this.showError = true;
		}
	}
}
