import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  IsLoggedin = localStorage.loggedIn;
  IsRole = localStorage.role;
  transparentHeader = true;

  constructor(private router: Router ) {
    this.router.events.subscribe((ev) => {
      if (this.router.url === '/' || this.router.url === '/about') {
        this.transparentHeader = true;
    } else {
      this.transparentHeader = false;
    }
    });
  }

  accountType() {
    if (this.IsLoggedin) {
      if (this.IsLoggedin === 'true' && this.IsRole === 'jobSeeker') {
        // this.transparentHeader = true;
        return 'jobSeekerLoggedIn';
      } else if (this.IsLoggedin === 'true' && this.IsRole === 'employer') {
        // this.transparentHeader = true;
        return 'employerLoggedIn';
      } else {
        // this.transparentHeader = true;
        return 'no-signin';
      }
    }
  }

  ngOnInit() {

  }

}
