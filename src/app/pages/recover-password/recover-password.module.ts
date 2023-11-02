import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material/material.module';

import { RecoverPasswordComponent } from './recover-password.component';

@NgModule({
	declarations: [RecoverPasswordComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		MaterialModule,
	],
	exports: [RecoverPasswordComponent],
})
export class RecoverPasswordModule {}
