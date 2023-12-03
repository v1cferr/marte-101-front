import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration.component';
import { SuccessWindowComponent } from 'src/app/components/success-window/success-window.component';

@NgModule({
	declarations: [RegistrationComponent],
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		SuccessWindowComponent,
	],
	exports: [RegistrationComponent],
})
export class RegistrationModule {}
