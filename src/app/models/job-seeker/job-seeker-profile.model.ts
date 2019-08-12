import { JobSeekerProfilePersonal } from './job-seeker-profile-personal.model';
import { JobSeekerProfileEducation } from './job-seeker-profile-education.model';
import {
  JobSeekerWorkExperience,
  JobSeekerSkills,
  JobSeekerCurrentPosition,
  JobSeekerContact,
  JobSeekerDocumnets
} from './job-seeker-profile-details.model';

export class JobSeekerProfile {
  personalDetails: JobSeekerProfilePersonal;
  educationDetails: JobSeekerProfileEducation[];
  workExperience: JobSeekerWorkExperience;
  skills: JobSeekerSkills;
  currentPosition: JobSeekerCurrentPosition;
  contact: JobSeekerContact;
  documents: JobSeekerDocumnets;
}
