import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from, Observable } from 'rxjs';
import * as $AB from 'jquery';
declare var jQuery:any;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  serverError = false;
  errorMessage = 'custom error here';
  ForgotPasswordComponent: any;

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
  constructor() { }

  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      'emailId': new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(70)]),
    });
  }
  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const formValue = this.forgotPasswordForm.value;
      console.log(formValue);
    } else {
      this.validateAllFormFields(this.forgotPasswordForm);
    }
  }

}
