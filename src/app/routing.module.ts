import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SeekerProfileComponent } from './job-seeker/seeker-profile/seeker-profile.component';
import { AuthGuard } from './guards/auth-guard.service';
import { RoleGuard } from './guards/role-guard.service';
import { EmployerProfileComponent } from './employer/employer-profile/employer-profile.component';
import { PostJobComponent } from './job/post-job/post-job.component';
import { PostedJobsComponent } from './job/posted-jobs/posted-jobs.component';
import { AppliedCandidateListComponent } from './job/posted-jobs/applied-candidate-list/applied-candidate-list.component';
import { ViewjobDescriptionComponent } from './job/viewjob-description/viewjob-description.component';


export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: SeekerProfileComponent,  data: {role: 'jobSeeker'}, canActivate: [AuthGuard, RoleGuard]},
  {
    path: 'employer-profile', component: EmployerProfileComponent,
    data: {role: 'employer'},
    canActivate: [RoleGuard]
  },
  {
    path: 'post-job', component: PostJobComponent,
    data: {role: 'employer'},
    canActivate: [RoleGuard]
  },
  {
    path: 'posted-jobs', component: PostedJobsComponent,
    data: {role: 'employer'},
    canActivate: [RoleGuard]
  },
  {
    path: 'applied-list/:id', component: AppliedCandidateListComponent,
    data: {role: 'employer'},
    canActivate: [RoleGuard]
  },
  {
    path: 'viewjob-desc/:id', component: ViewjobDescriptionComponent,
    data: {role: 'employer'},
    canActivate: [RoleGuard]
  },

];

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  providers: [
    AuthGuard,
    RoleGuard
  ],
  exports: [
      RouterModule
   ]
})
export class RoutingModule { }
