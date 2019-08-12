import { Job } from '../models/job.model';
import {SharedService} from '../services/shared.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostJobService {
  constructor(private shared: SharedService) {
  }
  experienceOptions = [1, 2, 3];
  toolsOptions = ['UI Path', 'BluePrism', 'tool3', 'tool4'];

  successorfail = {
    type: 'success',
    message: 'Successfull',
    // type: 'fail',
    // message: 'This is a Failure message',
  };


  submitJob(obj: Job) {
    console.log(obj);
    // return this.successorfail;
    const body = JSON.stringify(obj);
    const reqUrl = 'createNewJob';
    return this.shared.httpPostMethodBody(reqUrl, body);
  }

}
