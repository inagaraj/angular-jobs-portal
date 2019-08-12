import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { JobSeekerProfileEducation } from 'src/app/models/job-seeker/job-seeker-profile-education.model';
import { JobSeekerProfileService } from 'src/app/services/job-seeker-profile.service';
import { Profile } from 'selenium-webdriver/firefox';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-seeker-education-details',
  templateUrl: './seeker-education-details.component.html',
  styleUrls: ['./seeker-education-details.component.css']
})
export class SeekerEducationDetailsComponent implements OnInit {

  seeker: JobSeekerProfileEducation[];
  @ViewChild('confirmModal', { static: true }) confirmModal: ElementRef;
  @ViewChild('deleteButton', { static: true }) deleteButton: ElementRef;

  constructor(private profile: JobSeekerProfileService) {}
  emailId = localStorage.emailId;
  ngOnInit() {
    this.getEducationDetails(this.emailId);
  }

  iconUrl(data: string) {
    switch (data) {
      case 'Secondary': {
         return 'assets/images/icons/profile-education/secondary.png';
      }
      case 'Senior secondary': {
        return 'assets/images/icons/profile-education/seniorsecondary.png';
      }
      case 'Diploma': {
        return 'assets/images/icons/profile-education/diploma.png';
      }
      case 'Graduation': {
        return 'assets/images/icons/profile-education/graduation.png';
      }
      case 'Post Graduations': {
        return 'assets/images/icons/profile-education/postgraduation.png';
      }
      default: {
        return 'assets/images/icons/profile-education/phd.png';
      }
   }
  }

  studyYear(start: string, end: string) {
    if (start === 'null' || start == null) {
      return end;
    } else {
      return (start + '-' + end);
    }
  }

  streamName(stream: string) {
    if ( stream == null || stream === 'null') {
      return ' ';
    } else { return stream; }
  }

  addEducation() {
    this.profile.modalType.emit('add new');
  }

  editEducation(edit: any) {
    const editVal = edit.srcElement.dataset.index;
    this.profile.modalType.emit(editVal);
  }

  deleteConfirmation(del: any) {
    const delVal = del.srcElement.dataset.index;
    $(this.deleteButton.nativeElement).attr('data-eduItem', delVal);
  }

  deleteEducation(button: any) {
    const val = button.srcElement.dataset.eduitem;
    this.profile.deleteEducation(val);
    ($(this.confirmModal.nativeElement) as any).modal('hide');
  }
  getEducationDetails(emailId: string) {
     this.profile.getEducationDetails(emailId).subscribe(
        data => {
          // refresh the list
        const addDetails = data['response'];
        this.profile.jobSeeker.educationDetail = addDetails;
        this.seeker = this.profile.jobSeeker.educationDetail;
        this.profile.jobSeeker.educationDetail = this.seeker;
        return true;
        },
        error => {
          console.error('Error getting Education Details!');
          return Observable.throw(error);
        }
     );
   }
}
