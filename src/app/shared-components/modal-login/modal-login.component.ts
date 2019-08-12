import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {LoginProcess} from '../../models/login-process.model';
import { from, Observable } from 'rxjs';
import * as $AB from 'jquery';
declare var jQuery:any;



@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  loginForm: FormGroup;
  loginProcess: LoginProcess;
  serverError = false;
  errorMessage = 'custom error here';
  ModalLoginComponent: any;

  validateAllFormFields(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      this.validateAllFormFields(control);
    }
  });
}

// tslint:disable-next-line: variable-name
constructor(private _authService: AuthService) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      'emailId': new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(70)]),
// tslint:disable-next-line: max-line-length
      'password': new FormControl(null, [Validators.required,  Validators.maxLength(30)]),

      // Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}'),
    });
  }


  onSubmit() {
    if (this.loginForm.valid) {
      // const res = this._authService.login('ranikkarasu@gmail.com', 'password1');
      const formValue = this.loginForm.value;
      console.log(formValue);
      this._authService.login(formValue).subscribe(
        data => {
          console.log(data);
          this.loginProcess = data['response'];
          // alert(this.loginProcess.message);
          // tslint:disable-next-line: max-line-length
          if (this.loginProcess.message === 'Successfully Logged in') {
            this.serverError = false;
            this.errorMessage = '';
            // tslint:disable-next-line: max-line-length
            localStorage.setItem('sessionId', this.loginProcess.sessionId);
            // tslint:disable-next-line: max-line-length
            localStorage.setItem('token', `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMyNzM5NjksImV4cCI6MTU2NDgxMDAwNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20ifQ.GA0Y9gYIjmx1jLwuRHuBgZ8m6o-NgkD84nO0ym68CWo`);
            localStorage.loggedIn = true;
            // localStorage.role = 'jobSeeker';
            localStorage.emailId = formValue.emailId;
            localStorage.role = 'employer';
            window.location.href = '/';
          } else {
            this.serverError = true;
            this.errorMessage = 'Invalid UserName / Password';
          }
          return true;
        },
        error => {
          console.error('Error Login!');
          return Observable.throw(error);
        }
     );
    } else {
      this.validateAllFormFields(this.loginForm);
    }
  }

}
