import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material/material.module';

import { LoginComponent } from './login.component';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		MaterialModule,
	],
	exports: [LoginComponent],
})
export class LoginModule {}
