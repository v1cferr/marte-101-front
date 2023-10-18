import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { LoginComponent } from './login.component';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
	],
	exports: [LoginComponent],
})
export class LoginModule {}
