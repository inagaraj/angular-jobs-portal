import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './routing.module';

import { ImageCropperModule } from 'ngx-image-cropper';
import { OwlModule } from 'ngx-owl-carousel';
import { QuillModule } from 'ngx-quill';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatChipsModule, MatAutocompleteModule, MatSliderModule, MatDatepickerModule,  MatInputModule, } from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {NgxPaginationModule} from 'ngx-pagination';


// Services
import { JobSeekerProfileService } from './services/job-seeker-profile.service';

// Components
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { NoLoginHeaderComponent } from './headers/no-login-header/no-login-header.component';
import { JobSeekerHeaderComponent } from './headers/job-seeker-header/job-seeker-header.component';
import { EmployerHeaderComponent } from './headers/employer-header/employer-header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { FooterComponent } from './footer/footer.component';
import { JobSearchComponent } from './shared-components/job-search/job-search.component';
import { AboutSpecialComponent } from './shared-components/about-special/about-special.component';
import { AverageSalaryComponent } from './home/average-salary/average-salary.component';
import { ProfileCompletenessComponent } from './home/profile-completeness/profile-completeness.component';
import { LatestJobPostComponent } from './shared-components/latest-spotlight-section/latest-job-post/latest-job-post.component';
import { LatestSpotlightSectionComponent } from './shared-components/latest-spotlight-section/latest-spotlight-section.component';
import { JobShortComponent } from './shared-components/job-short/job-short.component';
// tslint:disable-next-line: max-line-length
import { LatestJobSpotlightComponent } from './shared-components/latest-spotlight-section/latest-job-spotlight/latest-job-spotlight.component';
import { ProfileShortComponent } from './shared-components/profile-short/profile-short.component';
// tslint:disable-next-line: max-line-length
import { TopProfilesSpotlightComponent } from './shared-components/latest-spotlight-section/top-profiles-spotlight/top-profiles-spotlight.component';
import { EmployerShortBannerComponent } from './home/employer-short-banner/employer-short-banner.component';
import { TopCompaniesToolsComponent } from './home/top-companies-tools/top-companies-tools.component';
import { TopCompaniesCarouselComponent } from './home/top-companies-tools/top-companies-carousel/top-companies-carousel.component';
import { TopRpatoolsCarouselComponent } from './home/top-companies-tools/top-rpatools-carousel/top-rpatools-carousel.component';
import { FaqSectionComponent } from './home/faq-section/faq-section.component';
import { ModalLoginComponent } from './shared-components/modal-login/modal-login.component';
import { ModalSignupComponent } from './shared-components/modal-signup/modal-signup.component';
import { OtpModalComponent } from './shared-components/modal-signup/otp-modal/otp-modal.component';
import { SignupSuccessModalComponent } from './shared-components/modal-signup/signup-success-modal/signup-success-modal.component';
import { SeekerProfileComponent } from './job-seeker/seeker-profile/seeker-profile.component';
import { SeekerPersonalDetailsComponent } from './job-seeker/seeker-profile/seeker-personal-details/seeker-personal-details.component';
import { SeekerEducationDetailsComponent } from './job-seeker/seeker-profile/seeker-education-details/seeker-education-details.component';
import { SeekerProfileDetailsComponent } from './job-seeker/seeker-profile/seeker-profile-details/seeker-profile-details.component';
// tslint:disable-next-line: max-line-length
import { EditSeekerPersonalDetailsComponent } from './job-seeker/seeker-profile/seeker-personal-details/edit-seeker-personal-details/edit-seeker-personal-details.component';
// tslint:disable-next-line: max-line-length
import { SeekerAddEducationDetailComponent } from './job-seeker/seeker-profile/seeker-education-details/seeker-add-education-detail/seeker-add-education-detail.component';
import { EmployerProfileComponent } from './employer/employer-profile/employer-profile.component';
import { EmployerProfileAboutComponent } from './employer/employer-profile/employer-profile-about/employer-profile-about.component';
import { EmployerProfileDetailComponent } from './employer/employer-profile/employer-profile-detail/employer-profile-detail.component';
import { PostJobComponent } from './job/post-job/post-job.component';
import { PostedJobsComponent } from './job/posted-jobs/posted-jobs.component';
import { AppliedCandidateListComponent } from './job/posted-jobs/applied-candidate-list/applied-candidate-list.component';

import { ForgotPasswordComponent } from './shared-components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './shared-components/reset-password/reset-password.component';
import { ChangePasswordComponent } from './shared-components/change-password/change-password.component';
import { StandardComponent } from './subscription/standard/standard.component';
import { PremiumComponent } from './subscription/premium/premium.component';
import { ViewjobDescriptionComponent } from './job/viewjob-description/viewjob-description.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    NoLoginHeaderComponent,
    JobSeekerHeaderComponent,
    EmployerHeaderComponent,
    HomeComponent,
    AboutComponent,
    HomeBannerComponent,
    FooterComponent,
    JobSearchComponent,
    AboutSpecialComponent,
    AverageSalaryComponent,
    ProfileCompletenessComponent,
    LatestJobPostComponent,
    LatestSpotlightSectionComponent,
    JobShortComponent,
    LatestJobSpotlightComponent,
    ProfileShortComponent,
    TopProfilesSpotlightComponent,
    EmployerShortBannerComponent,
    TopCompaniesToolsComponent,
    TopCompaniesCarouselComponent,
    TopRpatoolsCarouselComponent,
    FaqSectionComponent,
    ModalLoginComponent,
    ModalSignupComponent,
    OtpModalComponent,
    SignupSuccessModalComponent,
    SeekerProfileComponent,
    SeekerPersonalDetailsComponent,
    SeekerEducationDetailsComponent,
    SeekerProfileDetailsComponent,
    EditSeekerPersonalDetailsComponent,
    SeekerAddEducationDetailComponent,
    EmployerProfileComponent,
    EmployerProfileAboutComponent,
    EmployerProfileDetailComponent,
    PostJobComponent,
    PostedJobsComponent,
    AppliedCandidateListComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    StandardComponent,
    PremiumComponent,
    ViewjobDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OwlModule,
    CommonModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatFormFieldModule,
    RouterModule.forRoot(APP_ROUTES, {onSameUrlNavigation: 'reload'}),
    ReactiveFormsModule,
    ImageCropperModule,
    QuillModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatInputModule,
    NgxPaginationModule
  ],
  providers: [JobSeekerProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
