/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Marte101ApiService } from 'src/app/services/marte-101-api.service';
import { WindowService } from 'src/app/services/window.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	public showError: boolean = false;
	constructor(
		private router: Router,
		private windowService: WindowService,
		private apiService: Marte101ApiService
	) {}

	public hide: boolean = true;

	public goToHome(): void {
		this.windowService.closeWindow();
	}

	/**
	 * Navigates to the registration page.
	 *
	 * @return {void} The function does not return a value.
	 */
	public goToRegistration(): void {
		this.router.navigate(['registration']);
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

	public async onSubmit() {
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

			const tokenValidate = await this.apiService.postUserTokenValidation(
				response.token
			);

			if (tokenValidate) {
				this.router.navigate(['/home']);
			}

			console.log(response);
		} catch (error) {
			this.showError = true;
		}
	}
}
