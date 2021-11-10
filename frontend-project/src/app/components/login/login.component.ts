import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router'
import { FormBuilder,FormControl,Validators,FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {};

  constructor(
    private cookieService: CookieService,
    private authService: AuthServiceService,
    private router: Router,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
  }

  loginForm = this.formBuilder.group({
    username: '',
    password: '',

  });

  signIn() {
    console.log("hereeeeeeeeee",this.loginForm.value)
    this.authService.signInUser(this.loginForm.value)
      .subscribe(
        res => {
          console.log(res['access']);
          localStorage.setItem('token', res['access']);
          this.router.navigate(['agentlist']);
        },
        err => console.log(err)
      )
  }

}
