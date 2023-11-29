import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';

import { LoginModule } from './pages/login/login.module';
import { RecoverPasswordModule } from './pages/recover-password/recover-password.module';
import { NewPasswordModule } from './pages/new-password/new-password.module';
import { RegistrationModule } from './pages/registration/registration.module';
import { HomeModule } from './pages/home/home.module';
import { MeteorologyModule } from './pages/meteorology/meteorology.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatCardModule,
		LoginModule,
		RecoverPasswordModule,
		NewPasswordModule,
		RegistrationModule,
		HomeModule,
		MeteorologyModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
