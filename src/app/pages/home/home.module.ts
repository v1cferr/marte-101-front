import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { HomeComponent } from './home.component';
import { ConfirmationWindowComponent } from 'src/app/components/confirmation-window/confirmation-window.component';

@NgModule({
	declarations: [HomeComponent],
	imports: [CommonModule, MaterialModule, ConfirmationWindowComponent],
	exports: [HomeComponent],
})
export class HomeModule {}
