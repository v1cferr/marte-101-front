/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';

import {
	FormControl,
	FormGroup,
	Validators,
	AbstractControl,
	ValidatorFn,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WindowService } from 'src/app/services/window.service';
import { Marte101ApiService } from 'src/app/services/marte-101-api.service';
import { Location } from '@angular/common';


@Component({
	selector: 'app-new-password',
	templateUrl: './new-password.component.html',
	styleUrls: ['./new-password.component.scss'],
	providers: [],
})
export class NewPasswordComponent implements OnInit {
	private token: string = '';
	public hide: boolean = true;
	public showError: boolean = false;

	constructor(
		private router: Router,
		private route: ActivatedRoute, 
		private windowService: WindowService, 
		private apiService: Marte101ApiService, 
		private location: Location) {}

	/**
	 * Initializes the component and subscribes to the route URL.
	 *
	 * @return {void} This function does not return anything.
	 */
	ngOnInit(): void {
		this.route.url.subscribe(segments => {
		const urlSegments: string[] = segments.map(segment => segment.path);
		const token: string = urlSegments[1];
		this.token = token;

		this.removeTokenFromUrl();
		localStorage.setItem('token', token);
		})
		
	}

	/**
	 * Removes the token from the current URL.
	 *
	 * @return {void} 
	 */
	public removeTokenFromUrl(): void {
		const currentUrl = this.location.path();
		const newUrl = currentUrl.replace(this.token, '');
		this.location.replaceState(newUrl);
	}
	
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
	 * Submits the form data to update the user's new password.
	 *
	 * @return {Promise<void>} Promise that resolves when the password is successfully updated.
	 */
	async onSubmit(): Promise<void> {
        const getFormInputsValues = this.newPasswordForm.value as {
            confirmPassword: string;
        };

        const token = localStorage.getItem('token');

        try {
            await this.apiService.patchUserNewPassword(
                token as string,
                getFormInputsValues.confirmPassword as string
            );
			this.openSuccessWindow();
			this.router.navigate(['/login']);
			
        
        } catch (error) {
            this.showError = true;
        
		}
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
	 * Returns a validator function that checks if the password and confirm password fields match.
	 * @returns {ValidatorFn} The validator function.
	 */
	public passwordMatchValidator(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: boolean } | null => {
			// Get the values of the new password and confirm password fields
			const newPassword: string =
				(control.get('newPassword')?.value as string) || '';
			const confirmPassword: string =
				(control.get('confirmPassword')?.value as string) || '';

			// Check if the new password and confirm password fields match
			if (newPassword !== confirmPassword) {
				return { passwordMatch: true };
			}

			// Return null if the passwords match
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
	 * Opens a success window.
	 *
	 * @return {void} No return value.
	 */
	public openSuccessWindow(): void {
		this.windowService.openWindow();
	}

	/**
	 * Submits the form and logs the value of the new password form.
	 *
	 * @return {void} No return value.
	 */
	public submitForm(): void {
		return;
	}
}