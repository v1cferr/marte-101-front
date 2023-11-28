/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
		private meteorologyService: MeteorologyService
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
	 * @return {void} No return value.
	 */
	public goToHome(): void {
		this.router.navigate(['home']);
	}

	/**
	 * Navigates to the login page.
	 *
	 * @return {void}
	 */
	public goToLogin(): void {
		this.router.navigate(['']);
	}
}
