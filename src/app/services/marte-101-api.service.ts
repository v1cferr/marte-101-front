/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class Marte101ApiService {
	private apiUrl: string = 'https://trapezium.ddns.net';

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
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<any> {
		return this.http
			.post(`${this.apiUrl}/users/login`, {
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
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	postUserTokenValidation(token: string): Promise<any> {
		return this.http
			.post<true>(`${this.apiUrl}/users/token-validation`, {
				token,
			})
			.toPromise();
	}

	/**
	 * Sends a PATCH request to the server to update the user's password.
	 *
	 * @param {string} token - The token for authentication.
	 * @param {string} password - The new password to be set.
	 * @return {Promise<any>} - A promise that resolves with the server's response.
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	patchUserNewPassword(token: string, password: string): Promise<any> {
		return this.http
			.patch(`${this.apiUrl}/users/password-change`, {
				token,
				password,
			})
			.toPromise();
	}

	/**
	 * Sends a request to recover the user's password.
	 *
	 * @param {string} email - The email of the user.
	 * @return {Promise<any>} - A promise that resolves with the response from the server.
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	postRecoverPassword(email: string): Promise<any> {
		return this.http
			.post(`${this.apiUrl}/users/recover-password`, {
				email,
			})
			.toPromise();
	}

	/**
	 * Creates a new user with the provided information.
	 *
	 * @param {string} firstName - The first name of the user.
	 * @param {string} lastName - The last name of the user.
	 * @param {string} email - The email address of the user.
	 * @param {string} password - The password of the user.
	 * @return {Promise<any>} - A promise that resolves with the result of the HTTP request.
	 */
	postNewUser(
		firstName: string,
		lastName: string,
		email: string,
		password: string
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<any> {
		return this.http
			.post(`${this.apiUrl}/users/new-user`, {
				firstName,
				lastName,
				email,
				password,
			})
			.toPromise();
	}
}
