/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WindowService } from 'src/app/services/window.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	constructor(private router: Router, private windowService: WindowService) {}

	public hide: boolean = true;

	public loginForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [
			Validators.required,
			Validators.minLength(8),
		]),
	});

	public goToHome(): void {
		this.windowService.closeWindow();
	/**
	 * Submits the form and navigates to the home page.
	 *
	 * @return {void} - Does not return a value.
	 */
	public onSubmit(): void {
		this.router.navigate(['home']);
	}
}