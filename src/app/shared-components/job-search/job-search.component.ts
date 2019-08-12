import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import {JobsearchService} from '../../services/jobsearch.service';
import {Jobsearch} from '../../models/jobsearch.model';
@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {

  jobSearch = new FormGroup({
    tools: new FormControl(''),
    location: new FormControl(''),
    experience: new FormControl(''),
  });


  public toolsDropdown: Jobsearch[];



  constructor(private jobsearchService: JobsearchService) {

  }
  public getTools() {
    this.jobsearchService.getTools().subscribe(toolsDropdown => this.toolsDropdown = toolsDropdown);
  }
  ngOnInit() {
    this.getTools();
  }

}
