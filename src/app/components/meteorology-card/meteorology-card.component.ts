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
}
