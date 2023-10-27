import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WindowService } from 'src/app/services/window.service';

@Component({
	selector: 'app-success-window',
	templateUrl: './success-window.component.html',
	styleUrls: ['./success-window.component.scss'],
})
export class SuccessWindowComponent {
	WindowIsOpen = false;

	constructor(private router: Router, private windowService: WindowService) {
		this.windowService.isOpen$.subscribe((isOpen) => {
			this.WindowIsOpen = isOpen;
		});
	}

	/*
	 * closeWindow
	 *
	 * Fecha a janela de sucesso
	 * (click) on mat-icon[class="close-icon"]
	 */
	public closeWindow() {
		this.WindowIsOpen = false;
	}

	/*
	 * goToLogin
	 *
	 * Rota de retorno para a login page
	 * (click) on button[class="cancel"]
	 */
	public goToLogin() {
		this.router.navigate(['']);
	}
}
