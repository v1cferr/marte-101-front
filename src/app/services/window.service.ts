import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class WindowService {
	private isOpenSubject = new BehaviorSubject<boolean>(false);
	isOpen$ = this.isOpenSubject.asObservable();

	/**
	 * Opens a window.
	 *
	 * @return {void}
	 */
	openWindow(): void {
		// Set the value of isOpenSubject to true
		this.isOpenSubject.next(true);
	}

	/**
	 * Closes the window.
	 *
	 * @return {void} No return value.
	 */
	closeWindow(): void {
		// Set the value of isOpenSubject to false
		this.isOpenSubject.next(false);
	}
}
