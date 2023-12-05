/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class MetricsService {
	private apiUrl = 'http://localhost:4444';

	constructor(private http: HttpClient) {}

	/**
	 * Patch the registration started.
	 *
	 * @return {Observable<any>} The observable of any type.
	 */
	public patchRegistrationStarted(): Observable<any> {
		const endpoint = `${this.apiUrl}/metrics/registration-started`;
		return this.http.patch<any>(endpoint, {});
	}

	/**
	 * Sends a PATCH request to the server to update incomplete registrations.
	 *
	 * @return {Observable<any>} An observable that emits the server response.
	 */
	public patchIncompleteRegistrations(): Observable<any> {
		const endpoint = `${this.apiUrl}/metrics/incomplete-registrations`;
		return this.http.patch<any>(endpoint, {});
	}
}
