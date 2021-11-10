import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
private URL = 'http://127.0.0.1:8000/auth/';

  constructor(private http: HttpClient,
    private router:Router
    ) { }

  createUser(user:any){
    console.log(user)
    return this.http.post<any>("http://127.0.0.1:8000/auth/users/",user).subscribe(()=>{
      console.log("user added successfully")
      this.router.navigate(['']);
    })
  }

}
