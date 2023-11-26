/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { WindowService } from 'src/app/services/window.service';

@Component({
	imports: [MatIconModule, NgIf, MaterialModule],
	selector: 'app-confirmation-window',
	templateUrl: './confirmation-window.component.html',
	styleUrls: ['./confirmation-window.component.scss'],
	standalone: true,
})
export class ConfirmationWindowComponent {
	public windowIsOpen: boolean = false;

	/**
	 * Initializes a new instance of the class.
	 *
	 * @param {Router} router - The router instance.
	 * @param {WindowService} windowService - The window service instance.
	 */
	constructor(private router: Router, private windowService: WindowService) {
		// Subscribe to the isOpen$ observable of the windowService
		this.windowService.isOpen$.subscribe((isOpen) => {
			// Update the windowIsOpen property with the value received from the observable
			this.windowIsOpen = isOpen;
		});
	}

	/**
	 * Closes the window.
	 *
	 * @return {void}
	 */
	public closeWindow(): void {
		this.windowIsOpen = false;
	}

	/**
	 * Navigates to the login page and closes the current window.
	 *
	 * @return {void}
	 */
	public goToLogin(): void {
		localStorage.removeItem('token');
		localStorage.removeItem('user');

		this.closeWindow();
		this.router.navigate(['']);
	}
}
