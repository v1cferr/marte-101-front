/* eslint-disable @typescript-eslint/no-inferrable-types */
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Marte101ApiService } from 'src/app/services/marte-101-api.service';
import { WindowService } from 'src/app/services/window.service';
import { MetricsService } from 'src/app/services/metrics.service';
import { Location } from '@angular/common';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
	public showError: boolean = false;
	public showErrorEmailValidation: boolean = false;
	private token: string = '';

	constructor(
		private router: Router,
		private route: ActivatedRoute, 
		private windowService: WindowService,
		private apiService: Marte101ApiService,
		private metricsService: MetricsService,
		private location: Location
	) {}

	public hide: boolean = true;

	
	/**
	 * Initializes the component and subscribes to the route URL.
	 * Retrieves the token from the URL segments and stores it in the component.
	 * Removes the token from the URL.
	 * Stores the token in the local storage.
	 * Calls the API service to validate the user email using the token.
	 * Opens the success window.
	 * If an error occurs, navigates to the login page and shows an error message.
	 *
	 * @return {void}
	 */
	ngOnInit(): void {
		this.route.url.subscribe(segments => {
		const urlSegments: string[] = segments.map(segment => segment.path);
		const token: string = urlSegments[1];
		this.token = token;

		this.removeTokenFromUrl();
		localStorage.setItem('token', token);
		})

		try {
			this.apiService.postUserEmailValidation(this.token);
			this.openSuccessWindow();
		} catch (error) {
			this.router.navigate(['/login']);
			this.showErrorEmailValidation = true;
		}
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
	 * Opens a success window.
	 *
	 * @return {void} No return value.
	 */
	public openSuccessWindow(): void {
		this.windowService.openWindow();
	}

	/**
	 * Navigates to the home page.
	 *
	 * @return {void} No return value.
	 */
	public goToHome(): void {
		this.windowService.closeWindow();
	}

	/**
	 * Navigates to the registration page.
	 *
	 * @return {void} The function does not return a value.
	 */
	public goToRegistration(): void {
		this.registrationStarted();
		this.router.navigate(['registration']);
	}

	/**
	 * Registers that the registration process has started.
	 *
	 * @return {void} - This function does not return a value.
	 */
	public registrationStarted(): void {
		this.metricsService.patchRegistrationStarted();
	}

	public loginForm = new FormGroup({
		email: new FormControl('', [
			Validators.required,
			Validators.email,
		]) as FormControl<string>,
		password: new FormControl('', [
			Validators.required,
			Validators.minLength(8),
		]) as FormControl<string>,
		rememberMe: new FormControl(false) as FormControl<boolean>,
	});

	/**
	 * Submits the form data to the server for user login.
	 *
	 * @return {Promise<void>} A promise that resolves when the login process is complete.
	 */
	public async onSubmit(): Promise<void> {
		const getFormInputsValues = this.loginForm.value as {
			email: string;
			password: string;
			rememberMe: boolean;
		};

		try {
			const response = await this.apiService.postUserLogin(
				getFormInputsValues.email as string,
				getFormInputsValues.password as string,
				getFormInputsValues.rememberMe as boolean
			);

			localStorage.setItem('token', response.token);

			this.router.navigate(['/home']);
		} catch (error) {
			this.showError = true;
		}
	}
}
