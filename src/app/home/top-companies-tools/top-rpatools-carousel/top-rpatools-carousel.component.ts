import { Component, OnInit, ViewChild } from '@angular/core';
import {RpatoolsService} from '../../../services/rpatools.service';
import {Rpatools} from '../../../models/rpatools.model';
@Component({
  selector: 'app-top-rpatools-carousel',
  templateUrl: './top-rpatools-carousel.component.html',
  styleUrls: ['./top-rpatools-carousel.component.css']
})
export class TopRpatoolsCarouselComponent implements OnInit {


  @ViewChild('rpaToolsCarousel', { static: false }) rpaToolsCarousel: any;



  public rpaTools: Rpatools[];
 


  rpaToolsOptions = { loop: true,
                      items: 4, };



  rpaToolsnext() {
    this.rpaToolsCarousel.trigger('next.owl.carousel');
  }

  rpaToolsprev() {
    this.rpaToolsCarousel.trigger('prev.owl.carousel');
  }


  constructor(private rpatoolsService: RpatoolsService) {
   
  }
  public getRpatools() {
    this.rpatoolsService.getRpatools().subscribe(rpaTools => this.rpaTools = rpaTools);
  }

 
  ngOnInit() {
    this.getRpatools();
  }

}
