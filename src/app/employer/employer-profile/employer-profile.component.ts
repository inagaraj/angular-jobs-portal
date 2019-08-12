import { Component, OnInit } from '@angular/core';
import { EmployerProfileService } from 'src/app/services/employer-profile.service';
import { EmployerProfile } from 'src/app/models/employer-profile.model';

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css']
})
export class EmployerProfileComponent implements OnInit {

  employer: EmployerProfile;

  constructor(private profile: EmployerProfileService) {}

  ngOnInit() {

    this.employer = this.profile.employer;

  }

}
