/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WindowService } from 'src/app/services/window.service';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
	imports: [MatIconModule, NgIf, MaterialModule],
	selector: 'app-success-window',
	templateUrl: './success-window.component.html',
	styleUrls: ['./success-window.component.scss'],
	standalone: true,
})
export class SuccessWindowComponent {
	@Input() public description: string = '';

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
		// Set the windowIsOpen flag to false to close the window
		this.windowIsOpen = false;
	}

	/**
	 * Navigates to the login page and closes the current window.
	 *
	 * @return {void}
	 */
	public goToLogin(): void {
		// Navigates to the login page
		this.router.navigate(['']);

		// Closes the current window
		this.closeWindow();
	}
}
