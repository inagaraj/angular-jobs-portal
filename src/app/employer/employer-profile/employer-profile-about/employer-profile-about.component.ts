import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmployerProfile } from 'src/app/models/employer-profile.model';
import { EmployerProfileService } from 'src/app/services/employer-profile.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-employer-profile-about',
  templateUrl: './employer-profile-about.component.html',
  styleUrls: ['./employer-profile-about.component.css']
})
export class EmployerProfileAboutComponent implements OnInit {


  employer: EmployerProfile;
  imageChangedEvent: any = '';
  croppedImage: any = '';

  @ViewChild('companyLogoEdit', { static: true }) companyLogoEdit: ElementRef;

  constructor(private profile: EmployerProfileService) {}

  ngOnInit() {

    this.employer = this.profile.employer;

  }


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {
    console.log(this.companyLogoEdit.nativeElement);
    ($(this.companyLogoEdit.nativeElement) as any).modal('show');
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
    this.profile.updateImageUrl(this.croppedImage);
    ($(this.companyLogoEdit.nativeElement) as any).modal('hide');
  }

}
