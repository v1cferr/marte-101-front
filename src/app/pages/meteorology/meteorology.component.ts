/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowService } from 'src/app/services/window.service';
import { MeteorologyService } from './api/meteorology.services';

@Component({
	selector: 'app-meteorology',
	templateUrl: './meteorology.component.html',
	styleUrls: ['./meteorology.component.scss'],
})
export class MeteorologyComponent implements OnInit {
	public sols: any[] = [];

	/**
	 * Initializes a new instance of the class.
	 *
	 * @param {Router} router - The router instance.
	 * @param {MeteorologyService} meteorologyService - The meteorology service instance.
	 */
	constructor(
		private router: Router,
		private meteorologyService: MeteorologyService,
		private windowService: WindowService
	) {}

	/**
	 * Initializes the component and calls the getMeteorologySoles method.
	 *
	 * @return {void} None
	 */
	public ngOnInit(): void {
		this.getMeteorologySoles();
	}

	/**
	 * Retrieves the token from the local storage.
	 *
	 * @private
	 * @return {string} The token value stored in the local storage, or an empty string if no token is found.
	 */
	private getToken(): string {
		return localStorage.getItem('token') || '';
	}

	/**
	 * Retrieve meteorology soles.
	 *
	 * @private
	 * @returns {void}
	 */
	private getMeteorologySoles(): void {
		const token = this.getToken();

		this.meteorologyService.getMeteorologyData(token).subscribe((data) => {
			this.sols = data;
		});
	}

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
