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
	 * @return {void} No return value.
	 */
	public goToHome(): void {
		this.router.navigate(['home']);
	}

	/**
	 * Navigates to the login (root) page.
	 *
	 * @return {void} No return value.
	 */
	public goToLogin(): void {
		this.router.navigate(['']);
	}

	public openConfirmationWindow(): void {
		this.windowService.openWindow();
	}
}
