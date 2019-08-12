import { Component, OnInit } from '@angular/core';
import {AboutspecialService} from '../../services/aboutspecial.service';
import {Aboutspecial} from '../../models/aboutspecial.model';
@Component({
  selector: 'app-about-special',
  templateUrl: './about-special.component.html',
  styleUrls: ['./about-special.component.css']
})
export class AboutSpecialComponent implements OnInit {

  public aboutSpecial: Aboutspecial[];
  
  

  constructor(private jobsearchService: AboutspecialService) {
   
  }
  public getabout_special() {
    this.jobsearchService.getabout_special().subscribe(aboutSpecial => this.aboutSpecial = aboutSpecial);
  }
  ngOnInit() {
    this.getabout_special()
  }

}
