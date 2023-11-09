import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class WindowService {
	private isOpenSubject: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);
	public isOpen$ = this.isOpenSubject.asObservable();

	/**
	 * Opens a window.
	 *
	 * @return {void}
	 */
	public openWindow(): void {
		// Set the value of isOpenSubject to true
		this.isOpenSubject.next(true);
	}

	/**
	 * Closes the window.
	 *
	 * @return {void} No return value.
	 */
	public closeWindow(): void {
		// Set the value of isOpenSubject to false
		this.isOpenSubject.next(false);
	}
}
