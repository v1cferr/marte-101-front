import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { AboutComponent } from './about.component';

@NgModule({
	declarations: [AboutComponent],
	imports: [CommonModule, MaterialModule],
	exports: [AboutComponent],
})
export class AboutModule {}
