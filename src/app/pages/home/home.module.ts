import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { HomeComponent } from './home.component';

@NgModule({
	declarations: [HomeComponent],
	imports: [CommonModule, MaterialModule],
	exports: [HomeComponent],
})
export class HomeModule {}