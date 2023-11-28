import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { WindowService } from 'src/app/services/window.service';

@Component({
	selector: 'app-meteorology',
	templateUrl: './meteorology.component.html',
	styleUrls: ['./meteorology.component.scss'],
})
export class MeteorologyComponent {
	constructor(private router: Router, private windowService: WindowService) {}

	/**
	 * Navigates to the home page.
	 *
	 * @return {void} This function does not return anything.
	 */
	public goToHome(): void {
		this.windowService.closeWindow();
		this.router.navigate(['home']);
	}

	/**
	 * Navigates to the login page.
	 *
	 * @return {void} There is no return value.
	 */
	public goToLogin(): void {
		this.router.navigate(['']);
	}

	/**
	 * Opens the confirmation window.
	 *
	 * @return {void} - No return value.
	 */
	public openConfirmationWindow(): void {
		this.windowService.openWindow();
	}
}
