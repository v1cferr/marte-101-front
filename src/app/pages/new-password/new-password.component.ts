import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WindowService } from 'src/app/services/window.service';

@Component({
	selector: 'app-new-password',
	templateUrl: './new-password.component.html',
	styleUrls: ['./new-password.component.scss'],
})
export class NewPasswordComponent {
	public hide = true;

	constructor(private router: Router, private windowService: WindowService) {}

	public newPasswordForm = new FormGroup({
		password: new FormControl('', [
			Validators.required,
			Validators.minLength(8),
		]),
		confirmPassword: new FormControl('', [
			Validators.required,
			Validators.minLength(8),
		]),
	});

	public goToLogin() {
		this.router.navigate(['']);
	}

	public openSuccessWindow() {
		this.windowService.openWindow();
	}
}
