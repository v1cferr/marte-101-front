import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';

import { LoginModule } from './pages/login/login.module';
import { NewPasswordModule } from './pages/new-password/new-password.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatCardModule,
		LoginModule,
		NewPasswordModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
