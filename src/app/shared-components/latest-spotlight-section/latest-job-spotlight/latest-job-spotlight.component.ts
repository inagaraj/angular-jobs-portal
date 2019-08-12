import { Component, OnInit } from '@angular/core';
import {LatestjobspotlightService} from '../../../services/latestjobspotlight.service';
import {Latestjobspotlight} from '../../../models/latestjobspotlight.model';

@Component({
  selector: 'app-latest-job-spotlight',
  templateUrl: './latest-job-spotlight.component.html',
  styleUrls: ['./latest-job-spotlight.component.css']
})
export class LatestJobSpotlightComponent implements OnInit {




  //topTools = ['UI Path', 'Prism', 'Autodesk Anywhere', 'UI Path', 'Prism', 'Autodesk Anywhere']


  public jobs: Latestjobspotlight[];
  public topTools: Latestjobspotlight[];



  constructor(private latestjobsService: LatestjobspotlightService) {

  }
  public getLatestJobs() {
    this.latestjobsService.getLatestJobs().subscribe(jobs => this.jobs = jobs);
  }
  public gettopTools() {
    this.latestjobsService.gettopTools().subscribe(topTools => this.topTools = topTools);
  }
  ngOnInit() {
    this.getLatestJobs();
    this.gettopTools();
  }

}
