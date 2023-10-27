import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class WindowService {
	private isOpenSubject = new BehaviorSubject<boolean>(false);
	isOpen$ = this.isOpenSubject.asObservable();

	openWindow() {
		this.isOpenSubject.next(true);
	}

	/*
	 * closeWindow
	 *
	 * Fecha a janela de sucesso
	 * (click) on mat-icon[class="close-icon"]
	 */
	closeWindow() {
		this.isOpenSubject.next(false);
	}
}
