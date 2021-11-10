import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import{RegisterService} from '../../services/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private registerService:RegisterService
  ) { }

  ngOnInit(): void {
  }

  agents = [];

  userForm = this.formBuilder.group({
    username: '',
    password: '',
  });

  creatUser(){
    console.log(this.userForm.value)
    this.registerService.createUser(this.userForm.value)
  }


}
