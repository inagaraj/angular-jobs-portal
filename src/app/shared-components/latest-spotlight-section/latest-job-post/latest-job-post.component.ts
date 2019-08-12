import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-job-post',
  templateUrl: './latest-job-post.component.html',
  styleUrls: ['./latest-job-post.component.css']
})
export class LatestJobPostComponent implements OnInit {

  totalJobs = 15432;

  constructor() { }

  ngOnInit() {
  }

}
