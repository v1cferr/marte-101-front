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
	 * Retrieves meteorology soles by calling the meteorology service's getMeteorologyData method and subscribing to the data.
	 *
	 * @return {type} description of return value
	 */
	private getMeteorologySoles(): void {
		this.meteorologyService.getMeteorologyData().subscribe((data) => {
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
