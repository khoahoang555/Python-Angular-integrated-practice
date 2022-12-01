import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, FormControl, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms'
import { CustomValidators } from '../class/common/CustomValidators';
import { UserModel } from '../class/model/UserModel';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu-form-user',
  templateUrl: './menu-form-user.component.html',
  styleUrls: ['./menu-form-user.component.scss']
})
export class MenuFormUserComponent implements OnInit {
  loginForm: FormGroup;
  userModel: UserModel;

  constructor(private userService: UserService) {
    // this.loginForm = formBuilder.group({
    //   fullName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]],
    //   email: ['', [Validators.required, Validators.email]],
    //   age: [0, [Validators.required, Validators.min(1)]],
    //   password: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
    //   confirmPassword: ['', [Validators.required]]
    // },
    // [CustomValidators.MatchValidator('password', 'confirmPassword')]);
    this.loginForm = new FormGroup(
      {
        fullName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(45)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        age: new FormControl(0, [Validators.required, Validators.min(1)]),
        password: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(25)]),
        confirmPassword: new FormControl('', [Validators.required]),
        gender: new FormControl(1, [])
      },
      [CustomValidators.MatchValidator('password', 'confirmPassword')]
    );
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginForm.markAllAsTouched()
    if (this.loginForm.valid) {
      const objStr = JSON.stringify(this.loginForm.value);
      const obj = JSON.parse(objStr);
      
      this.userModel = new UserModel();
      this.userModel.deserialize(obj);

      this.userService.createNewUser(this.userModel).subscribe((data) => {
        console.log(data);
        this.onClear();
      });
    }
  }

  onClear() {
    this.loginForm.reset()
    this.loginForm.get("gender").setValue(1);
    this.loginForm.get("age").setValue(0)
  }

  get passwordMatchError() {
    return (
      this.loginForm.getError("mismatch") &&
      this.loginForm.get('confirmPassword').touched
    )
  }
}
