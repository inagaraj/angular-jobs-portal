import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AppliedCandidateList } from 'src/app/services/applied-candidate-list.service';

@Component({
  selector: 'app-applied-candidate-list',
  templateUrl: './applied-candidate-list.component.html',
  styleUrls: ['./applied-candidate-list.component.css'],
  providers: [
    AppliedCandidateList,
  ]
})
export class AppliedCandidateListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: AppliedCandidateList
  ) {}

  listing: object;

  ngOnInit() {
    this.listing = this.service.getList(this.route.snapshot.params.id);
    console.log(this.listing);
  }

}
