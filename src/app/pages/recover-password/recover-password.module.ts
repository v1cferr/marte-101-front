import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material/material.module';

import { RecoverPasswordComponent } from './recover-password.component';
import { SuccessWindowComponent } from 'src/app/components/success-window/success-window.component';

@NgModule({
	declarations: [RecoverPasswordComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		MaterialModule,
		SuccessWindowComponent,
	],
	exports: [RecoverPasswordComponent],
})
export class RecoverPasswordModule {}
