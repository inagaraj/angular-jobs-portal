import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { JobSeekerProfileService } from 'src/app/services/job-seeker-profile.service';
import { JobSeekerProfilePersonal } from 'src/app/models/job-seeker/job-seeker-profile-personal.model';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-seeker-personal-details',
  templateUrl: './seeker-personal-details.component.html',
  styleUrls: ['./seeker-personal-details.component.css']
})
export class SeekerPersonalDetailsComponent implements OnInit {

  seeker: JobSeekerProfilePersonal;
  imageChangedEvent: any = '';
  croppedImage: any = '';

  @ViewChild('profilePicEdit', { static: true }) profilePicEdit: ElementRef;

  constructor(private profile: JobSeekerProfileService) { }

  ngOnInit() {
    this.seeker = this.profile.jobSeeker.personalDetails;
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {
    ($(this.profilePicEdit.nativeElement) as any).modal('show');
  }

  cropperReady() {
    // cropper ready
    console.log('cropper ready');
  }

  loadImageFailed() {
    // show message
    console.log('Image Load failed');
  }

  updateProfilePic() {
    this.profile.updateProfilePic(this.croppedImage).subscribe(
        data => {
          console.log(data);
          return true;
        },
        error => {
          console.error('Error Update Profile Picture!');
          return Observable.throw(error);
        }
      );
    // this.profile.profileImageUpdateEmitter.emit('updated');
    ($(this.profilePicEdit.nativeElement) as any).modal('hide');
  }

}
