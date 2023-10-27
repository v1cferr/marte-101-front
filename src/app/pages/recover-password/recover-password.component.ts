import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WindowService } from 'src/app/services/window.service';

@Component({
	selector: 'app-recover-password',
	templateUrl: './recover-password.component.html',
	styleUrls: ['./recover-password.component.scss'],
})
export class RecoverPasswordComponent {
	recoverForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
	});

	constructor(private router: Router, private windowService: WindowService) {}
	/*
	 * goToLogin
	 *
	 * Rota de retorno para a login page
	 * (click) on button[class="cancel"]
	 */
	public goToLogin() {
		this.router.navigate(['']);
	}

	public openSuccessWindow() {
		this.windowService.openWindow();
	}
}
