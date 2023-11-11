import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material/material.module';
import { NewPasswordComponent } from './new-password.component';
import { SuccessWindowComponent } from 'src/app/components/success-window/success-window.component';

@NgModule({
	declarations: [NewPasswordComponent],
	imports: [
		CommonModule,
		FlexLayoutModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		NgIf,
		SuccessWindowComponent,
	],
	exports: [NewPasswordComponent],
})
export class NewPasswordModule {}
