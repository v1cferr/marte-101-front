import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-recover-password',
	templateUrl: './recover-password.component.html',
	styleUrls: ['./recover-password.component.scss'],
})
export class RecoverPasswordComponent {
	recoverForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
	});

	constructor(private router: Router) {}
	/*
	 * goToLogin
	 *
	 * Rota de retorno para a login page
	 * (click) on button[class="cancel"]
	 */
	goToLogin() {
		this.router.navigate(['']);
	}
}
