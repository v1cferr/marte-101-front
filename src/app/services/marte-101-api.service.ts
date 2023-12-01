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
	 * Sends a PATCH request to the server to update the user's password.
	 *
	 * @param {string} token - The token for authentication.
	 * @param {string} password - The new password to be set.
	 * @return {Promise<any>} - A promise that resolves with the server's response.
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	patchUserNewPassword(token: string, password: string): Promise<any> {
		return this.http
			.patch('http://localhost:4444/users/password-change', {
				token,
				password,
			})
			.toPromise();
	}
}