import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WindowService } from 'src/app/services/window.service';
import { Marte101ApiService } from 'src/app/services/marte-101-api.service';

@Component({
	selector: 'app-recover-password',
	templateUrl: './recover-password.component.html',
	styleUrls: ['./recover-password.component.scss'],
})
export class RecoverPasswordComponent {
	public recoverForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
	});

	constructor(private router: Router, private windowService: WindowService, private apiService: Marte101ApiService) {}

	async onSubmit() {
		const getEmail = this.recoverForm.value as {
			email: string;
			
		};
		
		
		try {
			await this.apiService.postRecoverPassword(
				getEmail.email as string,
			);
			this.openSuccessWindow();
		} catch (error) {
			console.log(error);
		}
	}

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
	 *  @return {void} No return value.
	 */
	public openSuccessWindow(): void {
		this.windowService.openWindow();
	}

	/**
	 * Submits the email form.
	 *
	 * @return {void}
	 */
	public submitEmail(): void {
		return;
	}
}
