import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  private URL = 'http://127.0.0.1:8000/auth';
  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user:any) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signInUser(user:any) {
    return this.http.post<any>(this.URL + '/jwt/create/', user);
  }

  loggedIn() {
    //return !!localStorage.getItem('token');
    return !!localStorage.getItem('token');
  
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/tasks']);
  }

  getToken() {
    return localStorage.getItem('token');
  }


}
