import { EmployerProfile, EmployerProfileContact, EmployerProfileHr, EmployerProfileSocial } from '../models/employer-profile.model';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class EmployerProfileService {
  constructor(private httpService: HttpClient) {
  }
  companySizeOptions = ['10 - 20', '20 - 30', '50 - 100', '100 - 150', 'more than 150'];


  employer: EmployerProfile = {
    id: '1',
    about: {
      companyLogo: 'assets/images/shared/prolile-img-large.png',
      premium: true,
      lastUpdated: '29 jun, 2019',
      companyName: 'Some Company1',
      startedAt: 'null',
      noOfEmployees: 'null',
      description: 'Some Company1\nasdasd\nasd\nas\nda\nsd\na',
    },
    contact: {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      emailId: '',
      phoneNumber: '',
    },
    hr: {
      hrCity: '',
      hrState: '',
      hrEmailId: '',
      hrPhoneNumber: '',
    },
    social: {
      facebook: '',
      twitter: '',
      linkedIn: '',
    }
  };

  toShortFormat = (date: Date) => {

    const monthNames = ['Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec'];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return (day + ' ' + monthNames[monthIndex] + ', ' + year);
  }

  updateDate() {
    this.employer.about.lastUpdated = this.toShortFormat(new Date());
  }

  updateImageUrl(imgData) {
    this.employer.about.companyLogo = imgData;
    this.updateDate();
  }

  updateAbout(obj: any) {
    Object.assign(this.employer.about, obj);
    const body = JSON.stringify(obj);
    return this.httpService.post('http://localhost:3000/update_emp_about/', body, httpOptions);
    this.updateDate();
    console.log(this.employer.about);
  }

  updateContact(obj: EmployerProfileContact) {
    Object.assign(this.employer.contact, obj);
    const body = JSON.stringify(obj);
    return this.httpService.post('http://localhost:3000/update_emp_contact/', body, httpOptions);
    this.updateDate();
    console.log(this.employer.contact);
  }

  updateHr(obj: EmployerProfileHr) {
    Object.assign(this.employer.hr, obj);
    const body = JSON.stringify(obj);
    return this.httpService.post('http://localhost:3000/update_hr/', body, httpOptions);
    this.updateDate();
    console.log(this.employer.hr);
  }

  updateSocial(obj: EmployerProfileSocial) {
    Object.assign(this.employer.social, obj);
    const body = JSON.stringify(obj);
    return this.httpService.post('http://localhost:3000/update_social/', body, httpOptions);
    this.updateDate();
    console.log(this.employer.social);
  }

}
