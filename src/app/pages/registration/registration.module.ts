import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration.component';

@NgModule({
	declarations: [RegistrationComponent],
	imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
	exports: [RegistrationComponent],
})
export class RegistrationModule {}
