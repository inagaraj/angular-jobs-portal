import { Component, OnInit } from '@angular/core';
import { PostedJobsService } from 'src/app/services/posted-jobs.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.css'],
  providers: [
    PostedJobsService,
  ]
})
export class PostedJobsComponent implements OnInit {
  p = 1;
  jobsList = [];

  constructor(private jobs: PostedJobsService) { }

  ngOnInit() {
    this.jobsList = this.jobs.jobsList;
    this.postedJob();
  }
  postedJob() {
    this.jobs.getJobDetail().subscribe(
      data => {
        console.log(data);
        this.jobsList = data['response'];
        return true;
      },
      error => {
        console.error('Error Update Contact Details!');
        return Observable.throw(error);
      }
    );
  }
}
