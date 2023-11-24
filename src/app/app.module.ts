import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';

import { LoginModule } from './pages/login/login.module';
import { RecoverPasswordModule } from './pages/recover-password/recover-password.module';
import { NewPasswordModule } from './pages/new-password/new-password.module';
import { RegistrationModule } from './pages/registration/registration.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatCardModule,
		LoginModule,
		RecoverPasswordModule,
		NewPasswordModule,
		RegistrationModule,
		HomeModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
