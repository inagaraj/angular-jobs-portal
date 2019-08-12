import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { AuthService } from '../../services/auth.service';
import {LoginProcess} from '../../models/login-process.model';
import { from, Observable } from 'rxjs';
import * as $AB from 'jquery';
declare var jQuery: any;
@Component({
  selector: 'app-modal-signup',
  templateUrl: './modal-signup.component.html',
  styleUrls: ['./modal-signup.component.css'],
  providers: [SignupService]
})
export class ModalSignupComponent implements OnInit {

  loginProcess: LoginProcess;
  signUp: FormGroup;
  ifSeeker = true;

  signupStatus: {email: string, signup: boolean, otp: boolean};
  constructor(private signupProcess: SignupService, private _authService: AuthService) {}

  @ViewChild('signupModal', {static : true }) signupModal: ElementRef;

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

  ngOnInit() {

    this.signupStatus = this.signupProcess.signupProcess;
    //http://localhost:8080/getCanditate?emailId=
    this.signUp = new FormGroup({
      accountType: new FormControl('seeker', [Validators.required]),
      firstName: new FormControl('Han', [Validators.required, Validators.maxLength(35)]),
      lastName: new FormControl('Daniel', [Validators.required, Validators.maxLength(35)]),
      sex: new FormControl('male', [Validators.required]),
      maritalStatus: new FormControl('married', [Validators.required]),
      companyName: new FormControl('null', [Validators.required]),
      emailId: new FormControl('haniel@gmail.com', [Validators.required, Validators.email, Validators.maxLength(70)]),
      // tslint:disable-next-line: max-line-length
      password: new FormControl('Aasdf12$$', [Validators.minLength(8), Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/)]),
      countryCode: new FormControl('+91', [Validators.required]),
      mobileNumber: new FormControl('9791979921', [Validators.required, Validators.pattern(/^[0-9]{1,10}$/)]),
      companySize: new FormControl('null', [Validators.required]),
      panNumber: new FormControl('ASDFG1234A', [Validators.required, Validators.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)])

    });

//     this.signUp = new FormGroup({
//       accountType: new FormControl('seeker', [Validators.required]),
//       firstName: new FormControl(null, [Validators.required, Validators.maxLength(35)]),
//       lastName: new FormControl(null, [Validators.required, Validators.maxLength(35)]),
//       sex: new FormControl('male', [Validators.required]),
//       maritialStatus: new FormControl(null, [Validators.required]),
//       companyName: new FormControl('null', [Validators.required]),
//       emailId: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(70)]),
// tslint:disable-next-line: max-line-length
//       password: new FormControl(null, [Validators.minLength(8), Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/)]),
//       countryCode: new FormControl('+91', [Validators.required]),
//       mobileNumber: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{1,10}$/)]),
//       companySize: new FormControl('null', [Validators.required]),
//       panNumber: new FormControl(null, [Validators.required, Validators.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)])

//     });
  }

  panNumberType() {
    if (this.ifSeeker) {
      return 'PAN Number';
    } else {
      return 'Company PAN Number';
    }
  }

  accountChange() {
    this.ifSeeker = !this.ifSeeker;
    if (!this.ifSeeker) {
      this.signUp.patchValue({
        companySize: null,
        companyName: null
      });
    } else {
      this.signUp.patchValue({
        companySize: 'null',
        companyName: 'null'
      });
    }
  }


  onSignup() {
    if (this.signUp.valid) {
      alert("signup valid");
      console.log('form submitted');
      const formObj = this.signUp.value;
     this._authService.signupSeeker(formObj).subscribe(
      data => {
        // refresh the list
        this.loginProcess = data["response"];
        alert(this.loginProcess.message);
        console.log(formObj);
        if(!this.loginProcess.isError)
        {
          this.signupProcess.signupSuccess(this.signUp.get('emailId').value);
          this.signupProcess.statusUpdated.emit('signup submitted');
          this.signUp.reset();
         ($(this.signupModal.nativeElement) as any).modal('hide');
        }
        
       console.log(data)
       return true;
      },
      error => {
        console.error("Error Login!");
        return Observable.throw(error);
      }
   );
    } else {
      this.validateAllFormFields(this.signUp);
    }
  }



}
