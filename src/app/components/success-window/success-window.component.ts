import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WindowService } from 'src/app/services/window.service';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
	imports: [MatIconModule, NgIf, MaterialModule],
	selector: 'app-success-window',
	templateUrl: './success-window.component.html',
	styleUrls: ['./success-window.component.scss'],
	standalone: true,
})
export class SuccessWindowComponent {
	@Input() description = '';

	windowIsOpen = false;

	constructor(private router: Router, private windowService: WindowService) {
		this.windowService.isOpen$.subscribe((isOpen) => {
			this.windowIsOpen = isOpen;
		});
	}

	/*
	 * closeWindow
	 *
	 * Fecha a janela de sucesso
	 * (click) on mat-icon[class="close-icon"]
	 */
	public closeWindow() {
		this.windowIsOpen = false;
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
