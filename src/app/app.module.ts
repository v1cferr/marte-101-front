import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';

import { LoginModule } from './pages/login/login.module';
import { RecoverPasswordModule } from './pages/recover-password/recover-password.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatCardModule,
		LoginModule,
		RecoverPasswordModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
