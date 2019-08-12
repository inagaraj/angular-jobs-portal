import {SharedService} from '../services/shared.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostedJobsService {
  constructor(private shared: SharedService) {
  }
  jobsList = [
    {
      jobId : '1',
      jobName : 'Software Development Manager',
      location : 'Chennai',
      postedOn : '26 Jun, 2019',
      noOfApplications : '30',
      status : 'Active',
      expiryDate : '30 Aug, 2019',
    },
    {
      jobId : '2',
      jobName : 'Pipeline Management Analyst',
      location : 'Chennai',
      postedOn : '26 Jun, 2019',
      noOfApplications : '40',
      status : 'Inactive',
      expiryDate : '30 Aug, 2019',
    }
  ];
  getJobDetail() {
    const reqUrl = 'getJobDetail';
    return this.shared.httpPostMethod(reqUrl);
  }
}
