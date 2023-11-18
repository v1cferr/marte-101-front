import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class Marte101ApiService {
  public apiUrl = 'http://localhost:4444';

  public postUserLogin(email: string, password: string, rememberMe: boolean): Promise<any> {
    return axios.post(`${this.apiUrl}/users/login`, {
      email,
      password,
      rememberMe
    })
  }

  // getUserLogged() {
  //   return axios.get('http://localhost:4444/users/logged', {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem('token')}`
  //     },
  //     withCredentials: true,
  //   }) 
  // }
}
