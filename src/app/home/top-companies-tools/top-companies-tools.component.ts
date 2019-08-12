import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-companies-tools',
  templateUrl: './top-companies-tools.component.html',
  styleUrls: ['./top-companies-tools.component.css']
})
export class TopCompaniesToolsComponent implements OnInit {


  jobSeekerLoggedIn = false;
  employerLoggedIn = false;

  constructor() { }

  accountType() {
    if (this.jobSeekerLoggedIn) {
      return 'jobSeekerLoggedIn';
    } else if (this.employerLoggedIn) {
      return 'employerLoggedIn';
    } else {
      return 'noLoggedIn';
    }
  }

  ngOnInit() {

  }

}
