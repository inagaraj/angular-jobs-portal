export class EmployerProfileAbout {
  companyLogo: string;
  premium: boolean;
  lastUpdated: string;
  companyName: string;
  startedAt: string;
  noOfEmployees: string;
  description: string;
}

export class EmployerProfileContact {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  emailId: string;
  phoneNumber: string;
}

export class EmployerProfileHr {
  hrCity: string;
  hrState: string;
  hrEmailId: string;
  hrPhoneNumber: string;
}

export class EmployerProfileSocial {
  facebook: string;
  twitter: string;
  linkedIn: string;
}

export class EmployerProfile {
  id: string;
  about: EmployerProfileAbout;
  contact: EmployerProfileContact;
  hr: EmployerProfileHr;
  social: EmployerProfileSocial;
}



