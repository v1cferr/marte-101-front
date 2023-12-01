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
}