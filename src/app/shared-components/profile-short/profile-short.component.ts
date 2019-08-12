import { Component, OnInit } from '@angular/core';
import {ProfileshortService} from '../../services/profileshort.service';
import {Profileshort} from '../../models/profileshort.model';

@Component({
  selector: 'app-profile-short',
  templateUrl: './profile-short.component.html',
  styleUrls: ['./profile-short.component.css']
})
export class ProfileShortComponent implements OnInit {

  public jobseekers: Profileshort[];

  constructor(private profileshortService: ProfileshortService) {

  }
  public getJObSeekers() {
    this.profileshortService.getJObSeekers().subscribe(jobseekers => this.jobseekers = jobseekers);
  }

  ngOnInit() {
    this.getJObSeekers();
  }

}
