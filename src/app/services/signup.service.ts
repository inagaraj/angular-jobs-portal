import { EventEmitter } from '@angular/core';

export class SignupService {


  signupProcess = {
    email: '',
    signup: false,
    otp: false
  };

  statusUpdated = new EventEmitter<string>();

  signupSuccess(email: string) {
    this.signupProcess.email = email;
    this.signupProcess.signup = true;
  }

  otpSuccess() {
    this.signupProcess.otp = true;
  }

  resetSignupProcess() {
    this.signupProcess = {
      email: '',
      signup: false,
      otp: false
    };
  }

}
