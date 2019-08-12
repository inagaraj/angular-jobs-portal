export class JobSeekerWorkExperience {
  id: string;
  keyFeature: string[];
  totalExperience: string;
  relavantExperience: string;
  noOfProjectCompleted: number;
  erpAutomated: string[];
  process: string[];
  domainDetails: string[];
  stabilityYears: number;
  stabilityNumber: number;
}

export class JobSeekerSkills {
  id: string;
  jobTitle: string;
  primaryRpaSkill: string;
  primaryWorkVersion: string;
  secondaryRpaSkill: string;
  secondaryWorkVersion: string;
  communication: string[];
}

export class JobSeekerCurrentPosition {
    companyName: string;
    duration: string;
    noticePeriod: string;
    offerInHand: string;
    presentCTC: string;
    expectedCTC: string;
    presentLocation: string;
    preferredLocation: string;
}

export class JobSeekerContact {
  preferredSlotWeekDaysStart: string;
    preferredSlotWeekDaysEnd: string;
    preferredSlotWeekEndsStart: string;
    preferredSlotWeekEndsEnd: string;
}

export class JobSeekerDocumnets {
  id: string;
  awards: string;
  certification: string[][];
  documents: {
    aadhar: string[];
    pan: string[];
    bonafide: string[];
  };
}


