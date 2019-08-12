import { Component, OnInit, OnDestroy } from '@angular/core';
import {AboutService} from '../services/about.service';
import {About} from '../models/about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  public about_us: About[];
  constructor(private aboutService: AboutService) {
  }
// tslint:disable-next-line: variable-name
 
  public getAboutus_icons() {
    this.aboutService.getAboutus_icons().subscribe(about_us => this.about_us = about_us);
   
   
  }


  ngOnInit() {
    this.getAboutus_icons();
  }
  // ngOnDestroy() {
  //   this.aboutService.unsubscribe();
  // }
}
