import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { AuthService } from '../../../services/auth.service';
import * as $AB from 'jquery';

declare var jQuery: any;
@Component({
  selector: 'app-otp-modal',
  templateUrl: './otp-modal.component.html',
  styleUrls: ['./otp-modal.component.css']
})
export class OtpModalComponent implements OnInit {

  // @Output() otpStatuspassed = new EventEmitter<{ email: string, otpStatus: boolean }>();
  // @Input() signupOtpData: { email: string, otpStatus: boolean };

  @ViewChild('otpModal', { static: true }) otpModal: ElementRef;

  emailId = '';
  otp: FormGroup;

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

  constructor(private signupProcess: SignupService, private authService: AuthService) {
    this.signupProcess.statusUpdated.subscribe(
      (status: string) => {
        if (status === 'signup submitted') {
          setTimeout(() => ($(this.otpModal.nativeElement) as any).modal('show'), 400);
          this.emailId = signupProcess.signupProcess.email;
        }
      }
      );
  }

  ngOnInit() {

    this.otp = new FormGroup({
      digit1: new FormControl(null, [Validators.required, Validators.maxLength(1)]),
      digit2: new FormControl(null, [Validators.required, Validators.maxLength(1)]),
      digit3: new FormControl(null, [Validators.required, Validators.maxLength(1)]),
      digit4: new FormControl(null, [Validators.required, Validators.maxLength(1)]),
    });

  }

  autotab(event) {
    if (event.srcElement.nextSibling !== null) {
      if (event.target.value.length >= 1 && (event.inputType !== 'deleteContentBackward' || event.inputType !== 'deleteContentForward')) {
        event.srcElement.nextSibling.focus();
      }
    } else {
      if (event.target.value.length >= 1 && (event.inputType !== 'deleteContentBackward' || event.inputType !== 'deleteContentForward')) {
        event.srcElement.form[5].focus();
      }
    }
  }

  // OTP Success
  private otpSuccess() {
    console.log('otp Success');
    this.signupProcess.otpSuccess();
    ($(this.otpModal.nativeElement) as any).modal('hide');
    this.signupProcess.resetSignupProcess();
    this.signupProcess.statusUpdated.emit('otp submitted');
  }


  // Otp submitted
  onSubmit() {
    if (this.otp.valid) {
      console.log('form submitted');

      //let returnValue = this.authService.validateOtp(this.emailId,this.otp.value);
      //alert(returnValue[])
      const formObj = this.otp.value;
      alert(formObj.digit1);
      this.authService.validateOtp(this.emailId,formObj.digit1).subscribe(
        data => {
          // refresh the list
          //this.loginProcess = data["response"];
          alert(data["response"]);
         console.log(data)
         return true;
        },
        error => {
          console.error("Error Login!");
          //return Observable.throw(error);
        }
     );

      //this.otpSuccess();
    } else {
      this.validateAllFormFields(this.otp);
    }
    this.otp.reset();
  }
  verifyOTP(emailId) {
    this.authService.validateOtp(this.emailId, this.otp.value);
  }

}
