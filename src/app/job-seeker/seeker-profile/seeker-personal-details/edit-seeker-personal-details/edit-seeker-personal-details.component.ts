import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobSeekerProfileService } from 'src/app/services/job-seeker-profile.service';
import { JobSeekerProfilePersonal } from 'src/app/models/job-seeker/job-seeker-profile-personal.model';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-edit-seeker-personal-details',
  templateUrl: './edit-seeker-personal-details.component.html',
  styleUrls: ['./edit-seeker-personal-details.component.css']
})
export class EditSeekerPersonalDetailsComponent implements OnInit {

  res: string;
  editPersonalDetails: FormGroup;
  seeker: JobSeekerProfilePersonal;

  constructor(private profile: JobSeekerProfileService) {}

  @ViewChild('editModal', {static : true }) editModal: ElementRef;

  ngOnInit() {

    this.seeker = this.profile.jobSeeker.personalDetails;
    this.editPersonalDetails = new FormGroup ({
      id: new FormControl(this.seeker.id),
      firstName: new FormControl(this.seeker.firstName, [Validators.required, Validators.maxLength(35)]),
      lastName: new FormControl(this.seeker.lastName, [Validators.required, Validators.maxLength(35)]),
      sex: new FormControl(this.seeker.sex, [Validators.required]),
// tslint:disable-next-line: max-line-length
      emailId: new FormControl({value: this.seeker.emailId, disabled: true}, [Validators.required, Validators.email, Validators.maxLength(70)]),
      countryCode: new FormControl(this.seeker.countryCode, [Validators.required]),
      mobileNumber: new FormControl(this.seeker.mobileNumber, [Validators.required, Validators.pattern(/^[0-9]{1,10}$/)]),
      city: new FormControl(this.seeker.city, Validators.pattern(/^[a-zA-Z -]*$/)),
      state: new FormControl(this.seeker.state, Validators.pattern(/^[a-zA-Z -]*$/)),
      country: new FormControl(this.seeker.country, Validators.pattern(/^[a-zA-Z -]*$/)),
// tslint:disable-next-line: max-line-length
      linkedinUrl: new FormControl(this.seeker.linkedinUrl, Validators.pattern(/((http(s?):\/\/)*([a-zA-Z0-9\-])*\.|[linkedin])[linkedin/~\-]+\.[a-zA-Z0-9/~\-_,&=\?\.;]+[^\.,\s<]/))
    });

  }

  resetValues() {
    this.editPersonalDetails.patchValue({
      id: this.seeker.id,
      firstName: this.seeker.firstName,
      lastName: this.seeker.lastName,
      sex: this.seeker.sex,
      emailId: this.seeker.emailId,
      countryCode: this.seeker.countryCode,
      mobileNumber: this.seeker.mobileNumber,
      city: this.seeker.city,
      state: this.seeker.state,
      country: this.seeker.country,
      linkedinUrl: this.seeker.linkedinUrl
   });
  }

  resetForm() {
    this.editPersonalDetails.reset();
    this.resetValues();
  }

  onSubmit() {
    this.editPersonalDetails.patchValue({
      emailId: this.seeker.emailId
   });
    // const res = this.profile.updatePersonalDetails(this.editPersonalDetails.value);
    // console.log(res);
    this.profile.updateDate();
    const formValue = this.editPersonalDetails.value;
    this.profile.updateDetails(formValue).subscribe(
       data => {
        console.log(data);
        return true;
       },
       error => {
         console.error('Error saving profiles!');
         return Observable.throw(error);
       }
    );
    ($(this.editModal.nativeElement) as any).modal('hide');
    this.resetForm();
  }
}
