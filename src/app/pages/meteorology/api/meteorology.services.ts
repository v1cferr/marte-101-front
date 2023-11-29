/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class MeteorologyService {
	private apiUrl: string = 'http://localhost:5555';

	constructor(private http: HttpClient) {}

	/**
	 * Retrieves meteorology data from the API.
	 *
	 * @return {Observable<any[]>} An observable emitting an array of meteorology data.
	 */
	getMeteorologyData(): Observable<any[]> {
		const endpoint = `${this.apiUrl}/soles`;
		return this.http.get<any[]>(endpoint);
	}
}
