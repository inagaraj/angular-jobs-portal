import { EventEmitter, ɵConsole } from '@angular/core';
import { JobSeekerProfilePersonal } from '././../models/job-seeker/job-seeker-profile-personal.model';
import { JobSeekerProfileEducation } from '../models/job-seeker/job-seeker-profile-education.model';
import {
  JobSeekerSkills,
  JobSeekerWorkExperience,
  JobSeekerCurrentPosition,
  JobSeekerContact,
  JobSeekerDocumnets
} from '../models/job-seeker/job-seeker-profile-details.model';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginProcess } from '../models/login-process.model';
import {SharedService} from '../services/shared.service';

@Injectable({
  providedIn: 'root'
})

export class JobSeekerProfileService {
  constructor(private httpService: HttpClient, private shared: SharedService) {
  }
  emailId = localStorage.emailId;
  qualificationOptions = [['Secondary', 'Secondary (X)'],
  ['Senior secondary', 'Senior Secondary (XII)'],
  ['Diploma', 'Diploma'],
  ['Graduation', 'Graduation'],
  ['Post Graduation', 'Post Graduation'],
  ['Ph. D', 'Ph. D']];
  keyFeaturesExperienceOptions = ['IQ Bot', 'Meta Bot', 'OCR'];
  experienceOptions = ['0 - 1 year', '1 - 2 years', '2 - 3 years'];
  erpAutomatedOptions = ['SRP', 'Oracle', 'Mainframe'];
  processOptions = ['Finance', 'IT', 'HR', 'Procurment'];
  domainOptions = ['Manufacturing', 'Telecom', 'Retail', 'Government', 'Food & Beverages'];
  jobTitleOptions = ['option1', 'option2'];
  rpaSkillOPtions = ['AA', 'BP', 'UI Path', 'Workfusion'];
  timeOptions = [
    { value: '10', time: '10.00 am' },
    { value: '11', time: '11.00 am' },
    { value: '12', time: '12.00 pm' },
    { value: '13', time: '1.00 pm' },
    { value: '14', time: '2.00 pm' },
    { value: '15', time: '3.00 pm' },
    { value: '16', time: '4.00 pm' },
    { value: '17', time: '5.00 pm' },
    { value: '18', time: '6.00 pm' },
  ];

  personalDetails: JobSeekerProfilePersonal = {
    id: '1',
    profilePhotoUrl: 'assets/images/shared/prolile-img-large.png',
    premium: true,
    firstName: 'Akaya',
    lastName: 'Kirihara',
    sex: 'female',
    emailId: 'akaya@kirhia.com',
    countryCode: '+91',
    mobileNumber: '9438167823',
    city: 'Chennai',
    state: 'TamilNadu',
    country: 'India',
    lastupdatedon: 'Mar 29, 2019',
    linkedinUrl: 'htpps://linkedin.com/in/hanieldaniel'
  };

  educationDetail1: JobSeekerProfileEducation = {
    educationId: '1',
    qualification: 'Secondary',
    educationStatus: 'pursuing',
    startYear: 'null',
    endYear: '2018',
    stream: 'null',
    board: 'state',
    performanceScale: 'percentage',
    instituteName: 'Anna Gesssms School, Guindy Chennai',
    totalMarks: '6.5',
    canditateId: '0',
    active: '0',
  };

  educationDetail2: JobSeekerProfileEducation = {
    educationId: '2',
    qualification: 'Graduation',
    educationStatus: 'pursuing',
    startYear: '2014',
    endYear: '2018',
    stream: 'B.E. Mechanical Engineering',
    board: 'CBSC',
    performanceScale: 'percentage',
    instituteName: 'Anna Univsssersity, Chennai',
    totalMarks: '6.5',
    canditateId: '0',
    active: '0',
  };

  workExperience: JobSeekerWorkExperience = {
    id: '1',
    keyFeature: ['IQ Bot', 'Meta Bot'],
    totalExperience: '1 - 2 years',
    relavantExperience: 'null',
    noOfProjectCompleted: 1,
    erpAutomated: [],
    process: [],
    domainDetails: [],
    stabilityYears: 4,
    stabilityNumber: 1,
  };

  skills: JobSeekerSkills = {
    id: '1',
    jobTitle: 'option1',
    primaryRpaSkill: 'AA',
    primaryWorkVersion: 'v2.12',
    secondaryRpaSkill: 'BP',
    secondaryWorkVersion: 'v4.56',
    communication: ['English', 'Tamil', 'Hindi', 'Telgu', 'French']
  };

  currentPosition: JobSeekerCurrentPosition = {
    companyName: 'Hello',
    duration: '2 years',
    noticePeriod: '3',
    offerInHand: 'Bye bye',
    presentCTC: '20,000s',
    expectedCTC: '4 lakhs',
    presentLocation: 'chennai, Tamil Nadu',
    preferredLocation: 'Banglore'
  };

  contact: JobSeekerContact = {
    preferredSlotWeekDaysStart: 'null',
    preferredSlotWeekDaysEnd: 'null',
    preferredSlotWeekEndsStart: 'null',
    preferredSlotWeekEndsEnd: 'null',
  };

  documents: JobSeekerDocumnets = {
    id: '1',
    awards: 'google awards (2019)',
    certification: [
      ['filename.ext', 'assets/images/shared/prolile-img-large.png'],
      ['filename2.ext', 'assets/images/shared/prolile-img-large.png'],
      ['filename3.ext', 'assets/images/shared/prolile-img-large.png'],
    ],
    documents: {
      aadhar: ['filename.ext', 'assets/images/shared/prolile-img-large.png'],
      pan: ['filename.ext', 'assets/images/shared/prolile-img-large.png'],
      bonafide: ['filename.ext', 'assets/images/shared/prolile-img-large.png']
    }
  };

  jobSeeker = {
    personalDetails: this.personalDetails,
    educationDetail: [this.educationDetail1, this.educationDetail2],
    workExperience: this.workExperience,
    currentPosition: this.currentPosition,
    skills: this.skills,
    contact: this.contact,
    awards: this.documents
  };
  modalType = new EventEmitter<string>();

  profileImageUpdateEmitter = new EventEmitter<string>();

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
    this.jobSeeker.personalDetails.lastupdatedon = this.toShortFormat(new Date());
  }
  /* Personal Details */
  getCanditatePersonalDetails(emailId: string) {
    const reqUrl = 'getCanditatePersonalDetails';
    return this.shared.httpPostMethod(reqUrl);
  }
  updatePersonalDetails(updatedDetails: JobSeekerProfilePersonal): Observable<any> {
    const body = JSON.stringify(updatedDetails);
    const reqUrl = 'newCanditatePersonalDetails';
    return this.shared.httpPostMethodBody(reqUrl, body);
  }
  updateDetails(profile: any) {
    const body = JSON.stringify(profile);
    Object.assign(this.jobSeeker.personalDetails, profile);
    const reqUrl = 'newCanditatePersonalDetails';
    return this.shared.httpPostMethodBody(reqUrl, body);
  }
  editCanditatePersonalDetails(editedDetails: JobSeekerProfilePersonal) {
    this.updateDate();
    const body = JSON.stringify(editedDetails);
    const reqUrl = 'editCanditatePersonalDetails';
    return this.shared.httpPostMethodBody(reqUrl, body);
  }
  /* Profile Picture */
  getCanditateProfilePicture(emailId: string) {
    const reqUrl = 'getCanditateProfilePicture';
    return this.shared.httpPostMethod(reqUrl);
  }
  updateProfilePic(imgData) {
    this.jobSeeker.personalDetails.profilePhotoUrl = imgData;
    this.updateDate();
    const params = new HttpParams().append('emailId', this.emailId);
    const reqUrl = 'uploadprofilepicture';
    return this.shared.httpUploadMethod(reqUrl, imgData, params);
  }
  /* Education */
  getEducationDetails(emailId: string) {
    const reqUrl = 'getCanditateEducationQualification';
    return this.shared.httpPostMethod(reqUrl);
  }
  addEducation(education: JobSeekerProfileEducation) {
    this.updateDate();
    const body = JSON.stringify(education);
    const reqUrl = 'canditateEducationQualification';
    return this.shared.httpPostMethodBody(reqUrl, body);
  }
  editEducation(editedDetails: JobSeekerProfileEducation, editId: number) {
    Object.assign(this.jobSeeker.educationDetail[editId], editedDetails);
    this.updateDate();
    const body = JSON.stringify(editedDetails);
    const reqUrl = 'editCanditateEducationQualification';
    return this.shared.httpPostMethodBody(reqUrl, body);
  }
  deleteEducation(index: number) {
    this.jobSeeker.educationDetail.splice(index, 1);
    this.updateDate();
    const reqUrl = 'deleteCanditateEducationQualification';
    const deleteUrl = '?educationId=' + index;
    return this.shared.httpDeleteMethod(reqUrl, deleteUrl);
  }
  /* Work Expereience */
  getCanditateWorkExperience(emailId: string) {
    const reqUrl = 'getCanditateWorkExperience';
    return this.shared.httpPostMethod(reqUrl);
  }
  updateWorkExperience(obj: JobSeekerWorkExperience) {
    Object.assign(this.jobSeeker.workExperience, obj);
    this.updateDate();
    const body = JSON.stringify(obj);
    const reqUrl = 'createCanditateWorkExperience';
    return this.shared.httpPostMethodBody(reqUrl, body);
  }
  deleteCanditateWorkExperience(workId: string) {
    const reqUrl = 'deleteCanditateWorkExperience';
    const deleteUrl = '?workId=' + workId;
    return this.shared.httpDeleteMethod(reqUrl, deleteUrl);
  }
  /* Skills */
  getCanditateSkills(emailId: string) {
    const reqUrl = 'getCanditateSkills';
    return this.shared.httpPostMethod(reqUrl);
  }
  updateSkills(obj: JobSeekerSkills) {
    Object.assign(this.jobSeeker.skills, obj);
    this.updateDate();
    const body = JSON.stringify(obj);
    const reqUrl = 'createCanditateSkills';
    return this.shared.httpPostMethodBody(reqUrl, body);
  }
  deleteCanditateSkills(skillId: string) {
    const reqUrl = 'deleteCanditateSkills';
    const deleteUrl = '?skillId=' + skillId;
    return this.shared.httpDeleteMethod(reqUrl, deleteUrl);
  }
  /* Current Position */
  getCanditateCurrentPosition(emailId: string) {
    const reqUrl = 'getCanditateCurrentPosition';
    return this.shared.httpPostMethod(reqUrl);
  }
  updateCurrentPosition(obj: JobSeekerCurrentPosition) {
    Object.assign(this.jobSeeker.currentPosition, obj);
    this.updateDate();
    const body = JSON.stringify(obj);
    const reqUrl = 'createCanditateCurrentPosition';
    return this.shared.httpPostMethodBody(reqUrl, body);
  }
  deleteCanditateCurrentPosition(positionId: string) {
    const reqUrl = 'deleteCanditateCurrentPosition';
    const deleteUrl = '?positionId=' + positionId;
    return this.shared.httpDeleteMethod(reqUrl, deleteUrl);
  }
  /* Contact */
  getCanditateToContact(emailId: string) {
    const reqUrl = 'getCanditateToContact';
    return this.shared.httpPostMethod(reqUrl);
  }
  updateContact(obj: JobSeekerContact) {
    Object.assign(this.jobSeeker.contact, obj);
    this.updateDate();
    const body = JSON.stringify(obj);
    const reqUrl = 'createToContact';
    return this.shared.httpPostMethodBody(reqUrl, body);
  }
  deleteCanditateToContact(contactId: string) {
    const reqUrl = 'deleteCanditateToContact';
    const deleteUrl = '?contactId=' + contactId;
    return this.shared.httpDeleteMethod(reqUrl, deleteUrl);
  }
  /* Documents */
  getCanditateAccomplishment(emailId: string) {
    const reqUrl = 'getCanditateAccomplishment';
    return this.shared.httpPostMethod(reqUrl);
  }
  upDateDocuments(obj: {}, bonafied: string[], certificate: string[],
                  adharcard: string[], pancard: string[]) {
    console.log(obj);
    this.updateDate();
    const body = JSON.stringify(obj);
    alert(body);
    const formdata: FormData = new FormData();
    for (var i = 0; i < certificate.length; i++) {
      formdata.append('certificate', certificate[i]);
    }
    const adharData: FormData = new FormData();
    for (var i = 0; i < adharcard.length; i++) {
      alert(adharcard[i]);
      formdata.append('adharCard', adharcard[i]);
    }
    const bonafiedData: FormData = new FormData();
    for (var i = 0; i < bonafied.length; i++) {
      formdata.append('bonafied', bonafied[i]);
    }
    const panData: FormData = new FormData();
    for (var i = 0; i < pancard.length; i++) {
      formdata.append('pancard', pancard[i]);
    }
    const params = new HttpParams().append('award', '1').append('emailId', this.emailId);
    const reqUrl = 'uploadDocument';
    return this.shared.httpUploadMethod(reqUrl, formdata, params);
  }

}
