import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, ComponentFactoryResolver, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, ControlContainer, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import {
  JobSeekerWorkExperience,
  JobSeekerSkills,
  JobSeekerCurrentPosition,
  JobSeekerContact,
  JobSeekerDocumnets
} from 'src/app/models/job-seeker/job-seeker-profile-details.model';
import { JobSeekerProfileService } from 'src/app/services/job-seeker-profile.service';
import { element } from 'protractor';
import { ValidateStartEnd } from 'src/app/custom-validation/start-end-year.validator';

import { Certificate } from 'crypto';

@Component({
  selector: 'app-seeker-profile-details',
  templateUrl: './seeker-profile-details.component.html',
  styleUrls: ['./seeker-profile-details.component.css']
})
export class SeekerProfileDetailsComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  communicationCtrl = new FormControl();
  filteredcommunications: Observable<string[]>;
  communications: string[] = ['English'];
  allCommunications: string[] = ['English', 'Tamil', 'Hindi', 'Telgu', 'French'];
  @ViewChild('fruitInput', { static: false }) fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  keyFeaturesExperienceOptions: string[];
  experienceOptions: string[];
  erpAutomatedOptions: string[];
  processOptions: string[];
  domainOptions: string[];
  jobTitleOptions: string[];
  rpaSkillOPtions: string[];
  timeOptions: { value: string; time: string; }[];

  profileForm: FormGroup;

  // Declaring form fields
  workExperience: JobSeekerWorkExperience;
  skills: JobSeekerSkills;
  currentPosition: JobSeekerCurrentPosition;
  contact: JobSeekerContact;
  documents: JobSeekerDocumnets;

  // selected checkboxes

  keyFeaturesSelected = [];
  erpAutomatedselected = [];
  processselected = [];
  domainsselected = [];

  // File Uploads

  newCertificates = [];
  oldCertificates: string[][];
  oldCertificatesModified = false;
  aadharOld = [];
  aadharNew = [];
  oldAadharModified = false;
  panOld = [];
  panNew = [];
  oldPanModified = false;
  bonafideOld = [];
  bonafideNew = [];
  oldBonafideModified = false;


  constructor(private profile: JobSeekerProfileService, private fb: FormBuilder) {
    this.filteredcommunications = this.communicationCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allCommunications.slice()));

  }
  emailId = localStorage.emailId;
  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.communications.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.communicationCtrl.setValue(null);
    }
  }

  remove(communication: string): void {
    const index = this.communications.indexOf(communication);

    if (index >= 0) {
      this.communications.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.communications.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.communicationCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCommunications.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
  ngOnInit() {
    this.keyFeaturesExperienceOptions = this.profile.keyFeaturesExperienceOptions;
    this.experienceOptions = this.profile.experienceOptions;
    this.erpAutomatedOptions = this.profile.erpAutomatedOptions;
    this.processOptions = this.profile.processOptions;
    this.domainOptions = this.profile.domainOptions;
    this.jobTitleOptions = this.profile.jobTitleOptions;
    this.rpaSkillOPtions = this.profile.rpaSkillOPtions;
    this.timeOptions = this.profile.timeOptions;
    this.getCanditatePersonalDetails(this.emailId);
    this.getCanditateWorkExperience(this.emailId);
    this.getCanditateSkills(this.emailId);
    this.getCanditateCurrentPosition(this.emailId);
    this.getCanditateToContact(this.emailId);
    this.getCanditateAccomplishment(this.emailId);
    // this.getCanditateProfilePicture(this.emailId);
    this.skills = this.profile.skills;
    this.currentPosition = this.profile.currentPosition;
    this.contact = this.profile.contact;
    this.documents = this.profile.documents;
    this.oldCertificates = this.profile.jobSeeker.awards.certification;
    this.aadharOld = this.profile.jobSeeker.awards.documents.aadhar;
    this.panOld = this.profile.jobSeeker.awards.documents.pan;
    this.bonafideOld = this.profile.jobSeeker.awards.documents.bonafide;

    // Form builder
    this.profileForm = this.fb.group({
      workExperience: this.fb.group({
        id: this.profile.jobSeeker.workExperience.id,
        keyFeature: this.addKeyFeaturesControls(),
        totalExperience: [this.profile.jobSeeker.workExperience.totalExperience],
        relavantExperience: [this.profile.jobSeeker.workExperience.relavantExperience],
        noOfProjectCompleted: [this.profile.jobSeeker.workExperience.noOfProjectCompleted, Validators.pattern(/^\d+$/)],
        erpAutomated: this.addErpAutomatedControls(),
        process: this.addprocessControls(),
        domainDetails: this.addDoaminDetailsControls(),
        stabilityYears: [this.profile.jobSeeker.workExperience.stabilityYears, Validators.pattern(/^[0-9]{1,2}$/)],
        stabilityNumber: [this.profile.jobSeeker.workExperience.stabilityNumber, Validators.pattern(/^[0-9]{1,2}$/)],
      }),

      skills: this.fb.group({
        id: this.profile.jobSeeker.skills.id,
        jobTitle: this.profile.jobSeeker.skills.jobTitle,
        primaryRpaSkill: this.profile.jobSeeker.skills.primaryRpaSkill,
        primaryWorkVersion: [this.profile.jobSeeker.skills.primaryWorkVersion, [Validators.pattern(/^[a-zA-Z0-9 .,]+$/)]],
        secondaryRpaSkill: this.profile.jobSeeker.skills.secondaryRpaSkill,
        secondaryWorkVersion: [this.profile.jobSeeker.skills.secondaryWorkVersion, [Validators.pattern(/^[a-zA-Z0-9 .,]+$/)]],
        communication: [this.communications],
      }),

      currentPosition: this.fb.group({
        // tslint:disable-next-line: max-line-length
        companyName: [this.profile.jobSeeker.currentPosition.companyName, [Validators.pattern(/^[a-zA-Z0-9 .,]+$/), Validators.maxLength(150)]],
        duration: [this.profile.jobSeeker.currentPosition.duration, [Validators.pattern(/^[a-zA-Z0-9 .,]+$/), Validators.maxLength(20)]],
        noticePeriod: [this.profile.jobSeeker.currentPosition.noticePeriod, [Validators.pattern(/^\d+$/), Validators.maxLength(10)]],
        // tslint:disable-next-line: max-line-length
        offerInHand: [this.profile.jobSeeker.currentPosition.offerInHand, [Validators.pattern(/^[a-zA-Z0-9 .,]+$/), Validators.maxLength(20)]],
        // tslint:disable-next-line: max-line-length
        presentCTC: [this.profile.jobSeeker.currentPosition.presentCTC, [Validators.pattern(/^[a-zA-Z0-9 .,]+$/), Validators.maxLength(50)]],
        // tslint:disable-next-line: max-line-length
        expectedCTC: [this.profile.jobSeeker.currentPosition.expectedCTC, [Validators.pattern(/^[a-zA-Z0-9 .,]+$/), Validators.maxLength(50)]],
        // tslint:disable-next-line: max-line-length
        presentLocation: [this.profile.jobSeeker.currentPosition.presentLocation, [Validators.pattern(/^[a-zA-Z0-9 .,]+$/), Validators.maxLength(150)]],
        // tslint:disable-next-line: max-line-length
        preferredLocation: [this.profile.jobSeeker.currentPosition.presentLocation, [Validators.pattern(/^[a-zA-Z0-9 .,]+$/), Validators.maxLength(150)]]
      }),

      contact: this.fb.group({
        preferredSlotWeekDaysStart: this.profile.jobSeeker.contact.preferredSlotWeekDaysStart,
        preferredSlotWeekDaysEnd: this.profile.jobSeeker.contact.preferredSlotWeekDaysEnd,
        preferredSlotWeekEndsStart: this.profile.jobSeeker.contact.preferredSlotWeekEndsStart,
        preferredSlotWeekEndsEnd: this.profile.jobSeeker.contact.preferredSlotWeekEndsEnd,
      }),

      documents: this.fb.group({
        id: this.documents.id,
        awards: [this.profile.jobSeeker.awards.awards, [Validators.maxLength(500), Validators.pattern(/^[a-zA-Z0-9 .,()/-]+$/)]],
        certification: '',
        aadhar: [{ value: '', disabled: this.aadharDisabled() }],
        pan: [{ value: '', disabled: this.panDisabled() }],
        bonafide: [{ value: '', disabled: this.bonafideDisabled() }]
      })

    });

  }


  // update contact time validity

  updateWeekdayValid() {
    this.weekDayEndcontrol.setValidators([
      ValidateStartEnd(this.weekDayStartcontrol.value)]);
    this.weekDayEndcontrol.updateValueAndValidity();
  }

  updateWeekendValid() {
    this.weekEndEndcontrol.setValidators([
      ValidateStartEnd(this.weekEndStartcontrol.value)]);
    this.weekEndEndcontrol.updateValueAndValidity();
  }

  get weekDayStartcontrol() {
    return this.profileForm.get('contact').get('preferredSlotWeekDaysStart') as FormControl;
  }
  get weekDayEndcontrol() {
    return this.profileForm.get('contact').get('preferredSlotWeekDaysEnd') as FormControl;
  }

  get weekEndStartcontrol() {
    return this.profileForm.get('contact').get('preferredSlotWeekEndsStart') as FormControl;
  }
  get weekEndEndcontrol() {
    return this.profileForm.get('contact').get('preferredSlotWeekEndsEnd') as FormControl;
  }

  // Key Features checkbox

  addKeyFeaturesControls() {
    const arr = this.keyFeaturesExperienceOptions.map(el => {
      const index = this.profile.jobSeeker.workExperience.keyFeature.indexOf(el);
      if (index === -1) {
        return this.fb.control(false);
      } else {
        return this.fb.control(true);
      }
    });
    return this.fb.array(arr);
  }

  get keyFeaturesArray() {
    return this.profileForm.get('workExperience').get('keyFeature') as FormArray;
  }

  selectedKeyFeatures() {
    this.keyFeaturesSelected = [];
    this.keyFeaturesArray.controls.forEach((control, i) => {
      if (control.value) {
        this.keyFeaturesSelected.push(this.keyFeaturesExperienceOptions[i]);
      }
    });
  }

  // erp Automated Checkbox

  addErpAutomatedControls() {
    const arr = this.erpAutomatedOptions.map(el => {
      const index = this.profile.jobSeeker.workExperience.erpAutomated.indexOf(el);
      if (index === -1) {
        return this.fb.control(false);
      } else {
        return this.fb.control(true);
      }
    });
    return this.fb.array(arr);
  }


  get erpAutomatedArray() {
    return this.profileForm.get('workExperience').get('erpAutomated') as FormArray;
  }

  selectedErpAutomated() {
    this.erpAutomatedselected = [];
    this.erpAutomatedArray.controls.forEach((control, i) => {
      if (control.value) {
        this.erpAutomatedselected.push(this.erpAutomatedOptions[i]);
      }
    });
  }


  // process Checkbox

  addprocessControls() {
    const arr = this.erpAutomatedOptions.map(el => {
      const index = this.profile.workExperience.process.indexOf(el);
      if (index === -1) {
        return this.fb.control(false);
      } else {
        return this.fb.control(true);
      }
    });
    return this.fb.array(arr);
  }


  get processArray() {
    return this.profileForm.get('workExperience').get('process') as FormArray;
  }

  selectedprocess() {
    this.processselected = [];
    this.processArray.controls.forEach((control, i) => {
      if (control.value) {
        this.processselected.push(this.processOptions[i]);
      }
    });
  }

  // domain details Checkbox

  addDoaminDetailsControls() {
    const arr = this.domainOptions.map(el => {
      const index = this.profile.workExperience.domainDetails.indexOf(el);
      if (index === -1) {
        return this.fb.control(false);
      } else {
        return this.fb.control(true);
      }
    });
    return this.fb.array(arr);
  }


  get doaminArray() {
    return this.profileForm.get('workExperience').get('domainDetails') as FormArray;
  }

  selectedDomains() {
    this.domainsselected = [];
    this.doaminArray.controls.forEach((control, i) => {
      if (control.value) {
        this.domainsselected.push(this.processOptions[i]);
      }
    });
  }

  // Chips for communication


  // Certificate upload

  certUpload(event) {
    const files = event.target.files;
    if (files) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < files.length; i++) {
        if (files[i].size < 2097152) {
          this.newCertificates.push(files[i]);
        } else {
          alert('Some of the files are larger than 2 mb');
        }
      }
    }
  }

  get certification() {
    return this.profileForm.get('documents').get('certification') as FormControl;
  }

  deleteCertUpload(item) {
    this.newCertificates.splice(item, 1);
  }

  deleteCertUploaded(item) {
    this.oldCertificates.splice(item, 1);
    this.oldCertificatesModified = true;
    this.certification.markAsTouched();
    this.certification.markAsDirty();
  }

  // AAdhar
  aadharDisabled() {
    if (this.aadharOld.length > 0 || this.aadharNew.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  get aadhar() {
    return this.profileForm.get('documents').get('aadhar') as FormControl;
  }

  deleteAadharOld() {
    this.aadharOld = [];
    this.aadhar.enable();
    this.aadhar.markAsTouched();
    this.aadhar.markAsDirty();
    this.oldAadharModified = true;
  }

  aadharUpload(event) {
    if (event.srcElement.files.length > 0) {
      if (event.target.files[0].size < 2097152) {
        this.aadharNew.push(event.target.files[0]);
      } else {
        // file size error message
      }
    }
  }

  deleteAadharNew() {
    this.aadharNew = [];
    this.aadhar.enable();
  }

  // PAN Card
  panDisabled() {
    if (this.panOld.length > 0 || this.panNew.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  get pan() {
    return this.profileForm.get('documents').get('pan') as FormControl;
  }

  deletePanOld() {
    this.panOld = [];
    this.pan.enable();
    this.pan.markAsTouched();
    this.pan.markAsDirty();
    this.oldPanModified = true;
  }

  panUpload(event) {
    if (event.srcElement.files.length > 0) {
      if (event.target.files[0].size < 2097152) {
        this.panNew.push(event.target.files[0]);
      } else {
        // file size error message
      }
    }
  }

  deletePanNew() {
    this.panNew = [];
  }

  // Bonafide
  bonafideDisabled() {
    if (this.bonafideOld.length > 0 || this.bonafideNew.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  get bonafide() {
    return this.profileForm.get('documents').get('bonafide') as FormControl;
  }

  deleteBonafideOld() {
    this.bonafideOld = [];
    this.bonafide.enable();
    this.bonafide.markAsTouched();
    this.bonafide.markAsDirty();
    this.oldBonafideModified = true;
  }

  bonafideUpload(event) {
    if (event.srcElement.files.length > 0) {
      if (event.target.files[0].size < 2097152) {
        this.bonafideNew.push(event.target.files[0]);
      }
    }
  }

  deletebonafideNew() {
    this.bonafideNew = [];
    this.bonafide.enable();
  }


  // Form Update function here

  updateWorkExperience() {
    // Called so that empty array is no returned if nothing is changed
    this.selectedKeyFeatures();
    this.selectedErpAutomated();
    this.selectedprocess();
    this.selectedDomains();
    // Assign values to be formatted
    const keyFeature = this.keyFeaturesSelected;
    const erpAutomated = this.erpAutomatedselected;
    const process = this.processselected;
    const domains = this.domainsselected;
    // remove true false array from fb
    const filteredFormVal = Object.assign({}, this.profileForm.get('workExperience').value);
    delete filteredFormVal.keyFeature;
    delete filteredFormVal.erpAutomated;
    delete filteredFormVal.process;
    delete filteredFormVal.domainDetails;

    const formValue = { ...filteredFormVal, keyFeature, erpAutomated, process, domains };
    console.log(formValue);
    this.profile.updateWorkExperience(formValue).subscribe(
      data => {
        console.log(data);
        Object.assign(this.profile.workExperience, data['response'][0]);
        return true;
      },
      error => {
        console.error('Error Update Work Experience Details!');
        return Observable.throw(error);
      }
    );
  }
  getCanditatePersonalDetails(emailId: string) {
    this.profile.getCanditatePersonalDetails(emailId).subscribe(
      data => {
        // console.log(data);
        return true;
      },
      error => {
        console.error('Error getting CanditatePersonal Details!');
        return Observable.throw(error);
      }
    );
  }
  getCanditateProfilePicture(emailId: string) {
    this.profile.getCanditateProfilePicture(emailId).subscribe(
      data => {
        // console.log(data);
        return true;
      },
      error => {
        console.error('Error  getCanditateProfilePicture Details!');
        return Observable.throw(error);
      }
    );
  }
  getCanditateWorkExperience(emailId: string) {
    this.profile.getCanditateWorkExperience(emailId).subscribe(
      data => {
        console.log(data);
        this.profileForm.get('workExperience').patchValue(data['response'][0]);
        return true;
      },
      error => {
        console.error('Error getting CanditateWorkExperience Details!');
        return Observable.throw(error);
      }
    );
  }

  getCanditateSkills(emailId: string) {
    this.profile.getCanditateSkills(emailId).subscribe(
      data => {
        this.profileForm.get('skills').patchValue(data['response'][0]);
        return true;
      },
      error => {
        console.error('Error getting CanditateSkills Details!');
        return Observable.throw(error);
      }
    );
  }
  getCanditateCurrentPosition(emailId: string) {
    this.profile.getCanditateCurrentPosition(emailId).subscribe(
      data => {
        this.profileForm.get('currentPosition').patchValue(data['response']);
        return true;
      },
      error => {
        console.error('Error getCanditateCurrentPosition Details!');
        return Observable.throw(error);
      }
    );
  }
  getCanditateToContact(emailId: string) {
    this.profile.getCanditateToContact(emailId).subscribe(
      data => {
        this.profileForm.get('contact').patchValue(data['response']);
        return true;
      },
      error => {
        console.error('Error getCanditateToContact Details!');
        return Observable.throw(error);
      }
    );
  }
  getCanditateAccomplishment(emailId: string) {
    this.profile.getCanditateAccomplishment(emailId).subscribe(
      data => {
        //  this.profileForm.get('documents').patchValue(data['response']);
        return true;
      },
      error => {
        console.error('Error getCanditateAccomplishment Details!');
        return Observable.throw(error);
      }
    );
  }
  updateSkills() {
    const formValue = this.profileForm.get('skills').value;
    console.log(formValue);
    this.profile.updateSkills(formValue).subscribe(
      data => {
        //  console.log(data)
        this.getCanditateSkills(this.emailId);
        return true;
      },
      error => {
        console.error('Error Update Skills Details!');
        return Observable.throw(error);
      }
    );
  }

  updateCurrentPosition() {
    const formValue = this.profileForm.get('currentPosition').value;
    console.log(formValue);
    this.profile.updateCurrentPosition(formValue).subscribe(
      data => {
        console.log(data);
        this.getCanditateCurrentPosition(this.emailId);
        return true;
      },
      error => {
        console.error('Error Update CurrentPosition Details!');
        return Observable.throw(error);
      }
    );
  }

  updateContact() {
    const formValue = this.profileForm.get('contact').value;
    console.log(formValue);
    this.profile.updateContact(formValue).subscribe(
      data => {
        console.log(data);
        this.getCanditateToContact(this.emailId);
        return true;
      },
      error => {
        console.error('Error Update Contact Details!');
        return Observable.throw(error);
      }
    );
  }

  updateDocuments() {
    const oldCertificates = this.oldCertificates;
    const newCertificates = this.newCertificates;
    const oldAadhar = this.aadharOld;
    const newAadhar = this.aadharNew;
    const oldPan = this.panOld;
    const newPan = this.panNew;
    const oldBonafide = this.bonafideOld;
    const newBonafide = this.bonafideNew;

    const filteredFormVal = Object.assign({}, this.profileForm.get('documents').value);
    let formattedFormVal = filteredFormVal;

    if (formattedFormVal.certification || formattedFormVal.certification === '') {
      delete formattedFormVal.certification;
      if (this.newCertificates.length > 0) {
        formattedFormVal = { ...formattedFormVal, newCertificates };
      }
      if (this.oldCertificatesModified) {
        formattedFormVal = { ...formattedFormVal, oldCertificates };
        this.oldCertificatesModified = false;
      }
      this.certification.patchValue('');
    }

    if (formattedFormVal.aadhar || formattedFormVal.aadhar === '') {
      delete formattedFormVal.aadhar;
      if (this.aadharNew.length > 0) {
        formattedFormVal = { ...formattedFormVal, newAadhar };
      }
      if (this.oldAadharModified) {
        formattedFormVal = { ...formattedFormVal, oldAadhar };
        this.oldAadharModified = false;
      }
      this.aadhar.patchValue('');
    }

    if (formattedFormVal.pan || formattedFormVal.pan === '') {
      delete formattedFormVal.pan;
      if (this.panNew.length > 0) {
        formattedFormVal = { ...formattedFormVal, newPan };
      }
      if (this.oldPanModified) {
        formattedFormVal = { ...formattedFormVal, oldPan };
        this.oldPanModified = false;
      }
      this.pan.patchValue('');
    }

    if (formattedFormVal.bonafide || formattedFormVal.bonafide === '') {
      delete formattedFormVal.bonafide;
      if (this.bonafideNew.length > 0) {
        formattedFormVal = { ...formattedFormVal, newBonafide };
      }
      if (this.oldBonafideModified) {
        formattedFormVal = { ...formattedFormVal, oldBonafide };
        this.oldBonafideModified = false;
      }
      this.bonafide.patchValue('');
    }
    const formValue = formattedFormVal;
    console.log(formValue);
    this.profile.upDateDocuments(formValue, this.bonafideNew, this.newCertificates,
      this.aadharNew, this.panNew).subscribe(
        data => {
          console.log(data);
          return true;
        },
        error => {
          console.error('Error Update Documents Details!');
          return Observable.throw(error);
        }
      );
  }
  // Submit
  onSubmit() {
    if (this.profileForm.get('workExperience').dirty && this.profileForm.get('workExperience').valid) {
      this.updateWorkExperience();
    }

    if (this.profileForm.get('skills').dirty && this.profileForm.get('skills').valid) {
      this.updateSkills();
    }

    if (this.profileForm.get('currentPosition').dirty && this.profileForm.get('currentPosition').valid) {
      this.updateCurrentPosition();
    }

    if (this.profileForm.get('contact').dirty && this.profileForm.get('contact').valid) {
      this.updateContact();
    }

    if (this.profileForm.get('documents').dirty && this.profileForm.get('documents').valid) {
      this.updateDocuments();
    }
    const { profileForm: { value: formValueSnap } } = this;
    this.profileForm.reset(formValueSnap);
  }
}
