import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { MeteorologyComponent } from './meteorology.component';

@NgModule({
	declarations: [MeteorologyComponent],
	imports: [CommonModule, MaterialModule],
	exports: [MeteorologyComponent],
})
export class MeteorologyModule {}
