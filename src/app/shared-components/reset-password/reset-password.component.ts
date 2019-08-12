import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from, Observable } from 'rxjs';
import * as $AB from 'jquery';
declare var jQuery:any;

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  serverError = false;
  errorMessage = 'custom error here';
  ResetPasswordComponent: any;

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
    this.resetPasswordForm = new FormGroup({
      'emailId': new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(70)]),
    });
  }
  onSubmit() {
    if (this.resetPasswordForm.valid) {
      const formValue = this.resetPasswordForm.value;
      console.log(formValue);
    } else {
      this.validateAllFormFields(this.resetPasswordForm);
    }
  }
}
