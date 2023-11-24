/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class Marte101ApiService {
	private apiUrl = 'http://localhost:4444';

	constructor(private http: HttpClient) {}

	// 1- POST | `/users/login` | Rota para login do usuário.
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

	// 5- POST | `/users/token-validation` | Rota para validar o token.
	postUserTokenValidation(token: string): Promise<any> {
		return this.http
			.post<true>(`${this.apiUrl}/users/token-validation`, {
				token,
			})
			.toPromise();
	}

	// 2- GET | `/users/logged` | Rota com usuário logado.
	getUserLogged(): Observable<{ id: number; email: string }> {
		return this.http.get<{ id: number; email: string }>(
			`${this.apiUrl}/users/logged`
		);
	}

	// 3- POST | `/users/recover-password` | Rota para redefinir a senha do usuário.
	postRecoverPassword(): Observable<{ email: string }> {
		return this.http.post<{ email: string }>(
			`${this.apiUrl}/users/recover-password`,
			{}
		);
	}

	// 4- POST | `/users/new-user` | Rota para criar novo usuário.

	// 6- PATCH | `users/password-change` | Rota para alteração de senha.
	patchUserNewPassword(
        token: string,
        password: string
    ): Promise<any> {
        return this.http
            .patch('http://localhost:4444/users/password-change', {
                token,
                password,
            })
            .toPromise();
    }
}

