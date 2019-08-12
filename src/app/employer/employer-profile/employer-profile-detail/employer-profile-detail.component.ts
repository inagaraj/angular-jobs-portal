import { Component, OnInit } from '@angular/core';
import { EmployerProfileService } from 'src/app/services/employer-profile.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-employer-profile-detail',
  templateUrl: './employer-profile-detail.component.html',
  styleUrls: ['./employer-profile-detail.component.css']
})

export class EmployerProfileDetailComponent implements OnInit {

  profileForm: FormGroup;
  companySizeOptions: string[];

  constructor(private profile: EmployerProfileService, private fb: FormBuilder) { }

  ngOnInit() {

    this.companySizeOptions = this.profile.companySizeOptions;

    this.profileForm = this.fb.group({
      about: this.fb.group({
        id: [this.profile.employer.id],
        companyName: [this.profile.employer.about.companyName, [Validators.pattern(/^[a-zA-Z0-9 .,]+$/), Validators.maxLength(150)]],
        startedAt: this.profile.employer.about.startedAt,
        noOfEmployees: this.profile.employer.about.noOfEmployees,
        description: [this.profile.employer.about.description, [Validators.pattern(/^[a-zA-Z0-9 .,/\n]+$/), Validators.maxLength(750)]],
      }),
      contact: this.fb.group({
        id: [this.profile.employer.id],
        addressLine1: [this.profile.employer.contact.addressLine1, [Validators.maxLength(150), Validators.pattern(/^[a-zA-Z0-9 .,-/]+$/)]],
        addressLine2: [this.profile.employer.contact.addressLine2, [Validators.maxLength(150), Validators.pattern(/^[a-zA-Z0-9 .,-/]+$/)]],
        city: [this.profile.employer.contact.city, [Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9 .,]+$/)]],
        state: [this.profile.employer.contact.state, [Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9 .,]+$/)]],
        emailId: [this.profile.employer.contact.emailId, [Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
        phoneNumber: [this.profile.employer.contact.phoneNumber, [Validators.pattern(/^[0-9]{10}$/), Validators.minLength(10)]],
      }),
      hr: this.fb.group({
        id: [this.profile.employer.id],
        hrCity: [this.profile.employer.hr.hrCity, [Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9 .,]+$/)]],
        hrState: [this.profile.employer.hr.hrState, [Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9 .,]+$/)]],
        hrEmailId:  [this.profile.employer.hr.hrEmailId, [Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
        hrPhoneNumber: [this.profile.employer.hr.hrPhoneNumber, [Validators.pattern(/^[0-9]{10}$/), Validators.minLength(10)]],
      }),
      social: this.fb.group({
        id: [this.profile.employer.id],
        facebook: [this.profile.employer.social.facebook, [Validators.pattern(/^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/)]],
        twitter: [this.profile.employer.social.twitter, [Validators.pattern(/^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/)]],
        linkedIn: [this.profile.employer.social.linkedIn, [Validators.pattern(/^(https?:\/\/)?(www\.)?linkedin.com\/company\/[a-zA-Z0-9(\.\?)?]/)]],
      })

    });

  }

  // function to generate options for years

  companyStartedOptions() {
    const start = [];
    const currnetYear = new Date().getFullYear();
    for (let i = currnetYear; i > (currnetYear - 70); i--) {
      start.push(i);
    }
    return start;
  }

  // Update functions

  updateAbout() {

    const formValue = this.profileForm.get('about').value;
    console.log(formValue);
    this.profile.updateAbout(formValue).subscribe(
       data => {
         // refresh the list
        console.log(data)
        return true;
       },
       error => {
         console.error('Error Update about Details!');
         return Observable.throw(error);
       }
    );


    // this.profile.updateAbout(this.profileForm.get('about').value);
  }

  updateContact() {

    const formValue = this.profileForm.get('contact').value;
    console.log(formValue);
    this.profile.updateContact(formValue).subscribe(
       data => {
         // refresh the list
        console.log(data)
        return true;
       },
       error => {
         console.error('Error Update Contact Details!');
         return Observable.throw(error);
       }
    );

    // this.profile.updateAbout(this.profileForm.get('contact').value);
  }

  updateHr() {

    const formValue = this.profileForm.get('hr').value;
    console.log(formValue);
    this.profile.updateHr(formValue).subscribe(
       data => {
         // refresh the list
        console.log(data)
        return true;
       },
       error => {
         console.error('Error Update HR Details!');
         return Observable.throw(error);
       }
    );

    // this.profile.updateHr(this.profileForm.get('hr').value);
  }

  updateSocial() {
    const formValue = this.profileForm.get('social').value;
    console.log(formValue);
    this.profile.updateSocial(formValue).subscribe(
       data => {
         // refresh the list
        console.log(data)
        return true;
       },
       error => {
         console.error('Error Update Social Details!');
         return Observable.throw(error);
       }
    );
    // this.profile.updateSocial(this.profileForm.get('social').value);
  }

  // Form submit function

  onSubmit() {

    if (this.profileForm.get('about').dirty && this.profileForm.get('about').valid) {
      this.updateAbout();
    }

    if (this.profileForm.get('contact').dirty && this.profileForm.get('contact').valid) {
      this.updateContact();
    }

    if (this.profileForm.get('hr').dirty && this.profileForm.get('hr').valid) {
      this.updateHr();
    }

    if (this.profileForm.get('social').dirty && this.profileForm.get('social').valid) {
      this.updateSocial();
    }

    const { profileForm: { value: formValueSnap } } = this;
    // console.log(formValueSnap);
    this.profileForm.reset(formValueSnap);
  }

}
