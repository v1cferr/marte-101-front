import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './pages/login/auth/auth.guard';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'recover-password', component: RecoverPasswordComponent },
	{ path: 'registration', component: RegistrationComponent },

	{
		path: 'new-password/:token',
		component: NewPasswordComponent,
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