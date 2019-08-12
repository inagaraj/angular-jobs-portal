import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {TopcompaniesService} from '../../../services/topcompanies.service';
import {Topcompanies} from '../../../models/topcompanies.model';
@Component({
  selector: 'app-top-companies-carousel',
  templateUrl: './top-companies-carousel.component.html',
  styleUrls: ['./top-companies-carousel.component.css']
})
export class TopCompaniesCarouselComponent implements OnInit {


  @ViewChild('topCompanies', { static: false }) topCompaniesCarousel: any;
 
  public topAwardedCompanies: Topcompanies[];

  public topCompaniesOptions = {loop: true,
    margin: 10,
    items: 3};

  topCompaniesnext() {
    this.topCompaniesCarousel.trigger('next.owl.carousel');
  }

  topCompaniesprev() {
    this.topCompaniesCarousel.trigger('prev.owl.carousel');
  }

  constructor(private topcompaniesService: TopcompaniesService) {
   
  }
  public getTopCompanies() {
    this.topcompaniesService.getTopCompanies().subscribe(topAwardedCompanies => this.topAwardedCompanies = topAwardedCompanies);
  }

 
  ngOnInit() {
    this.getTopCompanies();
  }
 

}
