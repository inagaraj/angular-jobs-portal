import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-profile-completeness',
  templateUrl: './profile-completeness.component.html',
  styleUrls: ['./profile-completeness.component.css']
})
export class ProfileCompletenessComponent implements OnInit {

  profileCompletePercent = 70;

  constructor() { }


  profileCompleteness() {
    let val = this.profileCompletePercent;
    const circle = $('.completeness-graphic svg .bar');

    const r = +circle.attr('r');
    const c = Math.PI * ( r * 2 );

    if (val < 0) { val = 0; }
    if (val > 100) { val = 100; }
    const pct: number = ((100 - val) / 100) * c;
    circle.css({ strokeDashoffset: pct});

}

ngOnInit() {
  this.profileCompleteness();
}


}
