import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'recover-password', component: RecoverPasswordComponent },
	{ path: 'new-password', component: NewPasswordComponent },
	{ path: 'registration', component: RegistrationComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
