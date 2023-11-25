import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material/material.module';

import { LoginComponent } from './login.component';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		FlexLayoutModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		NgIf,
	],
	exports: [LoginComponent],
})
export class LoginModule {}
