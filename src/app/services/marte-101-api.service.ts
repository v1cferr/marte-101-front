/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class Marte101ApiService {
	private apiUrl: string = 'http://localhost:4444';

	constructor(private http: HttpClient) {}
	
	/**
	 * Sends a POST request to the user login endpoint.
	 *
	 * @param {string} email - The email of the user.
	 * @param {string} password - The password of the user.
	 * @param {boolean} rememberMe - Indicates if the user wants to be remembered.
	 * @return {Promise<any>} A promise that resolves with the response data.
	 */
	postUserLogin(
		email: string,	
		password: string,
		rememberMe: boolean
	): Promise<any> {
		return this.http
			.post(`http://localhost:4444/users/login`, {
				email,
				password,
				rememberMe,
			})
			.toPromise();
	}

	/**
	 * Validates the user token.
	 *
	 * @param {string} token - The user token to be validated.
	 * @return {Promise<any>} A promise that resolves with the validation result.
	 */
	postUserTokenValidation(token: string): Promise<any> {
		return this.http
			.post<true>(`${this.apiUrl}/users/token-validation`, {
				token,
			})
			.toPromise();
	}

}