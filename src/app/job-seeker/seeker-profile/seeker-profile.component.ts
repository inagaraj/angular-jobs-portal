import { Component, OnInit } from '@angular/core';
import { JobSeekerProfileService } from 'src/app/services/job-seeker-profile.service';
import { Routes } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-seeker-profile',
  templateUrl: './seeker-profile.component.html',
  styleUrls: ['./seeker-profile.component.css'],
  providers: []
})
export class SeekerProfileComponent implements OnInit {
  seeker: {};
  constructor(private profile: JobSeekerProfileService) { }
  ngOnInit() {
    this.seeker = this.profile.jobSeeker;
  }
  console() {
  }
}