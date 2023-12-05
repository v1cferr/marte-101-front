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
	public inCelsius: boolean = false;
	public currentCard = 0;

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

	/**
	 * Converts the temperature value to the desired unit.
	 *
	 * @param {string} value - The temperature value to be converted.
	 * @return {string} - The converted temperature value.
	 */
	public convertTemperature(value: string): string {
		if (this.inCelsius) {
			return this.convertToCelsius(value);
		} else {
			return value;
		}
	}

	/**
	 * Converts a temperature from Fahrenheit to Celsius.
	 *
	 * @param {string} fahrenheit - The temperature in Fahrenheit.
	 * @return {string} - The temperature in Celsius, rounded to the nearest whole number.
	 */
	private convertToCelsius(fahrenheit: string): string {
		const celsius = ((parseFloat(fahrenheit) - 32) * 5) / 9;
		return celsius.toFixed(0);
	}

	/**
	 * Changes the temperature unit to Celsius.
	 *
	 * @return {void} - This function does not return a value.
	 */
	public changeToCelsius(): void {
		this.inCelsius = true;
	}

	/**
	 * Change the temperature unit from Celsius to Fahrenheit.
	 *
	 * @return {void} - This function does not return any value.
	 */
	public changeToFahrenheit(): void {
		this.inCelsius = false;
	}

	public onPreviousClick(): void {
		const previous = this.currentCard - 1;
		this.currentCard = previous < 0 ? this.sols.length - 1 : previous;
		console.log('previous clicked, new current slide: ', this.currentCard);
	}

	public onNextClick(): void {
		const next = this.currentCard + 1;
		this.currentCard = next >= this.sols.length ? 0 : next;
		console.log('next clicked, new current slide: ', this.currentCard);
	}
}
