import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostJobService } from 'src/app/services/post-job.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatAutocomplete, } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'll',
  },
  display: {
    dateInput: 'll',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'll',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css'],
  providers: [
    PostJobService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class PostJobComponent implements OnInit {

  jobForm: FormGroup;
  experienceOptions: number[];
  minDate = new Date();
  toolsPresent: string[] = [];
  filteredTools: Observable<string[]>;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  toolsOptions: string[];
  toolsControl = new FormControl();
  errorMessage = 'The error message';

  @ViewChild('toolInput', { static: false }) toolInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;
  @ViewChild('succeessMessageModal', { static: true }) succeessMessageModal: ElementRef;
  @ViewChild('errorMessageModal', { static: true }) errorMessageModal: ElementRef;

  editorConfig = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      [{ indent: '-1' }, { indent: '+1' }]
    ]
  };

  constructor(private fb: FormBuilder, private job: PostJobService, private router: Router) {
    this.filteredTools = this.toolsControl.valueChanges.pipe(
      startWith(null),
      map((tool: string | null) => tool ? this._filter(tool) : this.toolsOptions.slice()));
  }

  ngOnInit() {

    this.experienceOptions = this.job.experienceOptions;
    this.toolsOptions = this.job.toolsOptions;

    this.jobForm = this.fb.group({
      jobTitle: [null, [Validators.maxLength(75), Validators.required, Validators.pattern(/^[a-zA-Z0-9 .,()/-]+$/)]],
      editor: [null, [Validators.required]],
      vacancies: [null, [Validators.max(1000), Validators.required, Validators.min(1)]],
      jobType: [null, [Validators.required]],
      location: [null, [Validators.maxLength(75), Validators.required, Validators.pattern(/^[a-zA-Z0-9 .,()/-]+$/)]],
      experience: [null, [Validators.required]],
      salary: [null, [Validators.required, Validators.min(10000)]],
      tools: null,
      expiryDate: null,
      postedDate: this.toShortFormat(new Date()),
      lastUpdatedOn: this.toShortFormat(new Date()),
    });
  }

  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our tool
      if ((value || '').trim()) {
        if (this.toolsPresent.includes(value.trim())) {
          this.toolsPresent.push(value.trim());
        }
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }
      this.toolsControl.setValue(null);
      this.patchToolsValue();
    }
  }

  patchToolsValue() {
    this.jobForm.get('tools').setValue(this.toolsPresent);
    this.jobForm.get('tools').markAsTouched();
    this.jobForm.get('tools').markAsDirty();
  }

  remove(tool: string): void {
    const index = this.toolsPresent.indexOf(tool);

    if (index >= 0) {
      this.toolsPresent.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.toolsPresent.push(event.option.viewValue);
    this.toolInput.nativeElement.value = '';
    this.toolsControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.toolsOptions.filter(tool => tool.toLowerCase().indexOf(filterValue) === 0);
  }


  toShortFormat = (date: Date) => {
    const monthNames = ['Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec'];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return date.toISOString().split('T')[0];
    // return (day + ' ' + monthNames[monthIndex] + ', ' + year);
  }

  onSubmit() {
    const submitValue = this.jobForm.value;
    const expDate = this.toShortFormat(submitValue.expiryDate._d);
    submitValue.expiryDate = expDate;
    submitValue.tools = JSON.stringify(submitValue.tools);
    const formValue = submitValue;
    console.log(formValue);
    this.job.submitJob(submitValue).subscribe(
      data => {
        console.log(data);
        if (data['success'] === true) {
          ($(this.succeessMessageModal.nativeElement) as any).modal('show');
          setTimeout(() => {
            ($(this.succeessMessageModal.nativeElement) as any).modal('hide');
            this.router.navigateByUrl('/posted-jobs');
          }, 2000);
        } else if (data['success'] === false) {
          ($(this.errorMessageModal.nativeElement) as any).modal('show');
          this.errorMessage = data['response'];
        }
        return true;
      },
      error => {
        console.error('Error Update Post Job!');
        return Observable.throw(error);
      }
    );
  }
}
