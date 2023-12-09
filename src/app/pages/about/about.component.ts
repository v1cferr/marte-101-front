import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
	constructor(private router: Router) {}

	/**
	 * Navigates to the login page.
	 *
	 * @return {void} No return value.
	 */
	public goToLogin(): void {
		this.router.navigate(['login']);
	}

	/**
	 * Navigates to the registration page.
	 *
	 * @return {void} - No return value.
	 */
	public goToRegistration(): void {
		this.router.navigate(['registration']);
	}
}
