import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-profiles-spotlight',
  templateUrl: './top-profiles-spotlight.component.html',
  styleUrls: ['./top-profiles-spotlight.component.css']
})
export class TopProfilesSpotlightComponent implements OnInit {

  totalProfiles = 12003;

  constructor() { }

  ngOnInit() {
  }

}
