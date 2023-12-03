/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
	imports: [MatCardModule],
	selector: 'app-meteorology-card',
	templateUrl: './meteorology-card.component.html',
	styleUrls: ['./meteorology-card.component.scss'],
	standalone: true,
})
export class MeteorologyCardComponent {
	@Input() sol: string = '';
	@Input() terrestrial_date: string = '';

	@Input() max_temp: string = '';
	@Input() min_temp: string = '';
	@Input() inCelsius: boolean = false;

	@Input() pressure: string = '';
	@Input() mars_uv: string = '';
	@Input() sunrise: string = '';
	@Input() sunset: string = '';

	/**
	 * Converts the temperature value based on the current unit setting.
	 *
	 * @param {string} value - The temperature value to convert.
	 * @return {string} - The converted temperature value.
	 */
	public convertTemperature(value: string): string {
		return this.inCelsius ? this.convertToCelsius(value) : value;
	}

	/**
	 * Converts a temperature value from Fahrenheit to Celsius.
	 *
	 * @param {string} fahrenheit - The temperature value in Fahrenheit.
	 * @return {string} The converted temperature value in Celsius.
	 */
	private convertToCelsius(fahrenheit: string): string {
		const celsius = ((parseFloat(fahrenheit) - 32) * 5) / 9;
		return celsius.toFixed(0);
	}
}
