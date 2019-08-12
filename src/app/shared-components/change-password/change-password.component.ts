import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from, Observable } from 'rxjs';
import * as $AB from 'jquery';
declare var jQuery: any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  serverError = false;
  errorMessage = 'custom error here';
  ChangePasswordComponent: any;

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
    this.changePasswordForm = new FormGroup({
      // tslint:disable-next-line: max-line-length
      'current-password': new FormControl(null, [Validators.required, Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}'), Validators.maxLength(30)]),
      // tslint:disable-next-line: max-line-length
      'new-password': new FormControl(null, [Validators.required, Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}'), Validators.maxLength(30)]),
      // tslint:disable-next-line: max-line-length
      'confirm-password': new FormControl(null, [Validators.required, Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}'), Validators.maxLength(30)]),
      // Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}'),
    });
  }
  onSubmit() {
    if (this.changePasswordForm.valid) {
      const formValue = this.changePasswordForm.value;
      console.log(formValue);
    } else {
      this.validateAllFormFields(this.changePasswordForm);
    }
  }

}
