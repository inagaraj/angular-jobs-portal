export class Job {
  jobId: string;
  jobTitle: string;
  jobType: string;
  tools: string[];
  experience: string;
  salary: number;
  location: string;
  postedDate: string;
  expiresOn: string;
}

export class Candidate {
  id: string;
  profilePhotoUrl: string;
  premium: boolean;
  firstName: string;
  lastName: string;
  appliedOn: string;
  status: string;
  jobTitle: string;
  skills: string[];
  totalExperience: string;
  presentLocation: string;
}
