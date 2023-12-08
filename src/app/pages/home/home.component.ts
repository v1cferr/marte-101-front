/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { WindowService } from 'src/app/services/window.service';
import { Router } from '@angular/router';

interface Card {
	image: string;
	container: {
		warning: {
			text: string;
		};
		description: {
			title: string;
			content: string;
		};
		button: {
			enabled: boolean;
		};
	};
}
interface Arrow {
	left: boolean;
	right: boolean;
}
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
	public cards: Card[] = [];
	public arrows: Arrow[] = [];
	public currentCardIndex: number = 0;

	/**
	 * Constructor for the class.
	 *
	 * @param {WindowService} windowService - The window service.
	 * @param {Router} router - The router.
	 * @param {ElementRef} elementRef - The element reference.
	 * @param {Renderer2} renderer - The renderer.
	 */
	constructor(
		private windowService: WindowService,
		private router: Router,
		private elementRef: ElementRef,
		private renderer: Renderer2
	) {}

	/**
	 * Initializes the component after the view has been initialized.
	 *
	 * @return {void}
	 */
	public ngAfterViewInit(): void {
		this.cards = [...this.elementRef.nativeElement.querySelectorAll('.card')];
		this.arrows = [...this.elementRef.nativeElement.querySelectorAll('.arrow')];

		this.renderer.setStyle(this.arrows[0], 'display', 'none');
	}

	/**
	 * Decrements the current card index and updates the card visibility.
	 *
	 * @return {void}
	 */
	public onPreviousClick(): void {
		if (this.currentCardIndex > 0) {
			this.currentCardIndex--;
			this.updateCardVisibility();
		}
	}

	/**
	 * Updates the current card index to the next card in the list, if there is one, and updates the card visibility.
	 *
	 * @return {void} This function does not return a value.
	 */
	public onNextClick(): void {
		if (this.currentCardIndex < this.cards.length - 1) {
			this.currentCardIndex++;
			this.updateCardVisibility();
		}
	}

	/**
	 * Updates the visibility of the cards based on the current card index.
	 *
	 * @return {void} This function does not return anything.
	 */
	private updateCardVisibility(): void {
		this.cards.forEach((card, index) => {
			if (index === this.currentCardIndex) {
				this.renderer.setStyle(card, 'display', 'block');
			} else {
				this.renderer.setStyle(card, 'display', 'none');
			}
		});

		this.updateArrowVisibility();
	}

	/**
	 * Updates the visibility of the arrows based on the current card index.
	 *
	 * @return {void}
	 */
	private updateArrowVisibility(): void {
		this.renderer.setStyle(
			this.arrows[0],
			'display',
			this.currentCardIndex === 0 ? 'none' : 'block'
		);

		this.renderer.setStyle(
			this.arrows[1],
			'display',
			this.currentCardIndex === this.cards.length - 1 ? 'none' : 'block'
		);
	}

	/**
	 * Opens a confirmation window.
	 *
	 * @return {void} - No return value.
	 */
	public openConfirmationWindow(): void {
		this.windowService.openWindow();
	}

	/**
	 * Navigates to the meteorology page.
	 *
	 * @return {void} - No return value
	 */
	public goToMeteorology(): void {
		this.router.navigate(['meteorology']);
	}
}
