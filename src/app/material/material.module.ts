import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

const MaterialComponents = [
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule,
	MatIconModule,
	MatCheckboxModule,
];

@NgModule({
	imports: [MaterialComponents],
	exports: [MaterialComponents],
})
export class MaterialModule {}
