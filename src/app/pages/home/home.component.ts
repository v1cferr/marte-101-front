/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';
import { WindowService } from 'src/app/services/window.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	constructor(private windowService: WindowService) {}

	/**
	 * Opens a confirmation window.
	 *
	 * @return {void} None
	 */
	public openConfirmationWindow(): void {
		this.windowService.openWindow();

	constructor(private router: Router) {}

	/**
	 * Navigates to the meteorology page.
	 *
	 * @return {void}
	 */
	public goToMeteorology(): void {
		this.router.navigate(['meteorology']);

	}
}
