/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowService } from 'src/app/services/window.service';
import { MeteorologyService } from './api/meteorology.services';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-meteorology',
	templateUrl: './meteorology.component.html',
	styleUrls: ['./meteorology.component.scss'],
})
export class MeteorologyComponent implements OnInit {
	public sols: any[] = [];
	public inCelsius: boolean = false;
	public currentCard: number = 0;

	public isSmallScreen: boolean = false;
	public isMediumScreen: boolean = false;
	public isLargeScreen: boolean = false;
	public breakpointSubscription: Subscription | undefined;

	/**
	 * Initializes a new instance of the class.
	 *
	 * @param {Router} router - The router instance.
	 * @param {MeteorologyService} meteorologyService - The meteorology service instance.
	 */
	constructor(
		private router: Router,
		private meteorologyService: MeteorologyService,
		private windowService: WindowService,
		private breakpointObserver: BreakpointObserver
	) {}

	/**
	 * Initializes the component and calls the getMeteorologySoles method.
	 *
	 * @return {void} None
	 */
	public ngOnInit(): void {
		this.getMeteorologySoles();

		this.breakpointSubscription = this.breakpointObserver
			.observe(['(max-width: 768px)', '(max-width: 1024px)'])
			.subscribe((state: BreakpointState) => {
				this.isSmallScreen = state.breakpoints['(max-width: 768px)'];
				this.isMediumScreen = state.breakpoints['(max-width: 1024px)'];
				this.isLargeScreen =
					!state.breakpoints['(max-width: 768px)'] &&
					!state.breakpoints['(max-width: 1024px)'];
			});
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

	/**
	 * Handle the click event when the previous button is clicked.
	 *
	 * @return {void} This function does not return a value.
	 */
	public onPreviousClick(): void {
		const previous: number = this.currentCard - 1;
		this.currentCard = previous < 0 ? this.sols.length - 1 : previous;
	}

	/**
	 * Handles the click event when the "Next" button is clicked.
	 *
	 * @return {void} This function does not return anything.
	 */
	public onNextClick(): void {
		const next: number = this.currentCard + 1;
		this.currentCard = next >= this.sols.length ? 0 : next;
	}

	/**
	 * Determines whether the card at the specified index should be displayed.
	 *
	 * @param {number} index - The index of the card.
	 * @return {boolean} Returns true if the card should be displayed, otherwise false.
	 */
	public shouldDisplayCard(index: number): boolean {
		if (this.isSmallScreen) {
			return index === this.currentCard;
		} else if (this.isMediumScreen) {
			return index === this.currentCard || index === this.currentCard + 1;
		} else if (this.isLargeScreen) {
			return (
				index === this.currentCard ||
				index === this.currentCard + 1 ||
				index === this.currentCard + 2
			);
		} else {
			return false;
		}
	}

	/**
	 * Determines whether the arrow right should be displayed.
	 *
	 * @returns {boolean} True if the arrow right should be displayed, false otherwise.
	 */
	public shouldDisplayArrowRight(): boolean {
		if (this.isSmallScreen && this.currentCard >= 1) {
			return false;
		} else if (this.isMediumScreen && this.currentCard >= 2) {
			return false;
		} else if (this.isLargeScreen && this.currentCard >= 3) {
			return false;
		} else {
			return true;
		}
	}
}
