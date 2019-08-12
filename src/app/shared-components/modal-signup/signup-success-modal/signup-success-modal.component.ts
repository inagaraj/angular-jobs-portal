import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import * as $AB from 'jquery';

@Component({
  selector: 'app-signup-success-modal',
  templateUrl: './signup-success-modal.component.html',
  styleUrls: ['./signup-success-modal.component.css']
})
export class SignupSuccessModalComponent implements OnInit {

  @ViewChild('successModal', { static: true }) successModal: ElementRef;

  constructor(private signupProcess: SignupService) {
    this.signupProcess.statusUpdated.subscribe(
      (status: string) => {
        if (status === 'otp submitted') {
          setTimeout(() => ($(this.successModal.nativeElement) as any).modal('show'), 400);
        }
      }
      );
  }

  ngOnInit() {
  }

}
