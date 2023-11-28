import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { MeteorologyComponent } from './meteorology.component';
import { ConfirmationWindowComponent } from 'src/app/components/confirmation-window/confirmation-window.component';

@NgModule({
	declarations: [MeteorologyComponent],
	imports: [CommonModule, MaterialModule, ConfirmationWindowComponent],
	exports: [MeteorologyComponent],
})
export class MeteorologyModule {}
