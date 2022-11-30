import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, FormControl } from '@angular/forms'

@Component({
  selector: 'app-menu-form-user',
  templateUrl: './menu-form-user.component.html',
  styleUrls: ['./menu-form-user.component.scss']
})
export class MenuFormUserComponent implements OnInit {
  loginForm: FormGroup;
  

  constructor(fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl()
    })
  }

  onSubmit() {
    console.log("this is demo")
  }
}
