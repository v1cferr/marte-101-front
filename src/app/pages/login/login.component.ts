import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Marte101ApiService } from 'src/app/services/marte-101-api.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	constructor(private router: Router, private apiService: Marte101ApiService) {}

	// eslint-disable-next-line @typescript-eslint/no-inferrable-types
	public hide: boolean = true;

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

	async onSubmit() {
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
			console.log(error);
		}

		// console.log(tokenValidationResponse);
	}
}
