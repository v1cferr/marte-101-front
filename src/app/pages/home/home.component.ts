/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';
import { WindowService } from 'src/app/services/window.service';

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
	}
}
