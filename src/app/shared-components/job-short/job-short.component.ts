import { Component, OnInit } from '@angular/core';
import {JobShortService} from '../../services/job-short.service';
import {JobShort} from '../../models/job-short.model';
@Component({
  selector: 'app-job-short',
  templateUrl: './job-short.component.html',
  styleUrls: ['./job-short.component.css']
})
export class JobShortComponent implements OnInit {
  public shortJobs: JobShort[];
  
  

  constructor(private jobshortService: JobShortService) {
   
  }
  public getShortJobs() {
    this.jobshortService.getShortJobs().subscribe(shortJobs => this.shortJobs = shortJobs);
  }
  ngOnInit() {
    this.getShortJobs()
  }

}
