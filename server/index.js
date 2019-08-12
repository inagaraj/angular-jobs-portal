const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.json());
/* Banner Counts Array */
const banner_counts = [
  {
    jobs_count : '10,000',
    profiles_count: '15,000',
    companies_count: '3,000',
  },
];
/* Job Search */
const search_tools = [
  {
    id : 1,
    tool_name: 'UI Path',
  },
  {
    id : 2,
    tool_name: 'Prism',
  },
  {
    id : 3,
    tool_name: 'Autodesk Anywhere',
  },
];

/* About Special */
const about_special = [
  {
    top_special_section : [
      {

        special_count : 740,
        special_title: 'Total job opportunities',
        special_icon_path: './../../../assets/images/about/special-1.png',
      },
      {
        special_count : 120,
        special_title: 'Onsite opportunities',
        special_icon_path: './../../../assets/images/about/special-2.png',
      },
    ],
    bottom_special_section: [
      {
        special_count : 525,
        special_title: 'Total job opportunities1',
        special_icon_path: './../../../assets/images/about/special-3.png',
      },
      {
        special_count : 96,
        special_title: 'Onsite opportunities1',
        special_icon_path: './../../../assets/images/about/special-4.png',
      },
    ],
  },
 
];

/* Average Salary */
const avg_salary = [
  {
    salary : '1,00,000',
  },
];

/*Latest Jobs Array */
const latest_jobs = [
  {
    id : 1,
    logoImgPath: 'assets/images/shared/companylogos/1.png',
    desc: 'Browse the latest RPA jobs & create your UX Profile to connect with the best companies. Browse the latest RPA jobs & create your UX Profile to connect with the best companies create your UX Profile to connect with the best companies. Browse the latest RPA jobs & create your UX Profile.',
    title : 'Business Analyst',
    premium: true,
    postedOn: '29 Mar,2019',
    experience: [3, 5],
    salary: ['3L', '5L'],
    location: 'chennai',
    tools: ['UX Path', 'BluePrism', 'Autodesk Anywhere'],
   
  },
  {
    id : 2,
    logoImgPath: 'assets/images/shared/companylogos/3.png',
    desc: 'Browse the latest RPA jobs & create your UX Profile to connect with the best companies. Browse the latest RPA jobs & create your UX Profile to connect with the best companies create your UX Profile to connect with the best companies. Browse the latest RPA jobs & create your UX Profile.',
    title : 'Business Analyst',
    premium: false,
    postedOn: '27 Mar,2019',
    experience: [3, 5],
    salary: ['3L', '5L'],
    location: 'chennai',
    tools: ['BluePrism', 'Autodesk Anywhere', 'UX Path' ]
  },
];

/* Top Tools */
const toptools = [
  {
    id : 1,
    tool_name: 'UI Path',
  },
  {
    id : 2,
    tool_name: 'Prism',
  },
  {
    id : 3,
    tool_name: 'Autodesk Anywhere',
  },
  {
    id : 4,
    tool_name: 'UI Path',
  },
  {
    id : 5,
    tool_name: 'Prism',
  },
  {
    id : 6,
    tool_name: 'Autodesk Anywhere',
  },
  
];
/*Job Seekers Array */
const job_seekers = [
  {
    id: 1,
    profileImgUrl: 'assets/images/shared/profiles/1.png',
    firstName: 'Akaya',
    lastName: 'Kirihara',
    profile: 'Developer',
    premium: true,
    tools: ['Blue Prism', 'UI Path'],
    experience: 3,
    location: 'Chennai'
   
  },
  {
    id: 2,
    profileImgUrl: 'assets/images/shared/profiles/2.png',
    firstName: 'Toyama',
    lastName: 'Kintaro',
    profile: 'UI Designer',
    premium: false,
    tools: ['Ansys', 'UI Path'],
    experience: 3,
    location: ''
  },
];


/*Top Companies Array */
const top_companies = [
  {
    name : 'Dell',
    logoUrl: 'assets/images/shared/companylogos/1.png',
    desc: 'Ranks Top 20 Global Information Technologies Meet 2018. sadas da asd a'
   
  },
  {
    name : 'Dell',
    logoUrl: 'assets/images/shared/companylogos/2.png',
    desc: 'Ranks Top 20 Global Information Technologies Meet 2018. sadas da asd a'
  },
  {
    name : 'Dell',
    logoUrl: 'assets/images/shared/companylogos/3.png',
    desc: 'Ranks Top 20 Global Information Technologies Meet 2018. sadas da asd a'
  },
  {
    name : 'Dell',
    logoUrl: 'assets/images/shared/companylogos/4.png',
    desc: 'Ranks Top 20 Global Information Technologies Meet 2018. sadas da asd a'
  },
  {
    name : 'Dell',
    logoUrl: 'assets/images/shared/companylogos/5.png',
    desc: 'Ranks Top 20 Global Information Technologies Meet 2018. sadas da asd a'
  },
  
];

/*Top RPA Tools */
const toprpatools = [
  {
    name: 'blueprism',
    imageUrl: 'assets/images/shared/tools/1.png'
   
  },
  {
    name: 'blueprism',
    imageUrl: 'assets/images/shared/tools/2.png'
  },
  {
    name: 'blueprism',
    imageUrl: 'assets/images/shared/tools/3.png'
  },
  {
    name: 'blueprism',
    imageUrl: 'assets/images/shared/tools/4.png'
  },
  {
    name: 'blueprism',
    imageUrl: 'assets/images/shared/tools/2.png'
  },
  
];


/*Short Jobs Array */
const short_jobs = [
  {
    id : 1,
    logoImgPath: 'assets/images/shared/companylogos/1.png',
    desc: 'Browse the latest RPA jobs & create your UX Profile to connect with the best companies. Browse the latest RPA jobs & create your UX Profile to connect with the best companies create your UX Profile to connect with the best companies. Browse the latest RPA jobs & create your UX Profile.',
    title : 'Business Analyst',
    premium: true,
    postedOn: '29 Mar,2019',
    experience: [3, 5],
    salary: ['3L', '5L'],
    location: 'chennai',
    tools: ['UX Path', 'BluePrism', 'Autodesk Anywhere'],
   
  },
  {
    id : 2,
    logoImgPath: 'assets/images/shared/companylogos/3.png',
    desc: 'Browse the latest RPA jobs & create your UX Profile to connect with the best companies. Browse the latest RPA jobs & create your UX Profile to connect with the best companies create your UX Profile to connect with the best companies. Browse the latest RPA jobs & create your UX Profile.',
    title : 'Business Analyst',
    premium: false,
    postedOn: '27 Mar,2019',
    experience: [3, 5],
    salary: ['3L', '5L'],
    location: 'chennai',
    tools: ['BluePrism', 'Autodesk Anywhere', 'UX Path' ]
  },
];
/* About Special */
const aboutus_icons = [
{
    special_count : 525,
    special_title: 'Total job opportunities1',
    
},
{
  special_count : 96,
  special_title: 'Onsite opportunities1',
  
},
{
  special_count : 756,
  special_title: 'Onsite opportunities1',
  
},
 
];

var personalDetails = [
  { 
    id: '1',
    profilePhotoUrl: 'assets/images/shared/prolile-img-large.png',
    premium: true,
    firstName : 'Akaya',
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
  },
];
var educationalDetails = [
  {
    id : '1',
    qualification: 'Secondary',
    educationStatus: 'pursuing',
    startYear: 'null',
    endYear: '2018',
    stream: 'null',
    board: 'state',
    performaceScale: 'percentage',
    instituteName: 'Anna Gems School, Guindy Chennai',
    totalMarks: '6.5'
  },
  {
    id: '2',
    qualification: 'Graduation',
    educationStatus: 'pursuing',
    startYear: '2014',
    endYear: '2018',
    stream: 'B.E. Mechanical Engineering',
    board: 'CBSC',
    performaceScale: 'percentage',
    instituteName: 'Anna University, Chennai',
    totalMarks: '6.5',
  }
]
var workExperience = [
  {
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
  },
]

var documents_data = [
  {
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
  }
]
var skills = [
  {
    id: '1',
    jobTitle : 'option1',
    primaryRpaSkill : 'AA',
    primaryWorkVersion: 'v2.12',
    secondaryRpaSkill: 'BP',
    secondaryWorkVersion: 'v4.56',
    communication: ['English', 'Tamil', 'Hindi', 'Telgu', 'French']
  }
]
var employer_profile = 
[
  {
    id:'1',
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
  }
]
// Allow cross-origin requests
app.use(function(_req, res, next) {
 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/short_jobs", (_req, res) => {

  return res.json(short_jobs);
});

app.get("/get_tools", (_req, res) => {

  return res.json(search_tools);
});
app.get("/about_special", (_req, res) => {

  return res.json(about_special);
});
app.get("/avg_salary", (_req, res) => {

  return res.json(avg_salary);
});
app.get("/latest_jobs", (_req, res) => {

  return res.json(latest_jobs);
});
app.get("/banner_counts", (_req, res) => {

  return res.json(banner_counts);
});
app.get("/top_tools", (_req, res) => {

  return res.json(toptools);
});
app.get("/get_job_seekers", (_req, res) => {

  return res.json(job_seekers);
});
app.get("/top_companies", (_req, res) => {

  return res.json(top_companies);
});
app.get("/rpa_tools", (_req, res) => {

  return res.json(toprpatools);
});
app.post("/about_us", (_req, res) => {
console.log(res);
  return res.json(aboutus_icons);
});
app.get("/update_education", (_req, res) => {
 
  return "updated";
});

app.post('/update_details', function (req, res) {
  // NOTE: This is a sample app to show the Angular Http client functionality.
  // This API endpoint keeps the submitted data in memory. It does not save to a database.

  // This example uses Express because it is easy to install and run.
  // You could write a different back-end app in PHP, Python, Ruby, .NET, etc.

  
  console.log(req.body.id);
  let id = req.body.id;

  // find the requested food in the array
  let p = educationalDetails.find(x => x.id == id);

  // write the new name to the data storage
  p.firstName = req.body.firstName;
  p.lastName = req.body.lastName;
  p.sex = req.body.sex;
  p.countryCode = req.body.countryCode;
  p.mobileNumber = req.body.mobileNumber;
  p.city = req.body.city;
  p.state = req.body.state;
  p.country = req.body.country;
  p.linkedinUrl = req.body.linkedinUrl;

  // send a copy of the modified object back to the caller
  res.send(p);
  

});


app.post('/update_education_details', function (req, res) {
  console.log(req.body.id);
  let id = req.body.id;
  let e = educationalDetails.find(x => x.id == id);
  e.educationStatus = req.body.educationStatus;
  e.startYear = req.body.startYear;
  e.endYear = req.body.endYear;
  e.stream = req.body.stream;
  e.board = req.body.board;
  e.performaceScale = req.body.performaceScale;
  e.instituteName = req.body.instituteName;
  e.totalMarks = req.body.totalMarks;
  res.send(e);
});


app.post('/add_education', function (req, res) {
  console.log(req.body.id);
  let id = 1;
    if (educationalDetails.length > 0) {
        let maximum = Math.max.apply(Math, educationalDetails.map(function (f) { return f.id; }));
        id = maximum + 1;
    }

    // build the new food object
    let new_edu = 
    {
        "id": id, 
        "name": req.body.name,
        "qualification":  req.body.qualification,
        "educationStatus":  req.body.educationStatus,
        "startYear": req.body.educationStatus,
        "endYear": req.body.endYear,
        "stream": req.body.stream,
        "board": req.body.board,
        "performaceScale": req.body.performaceScale,
        "instituteName": req.body.instituteName,
        "totalMarks": req.body.totalMarks,
    };

    // "save" the data by adding it to the "foods" array in memory
    educationalDetails.push(new_edu);

    // In the real world, you would put code here to save the data to a
    // database or another type of storage.

    // When we're done, it's nice to return the newly created object to the caller.
    res.send(new_edu);
});


app.post('/update_contact', function (req, res) {
  //console.log(req.body);
  let contact = 
  {
      "preferredSlotWeekDaysEnd": req.body.preferredSlotWeekDaysEnd, 
      "preferredSlotWeekDaysEnd": req.body.preferredSlotWeekDaysEnd,
      "preferredSlotWeekEndsStart":  req.body.preferredSlotWeekEndsStart,
      "preferredSlotWeekEndsEnd":  req.body.preferredSlotWeekEndsEnd,
  };
  //console.log(contact);
  res.send(contact);
});

app.post('/update_work_exp', function (req, res) {
  console.log(req.body.id);
  let id = req.body.id;
  let w = workExperience.find(x => x.id == id);
  w.keyFeature = req.body.keyFeature;
  w.totalExperience = req.body.totalExperience;
  w.relavantExperience = req.body.relavantExperience;
  w.noOfProjectCompleted = req.body.noOfProjectCompleted;
  w.erpAutomated = req.body.erpAutomated;
  w.process = req.body.process;
  w.domainDetails = req.body.domainDetails;
  w.stabilityYears = req.body.stabilityYears;
  w.stabilityNumber = req.body.stabilityNumber;
  res.send(w);
});

app.post('/update_current_position', function (req, res) {
  //console.log(req.body);
  let currentPosition = 
  {
      "companyName": req.body.companyName, 
      "duration": req.body.duration,
      "noticePeriod":  req.body.noticePeriod,
      "offerInHand":  req.body.offerInHand,
      "presentCTC":  req.body.presentCTC,
      "expectedCTC":  req.body.expectedCTC,
      "presentLocation":  req.body.presentLocation,
      "preferredLocation":  req.body.preferredLocation,
  };
  //console.log(contact);
  res.send(currentPosition);
});

app.post('/update_documents', function (req, res) {
  
  console.log(req.body.id);
  let id = req.body.id;
  let d = documents_data.find(x => x.id == id);
  res.send(documents_data);
});


app.post('/update_skills', function (req, res) {
  console.log(req.body.id);
  let id = req.body.id;
  let s = skills.find(x => x.id == id);
  s.jobTitle = req.body.jobTitle;
  s.primaryRpaSkill = req.body.primaryRpaSkill;
  s.primaryWorkVersion = req.body.primaryWorkVersion;
  s.secondaryRpaSkill = req.body.secondaryRpaSkill;
  s.secondaryWorkVersion = req.body.secondaryWorkVersion;
  s.communication = req.body.communication;
  res.send(s);
});

app.post('/update_hr', function (req, res) {
  console.log(req.body.id);
  let id = req.body.id;
  let ep = employer_profile.find(x => x.id == id);
  ep.hr.hrCity = req.body.hrCity;
  ep.hr.hrEmailId = req.body.hrEmailId;
  ep.hr.hrPhoneNumber = req.body.hrPhoneNumber;
  ep.hr.hrState = req.body.hrState;
  res.send(ep.hr);
});

app.post('/update_social', function (req, res) {
  console.log(req.body.id);
  let id = req.body.id;
  let ep = employer_profile.find(x => x.id == id);
  ep.social.facebook = req.body.facebook;
  ep.social.twitter = req.body.twitter;
  ep.social.linkedIn = req.body.linkedIn;
  res.send(ep.social);
});



app.post('/update_emp_contact', function (req, res) {
  console.log(req.body.id);
  let id = req.body.id;
  let ep = employer_profile.find(x => x.id == id);
  ep.contact.addressLine1 = req.body.addressLine1;
  ep.contact.addressLine2 = req.body.addressLine2;
  ep.contact.city = req.body.city;
  ep.contact.state = req.body.state;
  ep.contact.emailId = req.body.emailId;
  ep.contact.phoneNumber = req.body.phoneNumber;
  res.send(ep.contact);
});



app.post('/update_emp_about', function (req, res) {
  console.log(req.body.id);
  let id = req.body.id;
  let ep = employer_profile.find(x => x.id == id);
  ep.about.companyLogo = req.body.companyLogo;
  ep.about.premium = req.body.premium;
  ep.about.lastUpdated = req.body.lastUpdated;
  ep.about.companyName = req.body.companyName;
  ep.about.startedAt = req.body.startedAt;
  ep.about.noOfEmployees = req.body.noOfEmployees;
  ep.about.description = req.body.description;
  res.send(ep.about);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
