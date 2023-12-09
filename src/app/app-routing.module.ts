import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';
import { MeteorologyComponent } from './pages/meteorology/meteorology.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
	{ path: 'login/:token', component: LoginComponent},
	{ path: 'recover-password', component: RecoverPasswordComponent },
	{ path: 'registration', component: RegistrationComponent },
	{ path: 'home', component: HomeComponent },
	{
		path: 'new-password/:token',
		component: NewPasswordComponent,
	},
	{
		path: 'meteorology',
		component: MeteorologyComponent,
		canActivate: [AuthGuard],
	},
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [AuthGuard],
	},
	
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
