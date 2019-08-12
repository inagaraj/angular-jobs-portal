import { Component, OnInit } from '@angular/core';
import {HomeBannerService} from '../../services/home-banner.service';
import {Homebanner} from '../../models/homebanner.model';
@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {

  public homeBanners: Homebanner[];
  
  

  constructor(private homebannerService: HomeBannerService) {
   
  }
  public getBannerCounts() {
    this.homebannerService.getBannerCounts().subscribe(homeBanners => this.homeBanners = homeBanners);
  }
  ngOnInit() {
    this.getBannerCounts();
  }

}
