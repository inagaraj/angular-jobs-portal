import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobSeekerProfileService } from 'src/app/services/job-seeker-profile.service';
import { JobSeekerProfileEducation } from 'src/app/models/job-seeker/job-seeker-profile-education.model';
import { ValidateStartEnd } from 'src/app/custom-validation/start-end-year.validator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-seeker-add-education-detail',
  templateUrl: './seeker-add-education-detail.component.html',
  styleUrls: ['./seeker-add-education-detail.component.css']
})
export class SeekerAddEducationDetailComponent implements OnInit {

  @ViewChild('addModal', { static: true }) addModal: ElementRef;
  @ViewChild('saveButton', { static: true }) saveButton: ElementRef;

  editEducationDetails: JobSeekerProfileEducation;
  addEducation: FormGroup;
  saveModal = true;
  updateModalId: number;

  qualificationOptions = [['Secondary', 'Secondary (X)'],
  ['Senior secondary', 'Senior Secondary (XII)'],
  ['Diploma', 'Diploma'],
  ['Graduation', 'Graduation'],
  ['Post Graduation', 'Post Graduation'],
  ['Ph. D', 'Ph. D']];

  constructor(private profile: JobSeekerProfileService) {
    this.profile.modalType.subscribe(
      (status: string) => {
        if (status === 'add new') {
          this.saveModal = true;
          this.updateFormToAdd();
        } else {
          this.saveModal = false;
          this.updateModalId = +status;
          this.editEducationDetails = this.profile.jobSeeker.educationDetail[this.updateModalId];
          this.updateFormToEdit();
        }
      });
  }
  emailId = localStorage.emailId;
  ngOnInit() {

    this.addEducation = new FormGroup({
      educationId: new FormControl(),
      qualification: new FormControl(null, [Validators.required]),
      educationStatus: new FormControl('completed', [Validators.required]),
      startYear: new FormControl(null, [Validators.required]),
      endYear: new FormControl(null, [Validators.required]),
      stream: new FormControl(null, [Validators.required]),
      board: new FormControl(null, [Validators.required]),
      performanceScale: new FormControl(null, [Validators.required]),
      // tslint:disable-next-line: max-line-length
      instituteName: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9 .,]+$/), Validators.minLength(3), Validators.maxLength(150)]),
      totalMarks: new FormControl(null, [Validators.required, Validators.min(2), Validators.max(100)]),
    });
    // this.getEducationDetails(this.emailId);
  }

  updateValid() {
    this.addEducation.get('endYear').setValidators([Validators.required,
    ValidateStartEnd(this.addEducation.get('startYear').value)]);
    this.addEducation.get('endYear').updateValueAndValidity();
  }


  stream() {
    switch (this.addEducation.get('qualification').value) {
      case 'Senior secondary': {
        return 'Stream';
      }
      case 'Ph. D': {
        return 'On';
      }
      default: {
        return 'Degree';
      }
    }
  }

  setStartDate() {
    const start = [];
    const currnetYear = new Date().getFullYear();
    for (let i = currnetYear; i > (currnetYear - 30); i--) {
      start.push(i);
    }
    return start;
  }

  setCompletion() {
    const currnetYear = new Date().getFullYear();
    const end = [];
    for (let i = (currnetYear - 30); i < (currnetYear + 10); i++) {
      end.push(i);
    }
    return end;
  }

  board() {
    const val = this.addEducation.get('qualification').value;
    if (val === 'Senior secondary' || val === 'Secondary') {
      return true;
    } else {
      return false;
    }
  }

  ifSecondary() {
    return (this.addEducation.get('qualification').value === 'Secondary');
  }

  ifPhd() {
    return (this.addEducation.get('qualification').value === 'Ph. D');
  }

  eduChange(value: any) {
    const val = value.target.value;
    switch (val) {
      case 'Secondary': {
        this.addEducation.patchValue({
          startYear: 'null',
          stream: 'null'
        });
        break;
      }
      case 'Senior secondary': {
        this.addEducation.patchValue({
          startYear: 'null',
          endYear: 'null',
          stream: ''
        });
        break;
      }
      case 'Ph. D': {
        this.addEducation.patchValue({
          startYear: 'null',
          endYear: 'null',
          board: 'null',
          performanceScale: 'null',
          totalMarks: 'null'
        });
        break;
      }
      default: {
        this.addEducation.patchValue({
          startYear: 'null',
          endYear: 'null',
          board: 'null',
          stream: ''
        });
      }
    }
  }

  updateFormToAdd() {
    this.eduFormReset();
    this.addEducation.get('qualification').enable();
  }

  updateFormToEdit() {
    this.addEducation.reset();
    this.addEducation.patchValue({
      educationId: this.editEducationDetails.educationId,
      qualification: this.editEducationDetails.qualification,
      educationStatus: this.editEducationDetails.educationStatus,
      startYear: this.editEducationDetails.startYear,
      endYear: this.editEducationDetails.endYear,
      stream: this.editEducationDetails.stream,
      board: this.editEducationDetails.board,
      performanceScale: this.editEducationDetails.performanceScale,
      instituteName: this.editEducationDetails.instituteName,
      totalMarks: this.editEducationDetails.totalMarks
    });
    this.addEducation.get('qualification').disable();
  }

  eduFormReset() {
    this.addEducation.reset();
    this.addEducation.patchValue({
      qualification: null,
      educationStatus: 'completed'
    });
  }

  saveEducation() {
    console.log(this.addEducation.value);
    const formValue = this.addEducation.value;
    this.profile.addEducation(formValue).subscribe(
       data => {
        console.log(data);
        this.getEducationDetails(this.emailId);
        return true;
       },
       error => {
         console.error('Error Add Education Details!');
         return Observable.throw(error);
       }
    );
    this.eduFormReset();
    ($(this.addModal.nativeElement) as any).modal('hide');
  }

  editEducation(updateId: number) {
    const formValue = this.addEducation.value;
    this.profile.editEducation(formValue, updateId).subscribe(
       data => {
        console.log(data);
        this.getEducationDetails(this.emailId);
        return true;
       },
       error => {
         console.error('Error updating  Education Details!');
         return Observable.throw(error);
       }
    );
    this.eduFormReset();
    ($(this.addModal.nativeElement) as any).modal('hide');
  }
  getEducationDetails(emailId: string) {
     this.profile.getEducationDetails(emailId).subscribe(
        data => {
        const addDetails = data['response'];
        this.profile.jobSeeker.educationDetail = addDetails;
        return true;
        },
        error => {
          console.error('Error getting Education Details!');
          return Observable.throw(error);
        }
     );
   }

   
}
