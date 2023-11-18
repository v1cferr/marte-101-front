/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Marte101ApiService } from 'src/app/services/marte-101-api.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

	constructor(private apiService: Marte101ApiService) {}

	public hide: boolean = true;

	public isRememberMeChecked(): boolean {
		return this.loginForm.get('rememberMe')?.value === true;
	}

	public loginForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [
			Validators.required,
			Validators.minLength(8),
		]),
		rememberMe: new FormControl(false),
	});

	public async onSubmit() {
		const emailValue = this.loginForm.get('email')?.value as string;
		const passwordValue = this.loginForm.get('password')?.value as string;
		const rememberMeValue = this.loginForm.get('rememberMe')?.value as boolean;


		const login = await this.apiService.postUserLogin(emailValue, passwordValue, rememberMeValue);
		const token = await login?.data?.token;
		console.log(login, rememberMeValue, token)
	}
}