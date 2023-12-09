/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class MeteorologyService {
	private apiUrl: string = 'https://trapezium.ddns.net';

	constructor(private http: HttpClient) {}

	/**
	 * Retrieves meteorology data using the provided token.
	 *
	 * @param {string} token - The token used for authentication.
	 * @return {Observable<any[]>} An observable that emits an array of meteorology data.
	 */
	getMeteorologyData(token: string): Observable<any[]> {
		const endpoint = `${this.apiUrl}/metereology/soles`;
		const authorization = new HttpHeaders({
			Authorization: `Bearer ${token}`,
		});
		return this.http.get<any[]>(endpoint, { headers: authorization });
	}
}
