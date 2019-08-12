import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  IsLoggedin = localStorage.loggedIn;
  IsRole = localStorage.role;
  constructor() { }

  accountType() {
    if (this.IsLoggedin) {
      if (this.IsLoggedin === 'true' && this.IsRole === 'jobSeeker') {
        return 'jobSeekerLoggedIn';
      } else if (this.IsLoggedin === 'true' && this.IsRole === 'employer') {
        return 'employerLoggedIn';
      } else {
        return 'no-signin';
      }
    }
  }

  ngOnInit() {
  }

}
