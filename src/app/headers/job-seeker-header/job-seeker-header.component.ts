import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { JobSeekerProfileService } from 'src/app/services/job-seeker-profile.service';

@Component({
  selector: 'app-job-seeker-header',
  templateUrl: './job-seeker-header.component.html',
  styleUrls: ['./job-seeker-header.component.css']
})
export class JobSeekerHeaderComponent implements OnInit {

// tslint:disable-next-line: variable-name
  constructor(private _authService: AuthService, private profile: JobSeekerProfileService) {
    this.profile.profileImageUpdateEmitter.subscribe(
      (status: string) => {
        alert(status);
        this.profileImageUrl = this.profile.jobSeeker.personalDetails.profilePhotoUrl;
      }
      );
  }

  profileImageUrl = '';

  ngOnInit() {
    this.profileImageUrl = this.profile.jobSeeker.personalDetails.profilePhotoUrl;
  }

  logout() {
    this._authService.logout();
  }

}
