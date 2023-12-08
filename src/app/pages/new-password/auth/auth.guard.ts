/* eslint-disable @typescript-eslint/no-unused-vars */
import { inject } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivateFn,
	RouterStateSnapshot,
} from '@angular/router';
import { Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot
) => {
	if (localStorage.getItem('token')) {
		return true;
	} else {
		inject(Router).navigate(['']);
		return false;
	}
};